import React from "react";
import { goods } from "../../Goods/goods";
import { Slider } from "../Slider/Slider";
import { Showcase } from "../Showcase/Showcase";
import { PaySystems } from "../PaySystems/PaySystems";
import { Photos } from "../Photos/Photos";
import { StatesProps } from "../../props/Main/interfaces";
import './styles/Main.scss';
import './styles/adaptive.scss';

export const Main = ({ myCart, setMyCart, setModalClasses, setImpulse }: StatesProps) => {
    const anchors = Object.keys(goods);
    return (
        <main className="main-content">
            <Slider />
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