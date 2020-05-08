import React from 'react';
import { InputForm } from './form/fields';

const API_KEY_SORAGE_KEY = "news_list_api_key";

export class ApiKeyInput extends React.Component {
    constructor(props) {
        super(props);
        
        const apiKey = localStorage.getItem(API_KEY_SORAGE_KEY) || '';
        this.state = { apiKey };
        this.props.onChange(apiKey);
        
        this.handleOnChange = this.handleOnChange.bind(this);
        this.saveKey = this.saveKey.bind(this);
    }

    handleOnChange(e) {
        const apiKey = e.target.value;
        this.setState({ apiKey });
        this.props.onChange(apiKey);
    }

    saveKey() {
        const apiKey = this.state.apiKey;
        localStorage.setItem(API_KEY_SORAGE_KEY, apiKey);
    }

    componentDidUpdate() {
        window.M.updateTextFields();
    }

    render() {
        return (
            <div className="row">
                <InputForm name={'apiKey'} value={this.state.apiKey} text={'API Key'} onChange={this.handleOnChange} />
                <div className="input-field col s6">
                    <button className="btn waves-effect waves-light" onClick={this.saveKey}>Save</button>
                </div>
            </div>
        );
    }
}