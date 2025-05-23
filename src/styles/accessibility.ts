export const accessibilityConfig = {
  // Font Sizes (in rem)
  fontSize: {
    base: '1.125rem', // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.875rem' // 30px
  },

  // Touch Targets
  touchTarget: {
    minWidth: '44px',
    minHeight: '44px',
    spacing: '8px'
  },

  // Animation Settings
  animation: {
    reduced: {
      duration: '0.2s',
      timing: 'ease-out'
    },
    standard: {
      duration: '0.3s',
      timing: 'ease-in-out'
    }
  },

  // Color Contrast Ratios
  contrast: {
    standard: {
      text: {
        normal: '#1F2937', // Gray 800
        muted: '#4B5563',  // Gray 600
        inverse: '#F9FAFB' // Gray 50
      },
      background: {
        primary: '#FFFFFF',
        secondary: '#F3F4F6',
        accent: '#E5E7EB'
      }
    },
    highContrast: {
      text: {
        normal: '#000000',
        muted: '#1F2937',
        inverse: '#FFFFFF'
      },
      background: {
        primary: '#FFFFFF',
        secondary: '#000000',
        accent: '#1F2937'
      }
    }
  },

  // Focus Indicators
  focus: {
    outline: '3px solid #2563EB',
    outlineOffset: '2px',
    borderRadius: '4px'
  },

  typography: {
    base: {
      fontSize: '1.125rem', // 18px
      lineHeight: '1.75',
      fontWeight: '400'
    },
    large: {
      fontSize: '1.25rem', // 20px
      lineHeight: '2',
      fontWeight: '400'
    },
    headingScale: {
      h1: '2rem',
      h2: '1.75rem',
      h3: '1.5rem',
      h4: '1.25rem'
    },
    lineHeight: 1.6,
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },

  spacing: {
    touchTarget: {
      minWidth: '44px',
      minHeight: '44px'
    },
    buttonPadding: '12px 20px',
    inputPadding: '12px 16px',
    containerPadding: '24px',
    clickableElements: '1rem', // 16px
    betweenElements: '1.5rem', // 24px
    sections: '2rem' // 32px
  },

  colors: {
    contrast: {
      high: {
        text: '#000000',
        background: '#FFFFFF',
        primary: '#0052CC',
        secondary: '#00875A'
      },
      medium: {
        text: '#2C3E50',
        background: '#F5F7FA',
        primary: '#1A73E8',
        secondary: '#34A853'
      }
    },
    focus: {
      outline: '#2684FF',
      ring: 'rgba(38, 132, 255, 0.4)'
    },
    highContrast: {
      text: '#000000',
      background: '#FFFFFF',
      primary: '#0052CC',
      secondary: '#00875A',
      accent: '#FF5630',
      error: '#DE350B'
    },
    standard: {
      text: '#172B4D',
      background: '#FFFFFF',
      primary: '#0065FF',
      secondary: '#00B8D9',
      accent: '#FF7452',
      error: '#FF5630'
    }
  },

  motion: {
    reducedMotion: {
      transition: 'none',
      animation: 'none'
    },
    standardMotion: {
      transition: 'all 0.3s ease',
      animation: {
        duration: '0.3s',
        timing: 'ease'
      }
    }
  },

  interaction: {
    hover: {
      scale: 1.02,
      opacity: 0.9
    },
    active: {
      scale: 0.98,
      opacity: 0.8
    },
    focus: {
      outlineWidth: '2px',
      outlineOffset: '2px'
    }
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  },

  accessibility: {
    skipLinks: true,
    ariaLabels: true,
    keyboardNav: true,
    highContrast: true,
    textZoom: true
  },

  touchTargets: {
    minHeight: '44px',
    minWidth: '44px',
    padding: '12px'
  },

  animations: {
    reducedMotion: {
      duration: '0ms',
      transition: 'none'
    },
    standard: {
      duration: '200ms',
      transition: 'all 200ms ease-in-out'
    }
  }
};

