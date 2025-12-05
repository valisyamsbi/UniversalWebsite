import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();

// GET /api/categories
router.get('/categories', async (req: any, res: any) => {
  const prisma: PrismaClient = req.prisma!;
  const categories = await prisma.category.findMany({ include: { questions: { include: { options: true } } } });
  res.json({ data: categories });
});

// POST /api/quote
// body: { categoryId, selections: { key: value }, quantity }
router.post('/quote', async (req: any, res: any) => {
  const prisma: PrismaClient = req.prisma!;
  let { categoryId, categorySlug, selections, quantity } = req.body;
  if (!categoryId && !categorySlug) return res.status(400).json({ error: 'Missing categoryId or categorySlug' });
  if (!selections) return res.status(400).json({ error: 'Missing selections' });

  if (!categoryId && categorySlug) {
    const cat = await prisma.category.findUnique({ where: { slug: categorySlug } });
    if (!cat) return res.status(404).json({ error: 'Category not found' });
    categoryId = cat.id;
  }

  // find matching prices for category
  const prices = await prisma.price.findMany({ where: { categoryId } });

  // helper to check if optionMap is subset of selections
  const matches = (optionMap: any, selectionsObj: any) => {
    // optionMap may include only keys that need to match
    for (const key of Object.keys(optionMap)) {
      if (selectionsObj[key] === undefined) return false;
      if (String(optionMap[key]) !== String(selectionsObj[key])) return false;
    }
    return true;
  };

  // find best match (exact match with most keys)
  let best: any = null;
  for (const p of prices) {
    if (matches(p.optionMap as any, selections)) {
      const keys = Object.keys(p.optionMap as any).length;
      if (!best || keys > Object.keys(best.optionMap || {}).length) best = p;
    }
  }

  if (!best) return res.status(404).json({ error: 'No price configured for this combination' });

  const qty = Number(quantity || 1);
  let unitPrice = best.basePrice;

  if (best.quantityTiers) {
    try {
      const tiers = best.quantityTiers as any[];
      // find tier where min <= qty <= max
      for (const t of tiers) {
        const min = t.min ?? 1;
        const max = t.max ?? Infinity;
        if (qty >= min && qty <= max) {
          unitPrice = Number(t.price);
          break;
        }
      }
    } catch (e) {
      // ignore parsing errors
    }
  }

  const total = unitPrice * qty;
  res.json({ data: { matchedPriceId: best.id, unitPrice, total, currency: best.currency } });
});

export default router;
