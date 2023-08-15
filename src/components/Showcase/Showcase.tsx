import React from "react";
import { GoodsProps } from "../../props/Main/interfaces";
import './Showcase.scss';
import { Goods } from "../Goods/Goods";

export const Showcase = ({ goods, anchors, myCart, setMyCart, setModalClasses }: GoodsProps) => {
    const goodsGroups = Object.values(goods).map((item, index) => {
        const group = item.items.map((good: any) => <Goods
            good={good}
            index={index}
            myCart={myCart}
            setMyCart={setMyCart}
            setModalClasses={setModalClasses}
            key={good.item_id}
        />);

        const goodsContainer = <div className="goods-container" key={index}>{group}</div>;
        return (<div className="group-wrapper" id={`${anchors[index]}`} key={index}>
            <h2>{item.category}</h2>
            {goodsContainer}
        </div>);
    });

    return <section className="main-content__main-goods">{goodsGroups}</section>;
}
