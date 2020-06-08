import React from 'react';
import { ApiKeyInput } from './ApiKeyInput';

export class SettingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: ''
        };
    }

    updateData(data, key) {
        let newState = {};
        newState[key] = data;
        this.setState(newState, () => this.props.onChange(this.state));
    }

    render() {
        return (
            <div>
                <ApiKeyInput onChange={data => this.updateData(data, 'apiKey')} />
            </div>
        );
    }
}