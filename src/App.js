import React from 'react';
import { NewsList } from './newsList/NewsList';
import { NewsForm } from './form/NewsForm';
import { SettingsForm } from './settings/SettingsForm';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://newsapi.org/v2/top-headlines';
// const API_KEY = 'a5b2d699fc00492984ae7533b76321a0';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.loadNews = this.loadNews.bind(this);
        this.setSettings = this.setSettings.bind(this);

        this.defautSettings = {
            selectedCountry: 'ua',
            selectedCategory: 'none',
            query: '',
            newsCount: 20,
            page: 1
        };
        this.state = {
            settings: this.defautSettings,
            news: [],
            setup: {
                apiKey: ''
            }
        };
        
        this.lastLetterIndex = 0;
    }

    onDataChange(data) {
        this.setState({ settings: data }, () => this.loadNews());
    }

    setSettings(setup) {
        this.setState({ setup }, () => this.loadNews());
    }

    loadNews() {
        if (this.state.setup.apiKey === '') {
            return;
        }

        const that = this;
        const apiKey = this.state.setup.apiKey;

        const { newsCount, selectedCategory, page } = this.state.settings;
        const category = selectedCategory === 'none' ? '' : `&category=${selectedCategory}`;
    
        const textQuery = this.state.settings.query;
        const query = textQuery === '' ? '' : `&q=${textQuery}`;

        let url = API_URL;
        if (this.state.setup.useCors) {
            url = CORS_URL + API_URL;
        }

        fetch(`${url}?country=${this.state.settings.selectedCountry}${category}${query}&pageSize=${newsCount}&page=${page}&apiKey=${apiKey}`)
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
                <SettingsForm onChange={this.setSettings} />
                <NewsForm onDataChange={this.onDataChange} defautSettings={this.defautSettings} />
                <NewsList data={this.state.news} />
            </div>
        );
    }
}