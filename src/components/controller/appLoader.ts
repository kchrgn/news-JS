import Loader from './loader.js';

class AppLoader extends Loader {
    constructor() {
        // Проверяем наличие переменных окружения, чтобы избежать передачи undefined
        const apiUrl = process.env.API_URL || 'https://newsapi.org';
        //const apiKey = process.env.API_KEY || '';
        
        super(apiUrl, {});
        //super(apiUrl, {
        //    apiKey: apiKey,
        //});
    }
}

export default AppLoader;