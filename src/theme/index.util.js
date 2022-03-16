const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
    addUtilities({
        '.asside_show': {
            transform: 'translateX(0)',
            visibility: 'visible',
        },
        '.asside_hide': {
            transform: 'translateX(100%)',
            visibility: 'hidden',
        },
        '.shadow_show': {
            opacity: 1,
        },
        '.shadow_hide': {
            opacity: 0,
            visibility: 'hidden',
        },
    })
})
