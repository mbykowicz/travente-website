/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      colors: {
        'brandy-punch-100': 'hsl(40 68% 89%)',
        'brandy-punch-200': 'hsl(40 68% 77%)',
        'brandy-punch-300': 'hsl(38 68% 65%)',
        'brandy-punch-400': 'hsl(35 68% 56%)',
        'brandy-punch-50': 'hsl(39 70% 96%)',
        'brandy-punch-500': 'hsl(29 65% 53%)',
        'brandy-punch-600': 'hsl(24 67% 44%)',
        'brandy-punch-700': 'hsl(17 64% 37%)',
        'brandy-punch-800': 'hsl(14 57% 31%)',
        'brandy-punch-900': 'hsl(13 54% 26%)',
        'brandy-punch-950': 'hsl(13 64% 14%)',
        'butterfly-bush-100': 'hsl(240 48% 94%)',
        'butterfly-bush-200': 'hsl(240 47% 89%)',
        'butterfly-bush-300': 'hsl(241 46% 82%)',
        'butterfly-bush-400': 'hsl(246 44% 74%)',
        'butterfly-bush-50': 'hsl(240 53% 97%)',
        'butterfly-bush-500': 'hsl(250 41% 67%)',
        'butterfly-bush-600': 'hsl(254 37% 59%)',
        'butterfly-bush-700': 'hsl(255 29% 51%)',
        'butterfly-bush-800': 'hsl(254 27% 42%)',
        'butterfly-bush-900': 'hsl(252 23% 34%)',
        'butterfly-bush-950': 'hsl(255 24% 20%)',
        'eastern-blue-100': 'hsl(184 35% 90%)',
        'eastern-blue-200': 'hsl(185 35% 82%)',
        'eastern-blue-300': 'hsl(188 35% 69%)',
        'eastern-blue-400': 'hsl(188 33% 53%)',
        'eastern-blue-50': 'hsl(180 37% 96%)',
        'eastern-blue-500': 'hsl(189 36% 48%)',
        'eastern-blue-600': 'hsl(191 34% 36%)',
        'eastern-blue-700': 'hsl(193 32% 31%)',
        'eastern-blue-800': 'hsl(193 26% 27%)',
        'eastern-blue-900': 'hsl(197 24% 24%)',
        'eastern-blue-950': 'hsl(196 29% 15%)',
        'rose-of-sharon-100': 'hsl(48 96% 89%)',
        'rose-of-sharon-200': 'hsl(47 97% 77%)',
        'rose-of-sharon-300': 'hsl(46 96% 65%)',
        'rose-of-sharon-400': 'hsl(43 96% 56%)',
        'rose-of-sharon-50': 'hsl(48 100% 96%)',
        'rose-of-sharon-500': 'hsl(38 91% 50%)',
        'rose-of-sharon-600': 'hsl(32 94% 44%)',
        'rose-of-sharon-700': 'hsl(26 90% 39%)',
        'rose-of-sharon-800': 'hsl(22 83% 31%)',
        'rose-of-sharon-900': 'hsl(21 78% 26%)',
        'rose-of-sharon-950': 'hsl(21 92% 14%)',
        'storm-dust-100': 'hsl(180 2% 90%)',
        'storm-dust-200': 'hsl(180 3% 82%)',
        'storm-dust-300': 'hsl(195 3% 69%)',
        'storm-dust-400': 'hsl(200 3% 53%)',
        'storm-dust-50': 'hsl(180 5% 96%)',
        'storm-dust-500': 'hsl(200 3% 43%)',
        'storm-dust-600': 'hsl(200 3% 39%)',
        'storm-dust-700': 'hsl(210 3% 31%)',
        'storm-dust-800': 'hsl(210 3% 27%)',
        'storm-dust-900': 'hsl(200 2% 24%)',
        'storm-dust-950': 'hsl(210 3% 15%)',
        'sushi-100': 'hsl(79 56% 89%)',
        'sushi-200': 'hsl(81 56% 80%)',
        'sushi-300': 'hsl(82 52% 67%)',
        'sushi-400': 'hsl(83 49% 55%)',
        'sushi-50': 'hsl(80 60% 95%)',
        'sushi-500': 'hsl(84 50% 44%)',
        'sushi-600': 'hsl(86 53% 35%)',
        'sushi-700': 'hsl(87 50% 27%)',
        'sushi-800': 'hsl(86 43% 23%)',
        'sushi-900': 'hsl(88 38% 20%)',
        'sushi-950': 'hsl(89 49% 10%)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
