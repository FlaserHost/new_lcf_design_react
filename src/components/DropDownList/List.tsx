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

    const controlDisabledStatus = {
        controlUndisabled: {
            border: '1px solid #f18700',
            cursor: 'pointer',
        },
        controlDisabled: {
            border: '1px solid #888',
            cursor: 'default',
        }
    }

    const controlConfirmedStyles = props.selfAddress === null ? {...controlDisabledStatus.controlUndisabled} : {...controlDisabledStatus.controlDisabled};
    const singleValueConfirmedStyles = props.selfAddress === null ? {color: '#fff'} : {color: '#888'};

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
            outline: 'none',
            boxShadow: 'none',
            padding: '0 10px',
            width: '100%',
            height: '56px',
            borderRadius: '10px',
            ...controlConfirmedStyles,
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
            fontSize: '18px',
            ...singleValueConfirmedStyles
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (defaultStyles: any) => ({
            ...defaultStyles,
            ...singleValueConfirmedStyles,
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
            '@media screen and (max-width: 376px)': {
                fontSize: '13px',
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
            value={props.selfAddress || selected}
            styles={customStyles}
            onChange={handleChange}
            name={props.id}
            placeholder={props.label}
            noOptionsMessage={customNoOptionsMessage}
            isDisabled={!!props.selfAddress}
        />
    );
}
