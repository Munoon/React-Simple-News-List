import React from 'react';
import { SelectForm, InputForm, RangeForm, NumberForm } from './fields';

export class NewsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.defautSettings;
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        e.preventDefault();
        let target = e.target;

        if (target.name === 'country') {
            let selectedCountry = target.querySelector('option:checked').value;
            this.setState({ selectedCountry }, () => this.props.onDataChange(this.state));
        } else if (target.name === 'category') {
            let selectedCategory = target.querySelector('option:checked').value;
            this.setState({ selectedCategory }, () => this.props.onDataChange(this.state));
        } else if (target.name === 'query') {
            let query = target.value;
            this.setState({ query }, () => this.props.onDataChange(this.state));
        } else if (target.name === 'news_count') {
            this.setState({ newsCount: +e.target.value }, () => this.props.onDataChange(this.state));
        } else if (target.name === 'page') {
            const page = +e.target.value;
            if (page >= 1) {
                this.setState({ page }, () => this.props.onDataChange(this.state));
            }
        }
    }

    componentDidUpdate() {
        let selectElements = document.querySelectorAll('select');
        window.M.FormSelect.init(selectElements);

        window.M.updateTextFields();
    }

    render() {
        return (
            <form>
                <div className="row" style={{marginBottom: 0}}>
                    <SelectForm settings={selectCountry} onChange={this.handleOnChange} values={this.state.selectedCounties}
                        name={'country'} text={'Country'} />
                    <SelectForm settings={selectCategory} onChange={this.handleOnChange} values={this.state.selectedCategory}
                        name={'category'} text={'Category'} />
                    <InputForm name={'query'} text={'Search'} value={this.state.query} onChange={this.handleOnChange} />
                </div>
                <div className="row">
                    <div className="col sm1">
                        <RangeForm min={0} max={100} text={'News count'} name={'news_count'} value={this.state.newsCount} onChange={this.handleOnChange} />
                    </div>
                    <div className="col sm1">
                        <NumberForm name='page' text='Page' value={this.state.page} onChange={this.handleOnChange} />
                    </div>
                </div>
            </form>
        );
    }
}

const selectCountry = [
    { name: 'ua', text: 'Ukraine' },
    { name: 'us', text: 'United States' },
    { name: 'ru', text: 'Russia' },
    { name: 'it', text: 'Italy' },
    { name: 'ge', text: 'Germany' }
];

const selectCategory = [
    { name: 'none', text: 'Not Selected' },
    { name: 'business', text: 'Busines' },
    { name: 'entertainment', text: 'Entertainment' },
    { name: 'general', text: 'General' },
    { name: 'health', text: 'Health' },
    { name: 'science', text: 'Science' },
    { name: 'sports', text: 'Sports' },
    { name: 'technology', text: 'Technology' }
];