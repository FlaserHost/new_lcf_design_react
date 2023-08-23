import React, { useEffect } from 'react';
import { StatesProps } from "../../props/Main/interfaces";
import './styles/Header.scss';
import './styles/Header_adaptive.scss';
// @ts-ignore
import logo from './img/logo.png';

export const Header = ({ cartSize, setModal, impulse, setImpulse }: StatesProps) => {
    useEffect(() => {
        if (impulse.length > 0) {
            const timer = setTimeout(() => removeImpulse(), 900);
            return () => clearTimeout(timer);
        }
    }, [impulse]);

    const removeImpulse = () => setImpulse((prev: any) => prev.slice(1));

    return (
        <>
            <header className="page-header">
                <div className="page-header__content-wrapper">
                    <figure className="page-header__logo">
                        <img src={logo} alt="logo" />
                    </figure>
                    <p>
                        Доставка еды для всей семьи
                        <time datatype="11:00-19:00">11:00 - 19:00</time>
                    </p>
                    <p>
                        Прием заказов за сутки
                        <time datatype="10:00-22:00">10:00 - 22:00</time>
                    </p>
                    <div className="page-header__contacts">
                        <span>Контакты:</span>
                        <a href="https://www.instagram.com/lightcostfamily-vlg/">lightcostfamily_vlg</a>
                        <a href="tel:79954272121">+7 (995) 427-21-21</a>
                    </div>
                    <button className="cart-btn" id="cart-btn" type="button" onClick={() => setModal(true)}>
                        {impulse.map((item: any) => item)}
                        <span className="btn-title">Корзина</span>
                        <span className="items-amount">{cartSize}</span>
                    </button>
                    <button className="reg-or-auth" type="button">
                        <span>Войти</span>
                    </button>
                </div>
            </header>
        </>
    );
}