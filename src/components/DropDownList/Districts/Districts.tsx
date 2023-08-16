import React from "react";
import { ModalFieldsProps } from "../../../props/Main/interfaces";
import { districts } from "./DistrictList";
import "./DropDownList.scss"

export const Districts = (props: ModalFieldsProps) => {
    return (
        <div className={`${props.areaType}-field-area field-area`}>
            <select className={`${props.areaType}-field modal-field district-field`} id={props.id} name={props.id}>
                <option id="option-0" value="0" key={0}>{props.label}{props.required && <span className="required-star">*</span>}</option>
                {districts.map(district => <option id={`option-${district[0]}`} value={district[0]} key={district[0]}>{district[1]}</option>)}
            </select>
        </div>
    );
}