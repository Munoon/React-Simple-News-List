import React from 'react';
import { ApiKeyInput } from './ApiKeyInput';
import { UseCorsCheckbox } from './UseCorsCheckbox';
import { ButtonForm } from '../form/fields';

export class SettingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: '',
            useCors: false
        };

        this.saveAll = this.saveAll.bind(this);
        this.inputs = [];
    }

    updateData(data, key) {
        let newState = {};
        newState[key] = data;
        this.setState(newState, () => this.props.onChange(this.state));
    }

    saveAll() {
        this.inputs
            .filter(input => input !== null && input !== undefined)
            .forEach(input => input.saveValue());
    }

    render() {
        this.inputs = [];
        const refCallback = input => this.inputs.push(input);

        return (
            <div className='row'>
                <ApiKeyInput onChange={data => this.updateData(data, 'apiKey')} ref={refCallback} />
                <UseCorsCheckbox onChange={data => this.updateData(data, 'useCors')} ref={refCallback} />
                <ButtonForm onClick={this.saveAll}>Save</ButtonForm>
            </div>
        );
    }
}