import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'please_change_me';

// simple middleware
const requireAuth = async (req: any, res: any, next: any) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });
  const token = auth.split(' ')[1];
  try {
    const payload: any = jwt.verify(token, JWT_SECRET);
    req.adminUserId = payload.sub;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// List prices
router.get('/prices', requireAuth, async (req: any, res: any) => {
  const prisma: PrismaClient = req.prisma!;
  const prices = await prisma.price.findMany({ include: { createdBy: true, category: true } });
  res.json({ data: prices });
});

// Create price
router.post('/prices', requireAuth, async (req: any, res: any) => {
  const prisma: PrismaClient = req.prisma!;
  const { categoryId, optionMap, basePrice, currency, quantityTiers } = req.body;
  if (!categoryId || !optionMap || !basePrice) return res.status(400).json({ error: 'Missing fields' });
  const created = await prisma.price.create({ data: { categoryId, optionMap: optionMap as any, basePrice: Number(basePrice), currency: currency || 'USD', quantityTiers: quantityTiers || null, createdById: req.adminUserId } });
  res.json({ data: created });
});

// Update price
router.put('/prices/:id', requireAuth, async (req: any, res: any) => {
  const prisma: PrismaClient = req.prisma!;
  const id = req.params.id;
  const payload = req.body;
  const updated = await prisma.price.update({ where: { id }, data: { ...payload } as any });
  res.json({ data: updated });
});

// Delete price
router.delete('/prices/:id', requireAuth, async (req: any, res: any) => {
  const prisma: PrismaClient = req.prisma!;
  const id = req.params.id;
  await prisma.price.delete({ where: { id } });
  res.json({ ok: true });
});

// Manage categories (basic)
router.get('/categories', requireAuth, async (req: any, res: any) => {
  const prisma: PrismaClient = req.prisma!;
  const cats = await prisma.category.findMany({ include: { questions: { include: { options: true } }, prices: true } });
  res.json({ data: cats });
});

export default router;
