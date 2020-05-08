import React from 'react';
import { NewsList } from './newsList/NewsList';
import { NewsForm } from './form/NewsForm';
import { InputForm } from './form/fields';

const API_URL = 'https://newsapi.org/v2/top-headlines';
// const API_KEY = 'a5b2d699fc00492984ae7533b76321a0';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);
        this.loadNews = this.loadNews.bind(this);
        this.onApiKeyChange = this.onApiKeyChange.bind(this);

        this.defautSettings = {
            selectedCountry: 'ua',
            selectedCategory: 'none',
            query: ''
        };
        this.state = {
            settings: this.defautSettings,
            news: [],
            apiKey: ''
        };
        
        this.lastLetterIndex = 0;
    }

    onDataChange(data) {
        this.setState({ settings: data }, () => this.loadNews());
    }

    onApiKeyChange(e) {
        this.setState({
            apiKey: e.target.value
        }, () => this.loadNews());
    }

    loadNews() {
        if (this.state.apiKey === '') {
            return;
        }

        const that = this;
        const apiKey = this.state.apiKey;

        const selectedCategory = this.state.settings.selectedCategory;
        const category = selectedCategory === 'none' ? '' : `&category=${selectedCategory}`;
    
        const textQuery = this.state.settings.query;
        const query = textQuery === '' ? '' : `&q=${textQuery}`;

        fetch(`${API_URL}?country=${this.state.settings.selectedCountry}${category}${query}&apiKey=${apiKey}`)
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
                <InputForm name={'apiKey'} text={'API KEY'} value={this.state.apiKey} onChange={this.onApiKeyChange} />
                <NewsForm onDataChange={this.onDataChange} defautSettings={this.defautSettings} />
                <NewsList data={this.state.news} />
            </div>
        );
    }
}