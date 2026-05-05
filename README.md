# WhatBytes Store - E-commerce Frontend

A complete e-commerce frontend built with Next.js 14 (App Router), Tailwind CSS, and Zustand.

## Features

- **Product Listing**: Responsive grid with featured product layout.
- **Advanced Filtering**: Filter by category, price range, and search query.
- **URL Synchronization**: All filter states are synced with URL query parameters for shareable search results.
- **Product Detail**: Individual pages for products with quantity selection.
- **Shopping Cart**: Persistent cart state using Zustand and localStorage middleware.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Rich Aesthetics**: Premium UI with sticky headers, subtle shadows, and a clean color palette (#1a56db).

## Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/) (and custom SVGs)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI components (Header, Sidebar, ProductCard, etc.).
- `src/lib`: Mock data and state management store.
- `public`: Static assets.

## Deployment

The project is ready to be deployed to Vercel. 

**Live URL**: [https://whatbytes-store-omega.vercel.app/](https://whatbytes-store-omega.vercel.app/)

## Commits

1. `feat: project setup with Next.js, Tailwind, and Zustand`
2. `feat: add mock product data and types`
3. `feat: build Header component with search and cart badge`
4. `feat: build Sidebar with category and price filters`
5. `feat: build ProductCard and ProductGrid components`
6. `feat: implement filter logic with URL query param sync`
7. `feat: implement search filtering`
8. `feat: add Footer component`
9. `feat: build product detail page with quantity selector`
10. `feat: implement cart store with Zustand and localStorage persist`
11. `feat: build cart page with quantity controls and summary`
12. `chore: deploy to Vercel, update README with live URL`
