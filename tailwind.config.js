/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
      xxl: '1600px',
      xxl2: '1800px',
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        hero_shape: 'url(/hero/shape-1.svg)',
        about_shape_light: 'url(/about/shape-light.svg)',
        about_shape_dark: 'url(/about/shape-dark.svg)',
        bullet_point: 'url(/WebsiteBulletPoint.svg)',
        work_project_bg: 'url(/work/project-bg.svg)',
        contact_illustration_light: 'url(/contact/illustration-light.svg)',
        contact_illustration_dark: 'url(/contact/illustration-dark.svg)',
      },
      dropShadow: {
        '3xl': '0 0 25px rgba(0, 0, 0, 0.7)',
        'white-xl': '0 0 1000px rgba(255, 255, 255, 1)',
        'white-2xl': '0 0 7px rgba(255, 255, 255, 0.6)',
        'blue-xl': '0 0 25px rgba(23, 252, 255, 0.75)',
        'blue-2xl': '0 0 50px rgba(23, 252, 255, 0.95)',
        'blue-3xl': '0 0 25px rgba(23, 252, 255, 0.85)',
        'cyan-xl': '0 0 25px rgba(0, 104, 255, 0.15)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
