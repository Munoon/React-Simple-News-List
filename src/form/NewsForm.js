import React from 'react';
import { SelectForm, InputForm } from './fields';

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
        }
    }

    componentDidUpdate() {
        let selectElements = document.querySelectorAll('select');
        window.M.FormSelect.init(selectElements);

        window.M.updateTextFields();
    }

    render() {
        return (
            <form className="row">
                <SelectForm settings={selectCountry} onChange={this.handleOnChange} values={this.state.selectedCounties}
                    name={'country'} text={'Country'} />
                <SelectForm settings={selectCategory} onChange={this.handleOnChange} values={this.state.selectedCategory}
                    name={'category'} text={'Category'} />
                <InputForm name={'query'} text={'Search'} value={this.state.query} onChange={this.handleOnChange} />
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