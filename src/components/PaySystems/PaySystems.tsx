import React from "react";
// @ts-ignore
import pay from './pay_systems.png';
import './PaySystems.scss';

export const PaySystems = () => {
    return (
        <section className="main-content__pay-systems">
            <div className="section-wrapper">
                <div className="wrapped-platform">
                    <div className="site-title">
                        <h2>light cost family</h2>
                        <span>доставка еды для всей семьи</span>
                    </div>
                    <figure className="pay-systems">
                        <img src={pay} alt="Платежные системы" />
                    </figure>
                </div>
            </div>
        </section>
    );
}