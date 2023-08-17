import React, { useState } from "react";
import { ModalFieldsProps } from "../../props/Main/interfaces";
import Select from 'react-select'
import classNames from "classnames";

export const List = (props: ModalFieldsProps) => {
    const [selected, setSelected] = useState(null);

    const obj = props.list.map((item: any) => {
        return {
            value: item[0],
            label: item[1]
        };
    });

    const property = props.label.split(' ')[1];
    let emptyNotice = property !== 'время' ? property : 'времени';
    const firstLetter = emptyNotice.split('')[0].toUpperCase();
    emptyNotice = firstLetter + emptyNotice.substring(1);

    const options = [...obj];
    const handleChange = (value: any) => setSelected(value);
    const customNoOptionsMessage = ({ inputValue }: any) => `${emptyNotice} ${inputValue} не существует`;
    const selectClasses = classNames('react-select-container', props.id);

    const customStyles = {
        container: (defaultStyles: any) => ({
            ...defaultStyles,
            width: '100%',
            gridColumn: '1 / 4',
            color: '#fff',
        }),
        control: (defaultStyles: any) => ({
            ...defaultStyles,
            backgroundColor: 'transparent',
            padding: '0 10px',
            border: '1px solid #f18700',
            height: '56px',
            borderRadius: '10px',
            width: '100%',
            outline: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            '&:hover': {
                color: '#fff',
            },
            '&:hover .react-select__indicator': {
                color: '#f18700',
            },
        }),
        option: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            color: state.isSelected ? '#000' : state.isFocused ? '#000' : '#fff',
            backgroundColor: state.isSelected
                ? "#ffd700"
                : state.isFocused
                    ? "#f18700"
                    : undefined,
            cursor: 'pointer',
        }),
        singleValue: (defaultStyles: any) => ({
            ...defaultStyles,
            color: '#fff',
            fontSize: '18px',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (defaultStyles: any) => ({
            ...defaultStyles,
            color: '#fff',
            '&:hover': {
                color: '#f18700',
            },
        }),
        placeholder: (defaultStyles: any) => ({
            ...defaultStyles,
            color: '#fff',
            fontSize: '18px',
            position: 'relative',
            '&::after': {
                content: props.required ? '"*"' : '""',
                color: '#f18700',
            },
        }),
        input: (defaultStyles: any) => ({
            ...defaultStyles,
            color: '#fff',
            fontSize: '18px',
        }),
        menu: (defaultStyles: any) => ({
            ...defaultStyles,
            backgroundColor: '#504B4A',
        }),
        noOptionsMessage: (defaultStyles: any) => ({
            ...defaultStyles,
            color: '#fff',
            backgroundColor: '#ff6666'
        }),
    }

    return (
        <Select
            className={selectClasses}
            classNamePrefix="react-select"
            options={options}
            value={selected}
            styles={customStyles}
            onChange={handleChange}
            name={props.id}
            placeholder={props.label}
            noOptionsMessage={customNoOptionsMessage}
        />
    );
}
