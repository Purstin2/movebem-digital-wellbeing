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
                }
			},
			borderRadius: {
				lg: '1rem',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'progress-fill': 'progress-fill 1.2s ease-out',
                'glass-hover': 'glass-hover 0.3s ease-out forwards',
                'fade': 'fadeIn 0.5s ease-in-out',
                'slide': 'slideIn 0.5s ease-in-out',
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
                'base': '1.125rem',
                'lg': '1.25rem',
                'xl': '1.5rem',
                '2xl': '1.75rem',
                '3xl': '2rem',
            },
            spacing: {
                'button': '3rem',
                'input': '3rem',
            },
            padding: {
                'button': '1.25rem',
            },
            transitionDuration: {
                'default': '300ms',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
