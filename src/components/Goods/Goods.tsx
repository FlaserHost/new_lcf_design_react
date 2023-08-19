import React, { useEffect, useState } from "react";
import { addToCart } from "../../js/functions";
import { StatesProps } from "../../props/Main/interfaces";

export const Goods = ({ myCart, setMyCart, good, index, setModalClasses, setImpulse }: StatesProps) => {
    const [added, setAdded] = useState(false);
    const dataToSend = [setAdded, myCart, setMyCart, good, setModalClasses, setImpulse];

    useEffect(() => {
        if (myCart.size > 0) {
            const currentGood = myCart.get(good.item_id);
            if (currentGood !== undefined) {
                setAdded(true);

                setTimeout(() => {
                    myCart.set(good.item_id, {...good, inCart: setAdded});
                    setMyCart(myCart);
                }, 100);
            }
        }
    }, [good.item_id]);

    return (
        <article className="good" id={`good-${good.item_id}`} data-good-id={good.item_id}>
            <figure className="good__good-img">
                <img src={good.item_img} alt={good.item_title} />
            </figure>
            <div className="good__good-description">
                <div className="description-header">
                    <h3 className="good-title" title={good.item_title}>{good.item_title}</h3>
                    <span className="good-weight">Вес: {good.item_weight} гр</span>
                </div>
                <div className="description-middle">
                    <p title={good.item_composition}>{good.item_composition !== '' ? `Состав: ${good.item_composition}` : ''}</p>
                </div>
                <div className="description-footer" data-good-index={index}>
                    <span className="good-price">{good.item_price} ₽</span>
                    {
                        !added
                            ? <button className="add-to-cart-btn" type="button" onClick={() => addToCart(...dataToSend)}>В корзину</button>
                            : <span className="added">Добавлено</span>
                    }
                </div>
            </div>
        </article>
    );
}