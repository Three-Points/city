const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        h2: {
            color: theme('colors.primary.DEFAULT'),
            fontFamily: theme('fontFamily.pt-serif'),
            fontSize: theme('fontSize.display-small'),
            fontWeight: theme('fontWeight.semibold'),
        },
        h3: {
            color: theme('colors.primary.soft'),
            fontFamily: theme('fontFamily.noto-sans'),
            fontSize: theme('fontSize.headline-small'),
            fontWeight: theme('fontWeight.normal'),
        },
        'p, label': {
            color: theme('colors.primary.DEFAULT'),
            fontFamily: theme('fontFamily.noto-sans'),
            fontSize: theme('fontSize.body-small'),
            fontWeight: theme('fontWeight.normal'),
        },
        span: {
            color: theme('colors.primary.soft'),
            fontFamily: theme('fontFamily.noto-sans'),
            fontSize: theme('fontSize.label-small'),
            fontWeight: theme('fontWeight.semibold'),
        },
        [`@media (min-width: ${theme('screens.md')})`]: {
            h2: {
                fontSize: theme('fontSize.display-large'),
            },
            h3: {
                fontSize: theme('fontSize.headline-large'),
            },
            p: {
                fontSize: theme('fontSize.body-large'),
            },
            span: {
                fontSize: theme('fontSize.label-large'),
            },
        },
    })
})
