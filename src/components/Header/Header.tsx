import React from 'react';
// @ts-ignore
import logo from './img/logo.png';
import './Header.scss';
import { StatesProps } from "../../props/Main/interfaces";

export const Header = ({ cartSize, setModal }: StatesProps) => {
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
                        <span className="btn-title">Корзина</span>
                        <span className="items-amount">{cartSize}</span>
                    </button>
                    <button className="reg-or-auth">Войти</button>
                </div>
            </header>
        </>
    );
}