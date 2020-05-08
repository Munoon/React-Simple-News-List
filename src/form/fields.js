import React from 'react';

export function SelectForm(props) {
    return (
        <div className="input-field col s3">
            <select name={props.name} onChange={props.onChange} value={props.values}>
                {props.settings.map(item => 
                    <option value={item.name} key={item.name}>{item.text}</option>    
                )}
            </select>
            <label>{props.text}</label>
        </div>
    );
}

export function InputForm(props) {
    return (
        <div className="input-field col s3">
            <input id={props.name} name={props.name} value={props.value} onChange={props.onChange} type="text" className="validate" />
            <label htmlFor={props.name} className="active">{props.text}</label>
        </div>
    );
}