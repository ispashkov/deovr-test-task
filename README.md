# DeoVR Test Task

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decisions and tradeoffs

I decided to use Next.JS, Radix UI and Tailwind, cuz it's the faster way to implement technical task for me.
In real life i would like to use headless ui + tailwind or custom design system.

All data loading process implemented by Nest.JS internal methods with SSR streaming.
Video data mocked with `@fakerjs/faker` package.

Steps for improvements:
- Add Storybook for UI development and testing.
- Add Unit testing.
- Replace Tailwind and Radix to single CSS solution.
- Add state management for better scaling and maintaining options.
