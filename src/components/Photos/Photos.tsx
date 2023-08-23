import React from "react";
import { photosPaths } from "./PhotosPaths";
import './styles/Photos.scss';
import './styles/Photos_adaptive.scss';

export const Photos = () => {
    let aosDelay = 50;

    return (
        <section className="main-content__photos">
            <div className="photos-wrapper">
                {photosPaths.map((path, index) => {
                   aosDelay += 50;

                   return <figure
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="400"
                        data-aos-delay={aosDelay}
                        data-aos-easing="ease-in-out"
                        key={index}
                    >
                        <img src={path} alt="" />
                    </figure>;
                })}
            </div>
        </section>
    );
}