const { resolve } = require('path')

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss',
    ],
    core: {
        builder: 'storybook-builder-vite',
    },
    async viteFinal(config) {
        config.resolve.alias = {
            '@': resolve(__dirname, '../src'),
            '@assets': resolve(__dirname, '../src/assets'),
            '@components': resolve(__dirname, '../src/components'),
            '@layout': resolve(__dirname, '../src/layout'),
            '@views': resolve(__dirname, '../src/views'),
        }
        return config
    },
}
