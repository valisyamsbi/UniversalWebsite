import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'please_change_me';

router.post('/login', async (req: any, res: any) => {
  try {
    const { username, password } = req.body || {};
    const prisma = (req as any).prisma;
    if (!username || !password) return res.status(400).json({ error: 'Missing credentials' });

    const user = await prisma?.adminUser.findUnique({ where: { username } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ sub: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '8h' });

    await prisma?.adminUser.update({ where: { id: user.id }, data: { lastLogin: new Date() } });

    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (err: any) {
    console.error('Login error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
