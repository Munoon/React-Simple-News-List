import React from 'react';
import { ChekboxForm } from '../form/fields';

const USE_CORS_SORAGE_KEY = "news_list_use_cors";
const USE_CORS_BY_DEFAULT = false;

export class UseCorsCheckbox extends React.Component {
    constructor(props) {
        super(props);

        let value = USE_CORS_SORAGE_KEY;
        let storageValue = localStorage.getItem(USE_CORS_SORAGE_KEY);
        if (storageValue) {
            value = storageValue === 'true';
        }

        this.state = { value };
        this.props.onChange(value);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        const value = e.target.checked;
        this.setState({ value });
        this.props.onChange(value);
    }

    saveValue() {
        const value = this.state.value;
        localStorage.setItem(USE_CORS_SORAGE_KEY, value);
    }

    render() {
        return <ChekboxForm name='useCors' value={this.state.value} text='Use CORS' onChange={this.handleOnChange} />
    }
}