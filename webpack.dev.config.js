import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Создаем аналог __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: resolve(__dirname, './dist'),
    },
};
