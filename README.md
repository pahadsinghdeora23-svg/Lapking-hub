# Lapking Hub

Lapking Hub is a single-vendor B2B e-commerce solution for Laptop & Computer Accessories.

This repository is a monorepo containing:

- `app/` – Flutter Android-focused customer app (Riverpod state management)
- `admin/` – React + Vite + TypeScript admin panel (React Query)
- `functions/` – Firebase Cloud Functions (TypeScript) for notifications and optional Excel parsing
- `firebase/` – Firebase configuration, security rules and seed data
- `scripts/` – helper scripts (e.g., seed Firestore)
- `docs/` – architecture docs and Excel templates

Goal: Production-ready reference with full stack (Firebase backend). The repository includes:
- Firestore data model & security rules
- Seed data for categories & products
- Flutter customer app with major screens & flows
- React admin panel with core functionality & bulk Excel support scaffolding
- Cloud Function to send FCM notifications on order creation / status changes
- Example environment files

---

Table of contents
- Project overview
- Tech stack
- Folder structure
- Quick setup
- Firebase setup
- Seeding sample data
- Running local apps
- Deploying admin (Firebase Hosting)
- Notes on security & roles
- Excel templates & bulk operations
- Where to find things

---

Project overview
Lapking Hub is intended for B2B buyers (business customers) to order laptop & computer accessories in bulk. Admin staff manage products, orders, stock, and policies.

Initial seeded Category: "Laptop Accessories" with sample products:
- HP Charger – ₹799 – Qty: 10
- Lenovo Keyboard – ₹499 – Qty: 15
- Dell Battery – ₹1499 – Qty: 8
- USB Mouse – ₹299 – Qty: 20
- HDMI Cable – ₹199 – Qty: 25

---

Tech stack
- Mobile App: Flutter (latest stable) + Riverpod
- Admin Web: React + TypeScript + Vite + React Query
- Backend: Firebase (Auth, Firestore, Storage, Cloud Functions)
- Cloud Functions: Node.js + TypeScript

---

Folder structure
- app/ — Flutter app
  - lib/
    - src/
      - constants.dart
      - models/
      - providers/
      - services/
      - screens/
- admin/ — React + TypeScript admin panel
  - src/
    - pages/
    - components/
    - firebase.ts
- functions/ — Firebase Cloud Functions
- firebase/
  - firestore.rules
  - storage.rules
  - firebase.json
  - .firebaserc
  - seed/
    - products_seed.json
- scripts/
  - seed_firestore.js
- docs/
  - templates/
    - products_template.csv
    - price_update_template.csv
    - delete_template.csv

---

Quick setup (local dev)
1. Clone repository
   git clone https://github.com/<your-org>/lapking-hub.git
   cd lapking-hub

2. Create Firebase project
   - Go to https://console.firebase.google.com and create a project e.g., lapking-hub-dev
   - Enable Firestore (Native), Authentication (Phone & Email/Password), Storage, Cloud Messaging.
   - Add Android app package for Flutter (copy the google-services.json) and Web app for Admin (copy config).

3. Place Firebase credentials
   - Flutter: Put `google-services.json` in `app/android/app/` and update `app/.env.example` variables in `app/.env` as needed.
   - Admin: Copy the Firebase web config into `admin/.env` (see `admin/.env.example`).

4. Install & run apps
   - Flutter app:
     cd app
     flutter pub get
     flutter run -d <android-device>

   - Admin app:
     cd admin
     npm install
     npm run dev
     (Open http://localhost:5173)

5. Seed sample data into Firestore
   - Ensure you have a Firebase Service Account JSON or use firebase-tools auth.
   - Run:
     node scripts/seed_firestore.js --projectId=<FIREBASE_PROJECT_ID> --serviceAccount=./serviceAccount.json

   This script inserts categories, products, one admin user placeholder (you'll create real admin auth user), and appSettings with banners and policies.

6. Admin account
   - Create an admin Authentication user (email/password) in Firebase Console, then update their `users/{uid}` doc and set `role: "admin"`. The seed script includes sample admin doc; if you authenticate with that uid adjust accordingly.

7. Deploy Admin to Firebase Hosting
   - cd admin
   - npm run build
   - firebase deploy --only hosting --project <PROJECT_ID>

---

Firebase setup details
- Authentication:
  - Enable Phone auth (with reCAPTCHA config for web) and Email/Password (optional).
  - On new user sign-up, the client creates or ensures a user doc in `users` collection.

- Firestore rules:
  - See `firebase/firestore.rules` for full policy implementation (read/write restrictions for admin vs customers).

- Storage rules:
  - See `firebase/storage.rules` for image upload/read rules.

- Cloud Functions:
  - FCM: `functions/src/index.ts` listens to order updates and sends notifications to user tokens.

---

Seeding data
- Use `scripts/seed_firestore.js` to seed categories, products, and appSettings. The script uses firebase-admin SDK.
- Example seed file: `firebase/seed/products_seed.json`.

---

Excel templates for bulk operations
- `docs/templates/products_template.csv` — product upload template
- `docs/templates/price_update_template.csv` — price update template
- `docs/templates/delete_template.csv` — delete (productId list)

Admin Bulk Upload supports uploading these templates and previewing changes. You can parse Excel on client or server via Cloud Functions. Sample Cloud Function skeleton is provided.

---

Security & roles
- Admin vs Customer determined by `users/{uid}.role`.
- Admin API checks in Firestore rules restrict product/category/order edits to admin only.
- Customer can create orders and view their own.

---

Notes & conventions
- UI text is centralized in Flutter at `lib/src/constants.dart` supporting later i18n and containing Hinglish samples.
- Search: each product document contains `searchKeywords` array for fuzzy/partial search.
- Cart is stored client-side (local state in Riverpod). Orders are created server-side in Firestore.

---

Where to find things
- Firestore rules: `firebase/firestore.rules`
- Storage rules: `firebase/storage.rules`
- Sample seed: `firebase/seed/`
- Flutter app entry: `app/lib/main.dart`
- React admin entry: `admin/src/main.tsx`
- Cloud Functions: `functions/src/index.ts`

---

Support
For questions, open an issue in this repository with descriptive steps and screenshots when relevant.

License: MIT (see LICENSE)

Thank you for trying Lapking Hub!
