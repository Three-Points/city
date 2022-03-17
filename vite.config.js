import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src'),
            '@assets': resolve(__dirname, '/src/assets'),
            '@baseComponents': resolve(__dirname, '/src/components/base'),
            '@containerComponents': resolve(
                __dirname,
                '/src/components/container'
            ),
            '@layout': resolve(__dirname, '/src/layout'),
            '@router': resolve(__dirname, '/src/router'),
            '@views': resolve(__dirname, '/src/views'),
        },
    },
})
