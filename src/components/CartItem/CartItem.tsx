import React, { useState } from "react";
import { amountChanger, deleteCartItem, fieldChecker } from "../../js/functions";
import { StatesProps } from "../../props/Main/interfaces";

export const CartItem = ({ myCart, setMyCart, itemParams, setModalClasses }: StatesProps) => {
    const [newParams, setNewParams] = useState({amount: itemParams.item_amount, cost: itemParams.item_cost});
    const forAmountChanger = [myCart, itemParams.item_id, setMyCart, setNewParams];

    return (
        <article className="cart-item" id={`item-${itemParams.item_id}`} data-item-id={itemParams.item_id}>
            <figure>
                <img src={itemParams.item_img} alt={itemParams.item_title} />
            </figure>
            <div className="description-wrapper">
                <div>
                    <h3 title={itemParams.item_title}>{itemParams.item_title}</h3>
                </div>
                <div>
                    <p>{itemParams.item_composition}</p>
                </div>
            </div>
            <div className="controls-block">
                <button className="amount-changer-btn minus" type="button" onClick={() => amountChanger('-', ...forAmountChanger)}></button>
                <input className="amount-changer-field" type="number" value={newParams.amount} onBlur={e => fieldChecker('input', ...forAmountChanger, e.target.value)} onChange={e => amountChanger('input', ...forAmountChanger, e.target.value)} />
                <button className="amount-changer-btn plus" type="button" onClick={() => amountChanger('+', ...forAmountChanger)}></button>
            </div>
            <div className="item-price">
                <span>{newParams.cost} ₽</span>
            </div>
            <div className="cart-item-delete">
                <button className="cart-item-delete-btn trash" type="button" onClick={() => deleteCartItem(myCart, setMyCart, itemParams.item_id, setModalClasses)}></button>
            </div>
        </article>
    );
}
