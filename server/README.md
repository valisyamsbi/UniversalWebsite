# Universal Quote Server (dev)

This folder contains a minimal Express + TypeScript + Prisma backend for the Instant Quote feature.

Overview
- Node + Express API
- Prisma ORM targeting PostgreSQL
- JWT auth for admin users
- Quantity-tier pricing support

Local development
1. Start Postgres (docker-compose):

```powershell
docker-compose up -d
```

2. Copy `.env.example` to `.env` and adjust `DATABASE_URL` if needed.

3. Install deps and generate Prisma client:

```powershell
cd server
npm install
npm run prisma:generate
```

4. Run migrations (dev) and seed:

```powershell
npm run prisma:migrate
npm run prisma:seed
```

5. Start dev server:

```powershell
npm run dev
```

API endpoints (basic)
- POST /api/auth/login -> { username, password } -> { token }
- GET /api/categories -> list categories + question templates
- POST /api/quote -> { categoryId, selections, quantity } -> { unitPrice, total }

Admin (JWT required)
- GET /api/admin/prices
- POST /api/admin/prices
- PUT /api/admin/prices/:id
- DELETE /api/admin/prices/:id

Azure deployment notes
- Provision Azure Database for PostgreSQL (Flexible Server), set `DATABASE_URL` in App Service
- Deploy Node app to Azure App Service (Linux). Use GitHub Actions to run `npx prisma migrate deploy` during deployment to ensure migrations are applied.
