/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'oklch(var(--background) / <alpha-value>)',
                foreground: 'oklch(var(--foreground) / <alpha-value>)',
                card: {
                    DEFAULT: 'oklch(var(--card) / <alpha-value>)',
                    foreground: 'oklch(var(--card-foreground) / <alpha-value>)',
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
                    foreground: 'oklch(var(--popover-foreground) / <alpha-value>)',
                },
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground) / <alpha-value>)',
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground) / <alpha-value>)',
                },
                border: 'oklch(var(--border) / <alpha-value>)',
                input: 'oklch(var(--input) / <alpha-value>)',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                chart: {
                    1: 'oklch(var(--chart-1) / <alpha-value>)',
                    2: 'oklch(var(--chart-2) / <alpha-value>)',
                    3: 'oklch(var(--chart-3) / <alpha-value>)',
                    4: 'oklch(var(--chart-4) / <alpha-value>)',
                    5: 'oklch(var(--chart-5) / <alpha-value>)',
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar) / <alpha-value>)',
                    foreground: 'oklch(var(--sidebar-foreground) / <alpha-value>)',
                    primary: 'oklch(var(--sidebar-primary) / <alpha-value>)',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground) / <alpha-value>)',
                    accent: 'oklch(var(--sidebar-accent) / <alpha-value>)',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground) / <alpha-value>)',
                    border: 'oklch(var(--sidebar-border) / <alpha-value>)',
                    ring: 'oklch(var(--sidebar-ring) / <alpha-value>)',
                },
                /* Industrial custom palette */
                'ind-blue': 'oklch(var(--industrial-blue) / <alpha-value>)',
                'ind-blue-light': 'oklch(var(--industrial-blue-light) / <alpha-value>)',
                'ind-blue-vivid': 'oklch(var(--industrial-blue-vivid) / <alpha-value>)',
                'navy-deep': 'oklch(var(--navy-deep) / <alpha-value>)',
                'gold-accent': 'oklch(var(--gold-accent) / <alpha-value>)',
                'near-black': 'oklch(var(--near-black) / <alpha-value>)',
                'steel': {
                    50: 'oklch(0.97 0.003 240 / <alpha-value>)',
                    100: 'oklch(0.94 0.005 240 / <alpha-value>)',
                    200: 'oklch(0.88 0.01 240 / <alpha-value>)',
                    300: 'oklch(0.78 0.015 240 / <alpha-value>)',
                    400: 'oklch(0.65 0.02 240 / <alpha-value>)',
                    500: 'oklch(0.52 0.02 240 / <alpha-value>)',
                    600: 'oklch(0.42 0.02 240 / <alpha-value>)',
                    700: 'oklch(0.32 0.015 240 / <alpha-value>)',
                    800: 'oklch(0.22 0.01 240 / <alpha-value>)',
                    900: 'oklch(0.15 0.01 240 / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                condensed: ['"Barlow Condensed"', 'Inter', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            boxShadow: {
                'ind': '0 4px 24px -4px rgba(29, 78, 216, 0.18)',
                'ind-lg': '0 8px 40px -8px rgba(29, 78, 216, 0.28)',
                'card-lift': '0 12px 40px -8px rgba(0,0,0,0.18)',
                'navy': '0 8px 32px -4px rgba(10, 20, 50, 0.35)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
    ],
};
