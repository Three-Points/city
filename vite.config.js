import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src'),
            '@baseComponents': resolve(__dirname, '/src/components/base'),
            '@containerComponents': resolve(
                __dirname,
                '/src/components/container'
            ),
            '@assets': resolve(__dirname, '/src/assets'),
            '@layout': resolve(__dirname, '/src/layout'),
            '@views': resolve(__dirname, '/src/views'),
        },
    },
})
