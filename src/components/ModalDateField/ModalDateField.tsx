import React, { useState } from "react";
import { ModalFieldsProps } from "../../props/Main/interfaces";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import './ModalDatetField.scss';
import classNames from "classnames";

export const ModalDateField = (props: ModalFieldsProps) => {
    const [calendar, setCalendar] = useState(false);
    const [selected, setSelected] = useState<Date>();
    const [shift, setShift] = useState('');
    const fieldValue = selected ? format(selected, 'dd.MM.y') : '';

    const today = new Date();
    const fromMonth = new Date(today.getFullYear(), today.getMonth());
    const isPastDay = (day: Date) => day <= today;

    const disabledDays = [
        isPastDay,
        new Date(2023, 8, 10),
        new Date(2023, 8, 12),
        new Date(2023, 8, 20),
    ];

    const dateSelected = (day: any) => {
        setSelected(day);
        setShift('shifted');
        setCalendar(false);
    }

    const wrapperClasses = classNames('date-field-wrapper', shift);

    return (<>
            <div className={wrapperClasses}>
                <input
                    className="date-input-field"
                    id={props.id}
                    name={props.id}
                    type="text"
                    value={fieldValue}
                    onClick={() => setCalendar(prev => !prev)}
                    required={props.required}
                    readOnly
                />
                <label htmlFor={props.id}>{props.label}{props.required && <span className="required-star">*</span>}</label>
                {calendar && <div className="calendar">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={dateSelected}
                        locale={ru}
                        disabled={disabledDays}
                        fromMonth={fromMonth}
                        ISOWeek
                        showWeekNumber
                    />
                </div>}
            </div>
       </>
    );
}
