import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					'50': '#f0f9ff',
					'100': '#e0f2fe',
					'200': '#bae6fd',
					'300': '#7dd3fc',
					'400': '#38bdf8',
					'500': '#0ea5e9',
					'600': '#0284c7',
					'700': '#0369a1',
					'800': '#075985',
					'900': '#0c4a6e',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
                // Fenjes Colors (replacing MoveBem colors)
                fenjes: {
                    purple: {
                        light: '#E9D5FF',
                        DEFAULT: '#9747FF',
                        dark: '#7432B4',
                    },
                    yellow: {
                        light: '#FEF7CD',
                        DEFAULT: '#FCD34D',
                        dark: '#E9B949',
                    },
                    green: {
                        DEFAULT: '#10B981',
                    },
                    bg: {
                        light: '#F7F3FF',
                    },
                    text: {
                        warm: '#4A3F35',
                    }
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
                },
                // High contrast color palette
                primary: {
                    DEFAULT: '#1a5f7a',
                    dark: '#134557',
                    light: '#2286b3',
                    contrast: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#2c666e',
                    dark: '#1e464c',
                    light: '#3a8690',
                    contrast: '#ffffff',
                },
                accent: {
                    DEFAULT: '#90b77d',
                    dark: '#658355',
                    light: '#b2cf9f',
                    contrast: '#000000',
                },
                neutral: {
                    100: '#ffffff',
                    200: '#f3f4f6',
                    300: '#e5e7eb',
                    400: '#d1d5db',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
                // High contrast mode colors
                'high-contrast': {
                    text: '#000000',
                    'text-secondary': '#1a1a1a',
                    background: '#ffffff',
                    'background-alt': '#f0f0f0',
                    primary: '#0000ee',
                    secondary: '#551a8b',
                    accent: '#ee0000',
                    border: '#000000',
                },
                highContrast: {
                    text: '#000000',
                    background: '#ffffff',
                    primary: '#0000EE',
                    secondary: '#551A8B',
                    error: '#D32F2F',
                    success: '#2E7D32',
                },
				'gray': {
					50: '#f8f9fa',
					100: '#f1f3f5',
					200: '#e9ecef',
					300: '#dee2e6',
					400: '#ced4da',
					500: '#adb5bd',
					600: '#868e96',
					700: '#495057',
					800: '#343a40',
					900: '#212529',
				},
			},
			borderRadius: {
				lg: '1rem',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1.5rem',
				'focus': '0.375rem',
				'2xl': '1.5rem',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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
                    '100%': { width: '100%' }
                },
                'glass-hover': {
                    '0%': { 
                        backdropFilter: 'blur(10px)', 
                        background: 'rgba(255,255,255,0.15)' 
                    },
                    '100%': { 
                        backdropFilter: 'blur(12px)', 
                        background: 'rgba(255,255,255,0.2)' 
                    }
                },
				'fade': 'fade 0.5s ease-in-out',
				'slide': 'slide 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'progress-fill': 'progress-fill 1.2s ease-out',
                'glass-hover': 'glass-hover 0.3s ease-out forwards',
                'fade': 'fade 0.5s ease-in-out',
                'slide': 'slide 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slow-spin': 'spin 2s linear infinite',
                'slow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-reduced': 'fade 0.5s ease-in-out',
                'slide-reduced': 'slide 0.5s ease-in-out',
			},
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
                'quicksand': ['Quicksand', 'sans-serif'],
                'playfair': ['Playfair Display', 'serif']
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #7432B4 0%, #9747FF 100%)',
                'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
            },
            fontSize: {
                'xs': '1rem',      // 16px minimum
                'sm': '1.125rem',  // 18px
                'base': '1.25rem', // 20px
                'lg': '1.375rem',  // 22px
                'xl': '1.5rem',    // 24px
                '2xl': '1.75rem',  // 28px
                '3xl': '2rem',     // 32px
                '4xl': '2.25rem',
                'large-base': '1.125rem',
                'large-lg': '1.25rem',
                'large-xl': '1.5rem',
                'large-2xl': '1.875rem',
                'large-3xl': '2.25rem',
                'large-4xl': '2.75rem',
                'xl-base': '1.25rem',
                'xl-lg': '1.5rem',
                'xl-xl': '1.875rem',
                'xl-2xl': '2.25rem',
                'xl-3xl': '2.75rem',
                'xl-4xl': '3.25rem',
            },
            spacing: {
                'touch-target': '2.75rem', // 44px minimum touch target
                'button': '3rem',
                'input': '3rem',
                'nav-item': '3rem',
                'card-padding': '1.5rem',
                'icon': '2.75rem',
                'touch': '44px',
                'touch-lg': '48px',
                'touch-normal': '2.5rem',
                'touch-large': '3rem',
            },
            padding: {
                'button': '1.25rem',
            },
            transitionDuration: {
                'default': '300ms',
                '400': '400ms',
                'reduced': '0.5s',
            },
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addVariant }: any) {
			addVariant('data-font-size-large', '&[data-font-size="large"]');
			addVariant('data-font-size-xl', '&[data-font-size="extra-large"]');
			addVariant('data-contrast-high', '&[data-contrast="high"]');
			addVariant('data-animations-reduced', '&[data-animations="reduced"]');
			addVariant('data-touch-large', '&[data-touch-targets="large"]');
		},
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
	variants: {
		extend: {
			animation: ['motion-safe', 'motion-reduce'],
			opacity: ['disabled'],
			cursor: ['disabled'],
			backgroundColor: ['active', 'disabled'],
			textColor: ['active', 'disabled'],
			fontSize: ['data-font-size-large', 'data-font-size-xl'],
			colors: ['data-contrast-high'],
			padding: ['data-touch-large'],
			margin: ['data-touch-large'],
			height: ['data-touch-large'],
			width: ['data-touch-large'],
		},
	},
} satisfies Config;
