import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import adminRoutes from './routes/admin';
import publicRoutes from './routes/public';
import path from 'path';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

// simple health

// attach prisma to request for convenience
declare global {
  namespace Express {
    // keep prisma loosely typed here to avoid hard dependency on prisma types in the scaffold
    interface Request {
      prisma?: any
      adminUserId?: string;
    }
  }
}

app.get('/ping', (_req: any, res: any) => res.json({ ok: true }));

app.use((req: any, _res: any, next: any) => {
  // attach prisma client to request for handlers
  (req as any).prisma = prisma;
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', publicRoutes);

// Serve React build static files
const reactBuildPath = path.join(__dirname, '../../dist'); // adjust if needed
app.use(express.static(reactBuildPath));

// Fallback: serve index.html for any unknown route (except API)
app.get('*', (_req: any, res: any) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});

// Root route - friendly message to show server is running
app.get('/', (_req: any, res: any) => {
  res.send('<h2>Universal Website API</h2><p>Available endpoints: <a href="/api/ping">/api/ping</a>, <a href="/api/categories">/api/categories</a></p>');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
