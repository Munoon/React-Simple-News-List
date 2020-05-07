import React from 'react';
import { NewsTable } from './NewsTable';

export class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };

        this.loadNews = this.loadNews.bind(this);
        this.loadNews();
    }

    loadNews() {
        fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a5b2d699fc00492984ae7533b76321a0`)
            .then(data => data.json())
            .then(response => {
                this.setState({
                    news: response.articles
                });
            })
    }

    render() {
        return <NewsTable news={this.state.news} />;
    }
}