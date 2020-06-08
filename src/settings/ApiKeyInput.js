import React from 'react';
import { InputForm } from '../form/fields';

const API_KEY_STORAGE_KEY = "news_list_api_key";

export class ApiKeyInput extends React.Component {
    constructor(props) {
        super(props);
        
        const apiKey = localStorage.getItem(API_KEY_STORAGE_KEY) || '';
        this.state = { apiKey };
        this.props.onChange(apiKey);
        
        this.handleOnChange = this.handleOnChange.bind(this);
        this.saveValue = this.saveValue.bind(this);
    }

    handleOnChange(e) {
        const apiKey = e.target.value;
        this.setState({ apiKey });
        this.props.onChange(apiKey);
    }

    saveValue() {
        const apiKey = this.state.apiKey;
        localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
    }

    componentDidUpdate() {
        window.M.updateTextFields();
    }

    render() {
        return (
            <>
                <div className="input-field col s4">
                    <InputForm name={'apiKey'} value={this.state.apiKey} text={'API Key'} onChange={this.handleOnChange} />
                </div>
                <div className="input-field col">
                    <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer" 
                        className="btn waves-effect waves-light" style={{marginLeft: 3}}>Get Token</a>
                </div>
            </>
        );
    }
}