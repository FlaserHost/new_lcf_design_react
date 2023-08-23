import React, { useState } from "react";
import { ModalProps } from "../../props/Main/interfaces";
import classNames from "classnames";
import { Helmet } from 'react-helmet-async';
import { CartItem } from "../CartItem/CartItem";
import { getWordEnding, calculate } from "../../js/functions";
import { ModalField } from "../ModalField/ModalField";
import { ModalDateField } from "../ModalDateField/ModalDateField";
import { List } from "../DropDownList/List";
import { cities } from "../DropDownList/Lists";
import { districts } from "../DropDownList/Lists";
import { times } from "../DropDownList/Lists";
import './styles/Modal.scss';
import './styles/Modal_adaptive.scss';
// @ts-ignore
import empty from './img/empty-cart.svg';

export const Modal = ({ classes, myCart, setModal, setMyCart, setModalClasses }: ModalProps) => {
    const [radio, setRadio] = useState({class: 'delivery', address_type: 'доставки'});
    const [selfAddress, setSelfAddress] = useState<{ city?: {}, district?: {}, street?: string, house?: string } | null>(null);

    const zero = myCart.size === 0;
    const emptyOrFull = classNames('modal-body', zero ? 'cart-is-empty' : 'cart');
    const radioClasses = classNames('checkboxes-wrapper', radio.class);

    const cartItems = !zero ? Array.from(myCart.values()).map((item: any) => <CartItem
        myCart={myCart}
        setMyCart={setMyCart}
        itemParams={item}
        setModalClasses={setModalClasses}
        key={item.item_id}
    />) : '';

    const ending = getWordEnding(myCart.size);
    const totalCartSumm = calculate(myCart.values());

    const tabsActions = (selectedTab: any, address: any) => {
        setRadio(selectedTab);
        setSelfAddress(address);
    }

    const selfDeliveryAddress = {
        city: {
            label: 'Волгоград',
            value: 1
        },
        district: {
            label: 'Центральный',
            value: 8
        },
        street: 'Советская',
        house: '27'
    }

    const houseNumber = window.innerWidth > 376 ? '№ дома' : 'Дом';
    const entrance = window.innerWidth > 321 ? 'Подъезд' : 'Под.';
    const flatLabel = window.innerWidth > 426 ? '№ квартиры/офиса' : 'Кв/оф.';

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
                                        <section className="order-data">
                                            <form action="#" method="POST">
                                                <article className="contact-information">
                                                    <h3>1. Контактная информация</h3>
                                                    <div className="contact-fields">
                                                        <ModalField areaType="contact" label="ФИО" id="fio-field" type="text" required={true} />
                                                        <ModalField areaType="contact" label="Телефон" id="phone-field" type="tel" required={true} />
                                                        <ModalField areaType="contact" label="Email" id="email-field" type="email" />
                                                    </div>
                                                </article>
                                                <article className="delivery-information">
                                                    <h3>2. Способ получения</h3>
                                                    <div className="delivery-checkboxes">
                                                        <div className={radioClasses}>
                                                            <div className="pseudo-element"></div>
                                                            <div className="radio-area" onClick={() => tabsActions({class: 'delivery', address_type: 'доставки'}, null)}>
                                                                <input id="delivery" type="radio" name="delivery-type" defaultChecked hidden />
                                                                <label htmlFor="delivery">Доставка</label>
                                                            </div>
                                                            <div className="radio-area" onClick={() => tabsActions({class: 'self-delivery', address_type: 'получения'}, selfDeliveryAddress)}>
                                                                <input id="self-delivery" type="radio" name="delivery-type" hidden />
                                                                <label htmlFor="self-delivery">Самовывоз</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="delivery-address">
                                                        <h3>Адрес {radio.address_type}</h3>
                                                        <div className="address-fields">
                                                            <List label="Укажите город" id="city-field" list={cities} selfAddress={(selfAddress && selfAddress.city) ? selfAddress.city : selfAddress} required={true} />
                                                            <List label="Укажите район" id="district-field" list={districts} selfAddress={(selfAddress && selfAddress.district) ? selfAddress.district : selfAddress} required={true} />
                                                            <ModalField areaType="address" label="Укажите улицу" id="street-field" type="text" selfAddress={(selfAddress && selfAddress.street) ? selfAddress.street : ''}  required={true} />
                                                            <ModalField areaType="address" label={houseNumber} id="house-field" type="text" selfAddress={(selfAddress && selfAddress.house) ? selfAddress.house : ''} required={true} />
                                                            <ModalField areaType="address" label={entrance} id="entrance-field" type="number" />
                                                            <ModalField areaType="address" label="Этаж" id="floor-field" type="number" />
                                                            <ModalField areaType="address" label={flatLabel} id="flat-field" type="number" />
                                                            <ModalField areaType="address" label="Комментарий" id="comment-field" type="textarea" />
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="date-time-information">
                                                    <h3>3. Дата и время получения</h3>
                                                    <div className="date-time-wrapper">
                                                        <ModalDateField id="date-field" label="Укажите дату" required={true} />
                                                        <List label="Укажите время" id="time-field" list={times} selfAddress={null} required={true} />
                                                    </div>
                                                </article>
                                                <article className="data-agreed">
                                                    <div className="checkbox-area">
                                                        <input
                                                            className="agreed-checkbox"
                                                            id="agreed-checkbox"
                                                            name="agreed-checkbox"
                                                            type="checkbox"
                                                            hidden
                                                        />
                                                        <label className="agreed-checkbox-label" htmlFor="agreed-checkbox">
                                                            Я согласен на обработку моих перс. данных в соответствии с <a className="privacy-policy-link" href="#" onClick={e => e.stopPropagation()}>Условиями</a>
                                                        </label>
                                                    </div>
                                                    <button className="order-confirm-btn" id="order-confirm-btn" type="submit">Оформить заказ</button>
                                                </article>
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
