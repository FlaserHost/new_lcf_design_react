import React, { useState } from "react";
import { amountChanger, test } from "../../js/functions";
import { StatesProps } from "../../props/Main/interfaces";

export const CartItem = ({ myCart, setMyCart, itemParams }: StatesProps) => {
    const [amount, setAmount] = useState(itemParams.item_amount);

    return (
        <article className="cart-item" id={`item-${itemParams.item_id}`} data-item-id={itemParams.item_id}>
            <figure>
                <img src={itemParams.item_img} alt={itemParams.item_title} />
            </figure>
            <div className="description-wrapper">
                <div>
                    <h3>{itemParams.item_title}</h3>
                </div>
                <div>
                    <p>{itemParams.item_composition}</p>
                </div>
            </div>
            <div className="controls-block">
                <button className="amount-changer-btn minus" type="button" onClick={() => amountChanger('-', myCart, itemParams.item_id, setMyCart, setAmount)}></button>
                <input className="amount-changer-field" id="amount-changer-field" type="number" defaultValue={amount} onChange={() => amountChanger('input', myCart, itemParams.item_id, setMyCart, setAmount, amount)} />
                <button className="amount-changer-btn plus" type="button" onClick={() => test(setAmount)}></button>
            </div>
            <div className="item-price">
                <span>{itemParams.item_cost} ₽</span>
            </div>
            <div className="cart-item-delete">
                <button className="cart-item-delete-btn trash" type="button"></button>
            </div>
        </article>
    );
}