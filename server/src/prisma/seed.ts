import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const pwd = await bcrypt.hash('AdminPass123!', 10);

  const admin1 = await prisma.adminUser.upsert({
    where: { username: 'admin' },
    update: {},
    create: { username: 'admin', email: 'admin@example.com', passwordHash: pwd }
  });

  const admin2 = await prisma.adminUser.upsert({
    where: { username: 'sales' },
    update: {},
    create: { username: 'sales', email: 'sales@example.com', passwordHash: pwd }
  });

  // Create a couple of categories and a sample price with quantity tiers
  const standardCat = await prisma.category.upsert({
    where: { slug: 'standard-sockets' },
    update: {},
    create: { slug: 'standard-sockets', name: 'Standard Sockets', description: 'Standard socket category' }
  });

  // question templates
  const typeQ = await prisma.questionTemplate.upsert({
    where: { id: 'type-std' },
    update: {},
    create: { id: 'type-std', categoryId: standardCat.id, key: 'type', label: 'Socket Type', type: 'select', required: true, order: 0 }
  });

  const sizeQ = await prisma.questionTemplate.upsert({
    where: { id: 'size-std' },
    update: {},
    create: { id: 'size-std', categoryId: standardCat.id, key: 'size', label: 'Socket Size', type: 'select', required: true, order: 1 }
  });

  // options
  await prisma.questionOption.upsert({ where: { id: 'type-std-single' }, update: {}, create: { id: 'type-std-single', questionId: typeQ.id, value: 'standard', label: 'Standard' } });
  await prisma.questionOption.upsert({ where: { id: 'type-std-deep' }, update: {}, create: { id: 'type-std-deep', questionId: typeQ.id, value: 'deep', label: 'Deep' } });

  await prisma.questionOption.upsert({ where: { id: 'size-std-10' }, update: {}, create: { id: 'size-std-10', questionId: sizeQ.id, value: '10mm', label: '10mm' } });
  await prisma.questionOption.upsert({ where: { id: 'size-std-12' }, update: {}, create: { id: 'size-std-12', questionId: sizeQ.id, value: '12mm', label: '12mm' } });

  // create a price for standard socket 10mm standard type with quantity tiers
  await prisma.price.upsert({
    where: { id: 'price-std-10' },
    update: {},
    create: {
      id: 'price-std-10',
      categoryId: standardCat.id,
      optionMap: { type: 'standard', size: '10mm' },
      basePrice: 10.0,
      currency: 'USD',
      quantityTiers: [
        { min: 1, max: 9, price: 10.0 },
        { min: 10, max: 19, price: 9.0 },
        { min: 20, max: 999999, price: 8.5 }
      ],
      createdById: admin1.id
    }
  });

  // another price for 12mm
  await prisma.price.upsert({
    where: { id: 'price-std-12' },
    update: {},
    create: {
      id: 'price-std-12',
      categoryId: standardCat.id,
      optionMap: { type: 'standard', size: '12mm' },
      basePrice: 11.0,
      currency: 'USD',
      quantityTiers: [
        { min: 1, max: 9, price: 11.0 },
        { min: 10, max: 19, price: 10.0 },
        { min: 20, max: 999999, price: 9.25 }
      ],
      createdById: admin2.id
    }
  });

  console.log('Seeding complete');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
