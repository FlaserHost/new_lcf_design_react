import React from "react";
import { photosPaths } from "./PhotosPaths";
import './styles/Photos.scss';
import './styles/Photos_adaptive.scss';

export const Photos = () => {
    return (
        <section className="main-content__photos">
            <div className="photos-wrapper">
                {photosPaths.map((path, index) => <figure key={index}><img src={path} alt="" /></figure>)}
            </div>
        </section>
    );
}