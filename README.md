## Clyro Tech Solutions

### Run Steps
1. Set environment variables in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
2. Install dependencies:
   - `npm install`
3. Seed legacy products:
   - `npm run seed`
4. Start dev server:
   - `npm run dev`

### Notes
- `npm run seed` inserts products from `lib/products.ts` if they do not already exist.
