import React, { useState } from "react";
import { ModalFieldsProps } from "../../props/Main/interfaces";
import './ModalField.scss';
import classNames from "classnames";

export const ModalField = (props: ModalFieldsProps) => {
    const [shift, setShift] = useState('');
    const areaClasses = classNames(`${props.areaType}-field-area`, 'field-area', shift);

    const resizeTextarea = (e: any) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }

    const insert = props.type !== 'textarea'
        ? (<input
            className={`${props.areaType}-field modal-field ${props.id}`}
            id={props.id}
            name={props.id}
            type={props.type}
            required={props.required}
            onFocus={() => setShift('shifted')}
            onBlur={e => e.target.value === '' && setShift('')}
        />)
        : (<textarea
            className={`${props.areaType}-field modal-field ${props.id}`}
            id={props.id}
            name={props.id}
            required={props.required}
            onFocus={() => setShift('shifted')}
            onBlur={e => e.target.value === '' && setShift('')}
            onInput={e => resizeTextarea(e)}
        ></textarea>);

    return (
        <div className={areaClasses}>
            {insert}
            <label htmlFor={props.id}>{props.label}{props.required && <span className="required-star">*</span>}</label>
        </div>
    );
}