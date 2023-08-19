import React from "react";
import { goods } from "../../Goods/goods";
import { Slider } from "../Slider/Slider";
import { Categories } from "../Categories/Categories";
import { Showcase } from "../Showcase/Showcase";
import { PaySystems } from "../PaySystems/PaySystems";
import { Photos } from "../Photos/Photos";
import './Main.scss';
import { StatesProps } from "../../props/Main/interfaces";

export const Main = ({ myCart, setMyCart, setModalClasses, setImpulse }: StatesProps) => {
    const anchors = Object.keys(goods);
    return (
        <main className="main-content">
            <Slider />
            <Categories goods={goods} anchors={anchors} />
            <Showcase
                goods={goods}
                anchors={anchors}
                myCart={myCart}
                setMyCart={setMyCart}
                setModalClasses={setModalClasses}
                setImpulse={setImpulse}
            />
            <PaySystems />
            <Photos />
        </main>
    );
}