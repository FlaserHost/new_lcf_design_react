import React from "react";
import { ModalProps } from "../../props/Main/interfaces";
import classNames from "classnames";
import { Helmet } from 'react-helmet-async';
import { CartItem } from "../CartItem/CartItem";
import { getWordEnding, calculate } from "../../js/functions";
import './Modal.scss';
// @ts-ignore
import empty from './empty-cart.svg';

export const Modal = ({ classes, myCart, setModal, setMyCart, setModalClasses }: ModalProps) => {
    const zero = myCart.size === 0;
    const emptyOrFull = classNames('modal-body', zero ? 'cart-is-empty' : 'cart');

    const cartItems = !zero ? Array.from(myCart.values()).map((item: any) => <CartItem myCart={myCart} setMyCart={setMyCart} itemParams={item} setModalClasses={setModalClasses} key={item.item_id} />) : '';

    const ending = getWordEnding(myCart.size);
    const totalCartSumm = calculate(myCart.values());

    return (
        <>
            <Helmet>
                <body className="not-scroll" />
            </Helmet>
            <section className={classes} id="modal-layer">
                <article className={emptyOrFull}>
                    <button className="close-cross" onClick={() => setModal(false)}></button>
                    <div className="modal-body__content">
                        {
                            zero
                                ? (<>
                                    <div className="image-block">
                                        <figure>
                                            <img src={empty} alt="Пустая корзина" />
                                        </figure>
                                    </div>
                                    <div className="text-block">
                                        <strong>Корзина пуста</strong>
                                    </div>
                                    <div className="btn-block">
                                        <button className="watch-menu-btn" onClick={() => setModal(false)}>Посмотреть меню</button>
                                    </div>
                                </>)
                                : (<>
                                    <div className="header-block">
                                        <h2 className="cart-title">
                                            Корзина <span className="cart-items-amount">(в корзине {myCart.size} това{ending})</span>
                                        </h2>
                                    </div>
                                    <div className="cart-items">{cartItems}</div>
                                    <div className="total-cart-sum">
                                        <span>Сумма: {totalCartSumm} ₽</span>
                                    </div>
                                    <section className="client-data">
                                        <div className="cart-title">
                                            <h2>Оформление заказа</h2>
                                        </div>
                                        <section className="contact-information">
                                            <form action="#" method="POST">
                                                <h3>1. Контактная информация</h3>
                                                <div className="contact-fields">
                                                    <div className="contact-field-area">
                                                        <label htmlFor="fio-field">ФИО</label>
                                                        <input className="contact-field fio-field" id="fio-field" name="fio-field" type="text" required />
                                                    </div>
                                                    <div className="contact-field-area">
                                                        <label htmlFor="phone-field">Телефон</label>
                                                        <input className="contact-field phone-field" id="phone-field" name="phone-field" type="tel" required />
                                                    </div>
                                                    <div className="contact-field-area">
                                                        <label htmlFor="email-field">Email</label>
                                                        <input className="contact-field email-field" id="email-field" name="email-field" type="email" />
                                                    </div>
                                                </div>
                                            </form>
                                        </section>
                                    </section>
                                </>)
                        }
                    </div>
                </article>
            </section>
        </>
    );
}
