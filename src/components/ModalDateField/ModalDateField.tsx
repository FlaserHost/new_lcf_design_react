import React, { useState } from "react";
import { ModalFieldsProps } from "../../props/Main/interfaces";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import './ModalDatetField.scss';

export const ModalDateField = (props: ModalFieldsProps) => {
    const [selected, setSelected] = useState<Date>();
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

    return (
       <div className="date-time-wrapper">
           <input name={props.id} type="text" value={fieldValue} readOnly />
           <div className="calendar">
               <DayPicker
                   mode="single"
                   selected={selected}
                   onSelect={setSelected}
                   locale={ru}
                   disabled={disabledDays}
                   fromMonth={fromMonth}
                   ISOWeek
                   showWeekNumber
               />
           </div>
       </div>
    );
}
