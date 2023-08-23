import React, { useEffect } from "react";
import { GoodsProps } from "../../props/Main/interfaces";
import { Goods } from "../Goods/Goods";
import './styles/Showcase.scss';
import './styles/Showcase_adaptive.scss';

export const Showcase = ({ goods, anchors, myCart, setMyCart, setModalClasses, setImpulse, setRefs }: GoodsProps) => {
    const groupRefs: React.RefObject<HTMLDivElement>[] = [];
    let flag = false;

    useEffect(() => {
        // @ts-ignore
        const preparedRefs = groupRefs.map(item => item.current);
        setRefs(preparedRefs);
    }, [flag])

    let aosDelay = 50;
    const goodsGroups = Object.values(goods).map((item, index) => {
        const group = item.items.map((good: any) => {
            aosDelay += 50;

            return <Goods
                 good={good}
                 index={index}
                 myCart={myCart}
                 setMyCart={setMyCart}
                 setModalClasses={setModalClasses}
                 setImpulse={setImpulse}
                 aosDelay={aosDelay}
                 key={good.item_id}
            />
        });

        aosDelay = 50;

        const groupRef = React.createRef<HTMLDivElement>();
        groupRefs.push(groupRef);

        const goodsContainer = <div className="goods-container" key={index}>{group}</div>;
        return (<div className="group-wrapper" ref={groupRef} id={`${anchors[index]}`} key={index}>
            <h2>{item.category}</h2>
            {goodsContainer}
        </div>);
    });

    flag = true;
    return <section className="main-content__main-goods">{goodsGroups}</section>;
}
