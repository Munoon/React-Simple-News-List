import React from 'react';

export class NewsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCounties: this.props.defautSettings.selectedCounties
        };

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

            this.setState({ selectedCountry });
            this.props.onDataChange({ selectedCountry });
        }
    }

    render() {
        return (
            <form className="row">
                <SelectForm settings={selectCountry} onChange={this.handleOnChange} values={this.state.selectedCounties}
                    name={'country'} text={'Country'} />
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
]