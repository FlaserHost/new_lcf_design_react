import { useEffect, useState, useRef } from "react";
import { ModalFieldsProps } from "../../props/Main/interfaces";
import './styles/ModalField.scss';
import './styles/ModalField_adaptive.css';
import classNames from "classnames";

export const ModalField = (props: ModalFieldsProps) => {
    const [shift, setShift] = useState('');
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const areaClasses = classNames(`${props.areaType}-field-area`, 'field-area', shift);
    const inputClasses = classNames(`${props.areaType}-field`, 'modal-field', props.id);

    const resizeTextarea = (e: any) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }

    useEffect(() => {
        if (props.selfAddress) {
            setShift('shifted');
        } else if (inputRef.current?.value === '') {
            setShift('');
        }
    }, [props.selfAddress]);

    const insertValue = (value: string) => setValue(value);

    const insert = props.type !== 'textarea'
        ? (<input
            className={inputClasses}
            id={props.id}
            ref={inputRef}
            name={props.id}
            type={props.type}
            value={props.selfAddress || value}
            required={props.required}
            onFocus={() => setShift('shifted')}
            onBlur={e => e.target.value === '' && setShift('')}
            onChange={e => insertValue(e.target.value)}
            disabled={props.selfAddress}
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
