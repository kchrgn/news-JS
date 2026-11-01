import type { IArticlesResponse, ISourcesResponse } from '../../types/index.js';
import News from './news/news.js';
import Sources from './sources/sources.js';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data?: Partial<IArticlesResponse>): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data?: Partial<ISourcesResponse>): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
