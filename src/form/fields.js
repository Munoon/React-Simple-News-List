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
        <div className={"input-field " + (props.className || '')}>
            <input id={props.name} name={props.name} value={props.value} onChange={props.onChange} type="text" className="validate" />
            <label htmlFor={props.name} className="active">{props.text}</label>
        </div>
    );
}

export function RangeForm(props) {
    return (
        <p className="range-field">
            <label>{props.text} ({props.value})</label>
            <input type="range" min={props.min} max={props.max} value={props.value} onChange={props.onChange} name={props.name} />
        </p>
    );
}

export function NumberForm(props) {
    return (
        <div className="input-field col s3">
            <input id={props.name} name={props.name} value={props.value} onChange={props.onChange} type="number" className="validate" />
            <label htmlFor={props.name} className="active">{props.text}</label>
        </div>
    );
}

export function ChekboxForm(props) {
    return (
        <label className="input-field col">
            <input name={props.name} checked={props.value} onChange={props.onChange} type='checkbox' />
            <span>{props.text}</span>
        </label>
    );
}

export const ButtonForm = props => (
    <div className='input-field col'>
        <button className="btn waves-effect waves-light" onClick={props.onClick}>{props.children}</button>
    </div>
);