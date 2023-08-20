import React from "react";
import { GoodsProps } from "../../props/Main/interfaces";
import { Categories } from "../Categories/Categories";
import { Goods } from "../Goods/Goods";
import './styles/Showcase.scss';

export const Showcase = ({ goods, anchors, myCart, setMyCart, setModalClasses, setImpulse }: GoodsProps) => {
    const goodsGroups = Object.values(goods).map((item, index) => {
        const group = item.items.map((good: any) => <Goods
            good={good}
            index={index}
            myCart={myCart}
            setMyCart={setMyCart}
            setModalClasses={setModalClasses}
            setImpulse={setImpulse}
            key={good.item_id}
        />);

        const goodsContainer = <div className="goods-container" key={index}>{group}</div>;
        return (<div className="group-wrapper" id={`${anchors[index]}`} key={index}>
            <h2>{item.category}</h2>
            {goodsContainer}
        </div>);
    });

    return (<section className="main-content__main-goods">
        <Categories goods={goods} anchors={anchors} />
        <div className="showcase-wrapper">{goodsGroups}</div>
    </section>);
}