// Tailwind CSS classes for accessibility
export const accessibilityClasses = {
  text: {
    base: 'text-lg leading-relaxed tracking-wide',
    heading: 'text-2xl font-semibold leading-tight tracking-normal',
    button: 'text-lg font-medium',
    large: 'text-xl leading-relaxed tracking-wide'
  },
  headings: {
    h1: 'text-4xl font-bold leading-tight mb-6',
    h2: 'text-3xl font-semibold leading-tight mb-4',
    h3: 'text-2xl font-semibold leading-snug mb-3'
  },
  buttons: {
    base: 'min-h-[44px] min-w-[44px] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700'
  },
  inputs: {
    base: 'min-h-[44px] px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-offset-2',
    error: 'border-error-500 focus:ring-error-500'
  },
  cards: {
    base: 'p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow',
    interactive: 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'
  },
  navigation: {
    item: 'min-h-[44px] px-4 py-3 hover:bg-gray-100 rounded-lg',
    active: 'bg-primary-100 text-primary-700'
  },
  touch: {
    button: 'min-w-[44px] min-h-[44px] p-3',
    link: 'inline-block py-2 px-3'
  },
  animation: {
    reduced: 'transition-all duration-200 ease-out',
    standard: 'transition-all duration-300 ease-in-out'
  },
  contrast: {
    standard: {
      text: 'text-gray-800 dark:text-gray-50',
      background: 'bg-white dark:bg-gray-900'
    },
    highContrast: {
      text: 'text-black dark:text-white',
      background: 'bg-white dark:bg-black'
    }
  },
  focus: {
    standard: 'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
    highContrast: 'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-black'
  }
};

// Helper functions for dynamic accessibility
export const accessibility = {
  // Calculate font size based on user preferences
  getFontSize: (baseSize: number, userZoomLevel: number = 100) => {
    const scaleFactor = userZoomLevel / 100;
    return `${baseSize * scaleFactor}rem`;
  },

  // Check if animation should be reduced
  shouldReduceMotion: () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get animation duration based on user preference
  getAnimationDuration: () => {
    return accessibility.shouldReduceMotion() 
      ? accessibilityConfig.animation.reduced.duration 
      : accessibilityConfig.animation.standard.duration;
  },

  // Get contrast mode based on user preference
  getContrastMode: (isHighContrast: boolean = false) => {
    return isHighContrast 
      ? accessibilityConfig.contrast.highContrast 
      : accessibilityConfig.contrast.standard;
  }
};

export const accessibilityMixins = {
  focusVisible: `
    outline: 2px solid ${accessibilityConfig.colors.focus.outline};
    outline-offset: 2px;
    box-shadow: 0 0 0 4px ${accessibilityConfig.colors.focus.ring};
  `,

  touchTarget: `
    min-width: ${accessibilityConfig.spacing.touchTarget.minWidth};
    min-height: ${accessibilityConfig.spacing.touchTarget.minHeight};
    padding: ${accessibilityConfig.spacing.buttonPadding};
  `,

  visuallyHidden: `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `,

  reducedMotion: `
    @media (prefers-reduced-motion: reduce) {
      transition: none;
      animation: none;
    }
  `
};

export const createAccessibleComponent = (baseStyles: string, options = {
  isInteractive: true,
  needsFocus: true,
  isTouch: true
}) => `
  ${baseStyles}
  
  ${options.isInteractive ? accessibilityMixins.touchTarget : ''}
  
  ${options.needsFocus ? `
    &:focus-visible {
      ${accessibilityMixins.focusVisible}
    }
  ` : ''}
  
  ${accessibilityMixins.reducedMotion}
`;

export const accessibilityAttributes = {
  buttons: {
    base: {
      role: 'button',
      tabIndex: 0
    },
    toggle: {
      'aria-pressed': false,
      'aria-expanded': false
    }
  },
  navigation: {
    list: {
      role: 'navigation',
      'aria-label': 'Menu principal'
    },
    item: {
      role: 'menuitem',
      tabIndex: 0
    }
  },
  forms: {
    input: {
      'aria-required': true,
      'aria-invalid': false
    },
    error: {
      role: 'alert',
      'aria-live': 'polite'
    }
  }
}; 