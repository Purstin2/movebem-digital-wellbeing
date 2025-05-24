import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"!./src/components/DailyLog.tsx",
		"!./src/components/Calendar.tsx",
		"!./src/components/Statistics.tsx"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
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
					// Fenjes Purple
					light: "#A569BD", // Lighter shade for hover/active states
					dark: "#76448A",  // Darker shade for specific elements or depth
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
					// Fenjes Green
					light: "#7DCEA0",
					dark: "#229954",
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
					// Fenjes Yellow
					light: "#F7DC6F",
					dark: "#F1C40F", // Standard yellow, can serve as dark if needed
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				fenjes: {
					purple: {
						light: "#A569BD",
						DEFAULT: "#8E44AD", // Primary Purple
						dark: "#76448A",
					},
					yellow: {
						light: "#F7DC6F",
						DEFAULT: "#F4D03F", // Accent Yellow
						dark: "#F1C40F",
					},
					green: {
						light: "#7DCEA0",
						DEFAULT: "#27AE60", // Secondary Green
						dark: "#229954",
					},
					blue: { // New Blue Palette
						light: "#EBF5FB", // Very light blue, good for backgrounds
						DEFAULT: "#5DADE2", // Standard blue, for UI elements or text
						dark: "#2E86C1",   // Darker blue, for contrast or primary actions
					},
					neutral: { // Neutral Palette
						100: "#FDFEFE", // Almost white
						200: "#F8F9F9", // Very light gray (alternative to fenjes-bg-light)
						300: "#F0F3F4", // Light gray
						400: "#E5E7E9", // Medium-light gray
						500: "#D7DBDD", // Medium gray
						600: "#CACFD2", // Medium-dark gray
						700: "#BDC3C7", // Dark gray
						800: "#AAB7B8", // Darker gray
						900: "#616A6B", // Very dark gray (alternative to fenjes-text-dark)
					},
					white: "#FFFFFF",
					black: "#000000",
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Keeping MoveBem colors for backward compatibility but we'll replace their usage
				movebem: {
					purple: {
						light: '#E9D5FF',
						DEFAULT: '#9747FF',
						dark: '#7432B4',
					},
					green: {
						DEFAULT: '#4ADE80',
					}
				}
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'progress-fill': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--progress-width, 100%)' }
				},
				'glass-hover': {
					'0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(4px)' },
					'100%': { boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0)', backdropFilter: 'blur(2px)' },
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				'fade-in': 'fade-in 0.6s ease-out',
				'progress-fill': 'progress-fill 1.2s ease-out',
				'glass-hover': 'glass-hover 0.3s ease-out forwards'
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, var(--fenjes-purple-dark) 0%, var(--fenjes-purple-default) 100%)',
				'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'glass-dark': '0 4px 30px rgba(0, 0, 0, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography'), require('tailwindcss-patterns')],
} satisfies Config;
