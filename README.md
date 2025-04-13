# PickYourPlan

A modern subscription management SaaS application built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light mode support
- 💳 Subscription management
- 📊 Dashboard analytics
- 📱 Mobile-first approach
- ⚡ Optimized performance

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **UI Components:** Custom components with Tailwind
- **State Management:** React Context
- **Form Handling:** React Hook Form (upcoming)
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
PickYourPlan/
├── src/
│   ├── app/                   # Next.js App Router pages
│   ├── components/            # Reusable components
│   ├── context/              # React Context providers
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and configs
│   └── utils/               # Helper functions
├── public/                   # Static assets
├── styles/                   # Global styles
└── tailwind.config.js       # Tailwind configuration
```

## Key Components

- `Navbar`: Main navigation with responsive mobile menu
- `Footer`: Site-wide footer with dynamic content
- `LoginForm`: Authentication form with social login
- `PricingCard`: Subscription plan display
- `Dashboard`: Admin dashboard layout
- `ThemeProvider`: Dark/Light mode management

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide Icons for beautiful icons

