import React from 'react';

export class NewsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.defautSettings;
        this.handleOnChange = this.handleOnChange.bind(this);

        document.addEventListener('DOMContentLoaded', () => {
            let elems = document.querySelectorAll('select');
            window.M.FormSelect.init(elems);
        });
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
        }
    }

    render() {
        return (
            <form className="row">
                <SelectForm settings={selectCountry} onChange={this.handleOnChange} values={this.state.selectedCounties}
                    name={'country'} text={'Country'} />
                <SelectForm settings={selectCategory} onChange={this.handleOnChange} values={this.state.selectedCategory}
                    name={'category'} text={'Category'} />
            </form>
        );
    }
}

function SelectForm(props) {
    return (
        <div className="input-field col s3">
            <select name={props.name} onChange={props.onChange} value={props.values}>
                {props.settings.map(item => 
                    <option value={item.name} key={item.name}>{item.text}</option>    
                )}
            </select>
            <label>{props.text}</label>
        </div>
    )
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