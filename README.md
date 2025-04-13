# PickYourPlan - Subscription Management Platform

A modern subscription management platform built with Next.js, featuring a beautiful UI and seamless user experience. The platform helps teams manage their subscriptions efficiently with features like team management, advanced analytics, and enterprise-grade security.

## Features

- 🎨 Beautiful, responsive UI with dark/light mode support
- 🔒 Secure authentication system
- 💳 Flexible pricing plans with monthly/yearly billing
- 📊 Advanced analytics dashboard
- 👥 Team management capabilities
- 🔐 Enterprise-grade security features

## Recent Changes

- Removed animated particles background (`ThreeScene` component) from home and pricing pages for improved performance
- Enhanced UI consistency across pages
- Optimized page load times

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev) - Icons

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Add your environment variables here
```

## Project Structure

```
src/
├── app/             # Next.js app directory
├── components/      # Reusable components
├── context/        # React context providers
├── lib/            # Utility functions and constants
├── types/          # TypeScript type definitions
└── utils/          # Helper functions
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
