import React from 'react';
import { NewsList } from './newsList/NewsList';
import { NewsForm } from './newsForm/NewsForm';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.loadNews = this.loadNews.bind(this);

        this.defautSettings = {
            selectedCountry: 'ua'
        };
        this.state = {
            settings: this.defautSettings,
            news: []
        };
        
        this.lastLetterIndex = 0;
    }

    onDataChange(data) {
        this.setState({ settings: data }, () => this.loadNews());
    }

    loadNews() {
        const that = this;
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.settings.selectedCountry}&apiKey=a5b2d699fc00492984ae7533b76321a0`)
            .then(data => data.json())
            .then(response => {
                if (response.status === 'error') {
                    alert('Error: ' + response.message);
                    return;
                }

                const news = response.articles.map(item => {
                    item.id = ++this.lastLetterIndex;
                    return item;
                });

                that.setState({ news });
            });
    }
    
    componentDidMount() {
        this.loadNews();
    }

    render() {
        return (
            <div className="container" style={{marginLeft: 10}}>
                <NewsForm onDataChange={this.onDataChange} defautSettings={this.defautSettings} />
                <NewsList data={this.state.news} />
            </div>
        );
    }
}