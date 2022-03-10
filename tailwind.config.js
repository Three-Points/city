const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./*.{html,js}', './stories/*.{js,mdx}'],
    theme: {
        fontFamily: {
            'noto-sans': ['Noto Sans Display'],
            'noto-serif': ['Noto Serif Display'],
        },
        fontSize: {
            'label-small': '12px',
            'label-large': '14px',
            'body-small': '16px',
            'body-large': '18px',
            'headline-small': '20px',
            'headline-large': '24px',
            'display-small': '32px',
            'display-large': '48px',
        },
        colors: {
            primary: {
                DEFAULT: '#3B4252',
                soft: '#7B88A1',
            },
            gray: {
                DEFAULT: '#F8F9FB',
                hover: '#DBE4F3',
            },
        },
    },
    boxShadow: {
        DEFAULT: '#3B4252 0px 2px 8px',
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: {
                    color: theme('colors.primary.DEFAULT'),
                    fontFamily: theme('fontFamily.noto-serif'),
                    fontSize: theme('fontSize.display-large'),
                    fontWeight: theme('fontWeight.semibold'),
                    [`@media (max-width: ${theme('screens.sm')})`]: {
                        fontSize: theme('fontSize.display-small'),
                    },
                },
                h3: {
                    color: theme('colors.primary.DEFAULT'),
                    fontFamily: theme('fontFamily.noto-sans'),
                    fontSize: theme('fontSize.headline-large'),
                    fontWeight: theme('fontWeight.normal'),
                    [`@media (max-width: ${theme('screens.sm')})`]: {
                        fontSize: theme('fontSize.headline-small'),
                    },
                },
                p: {
                    color: theme('colors.primary.DEFAULT'),
                    fontFamily: theme('fontFamily.noto-sans'),
                    fontSize: theme('fontSize.body-large'),
                    fontWeight: theme('fontWeight.normal'),
                    [`@media (max-width: ${theme('screens.sm')})`]: {
                        fontSize: theme('fontSize.body-small'),
                    },
                },
            })
        }),
    ],
}
