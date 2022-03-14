import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src'),
            '@components': resolve(__dirname, '/src/components'),
            '@assets': resolve(__dirname, '/src/assets'),
            '@layout': resolve(__dirname, '/src/layout'),
            '@views': resolve(__dirname, '/src/views'),
        },
    },
})
