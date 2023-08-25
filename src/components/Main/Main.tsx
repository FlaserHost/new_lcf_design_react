import { useState } from "react";
import { goods } from "../../Goods/goods";
import { Slider } from "../Slider/Slider";
import { Categories } from "../Categories/Categories";
import { Showcase } from "../Showcase/Showcase";
import { PaySystems } from "../PaySystems/PaySystems";
import { Photos } from "../Photos/Photos";
import { StatesProps } from "../../props/Main/interfaces";
import './styles/Main.scss';
import './styles/Main_adaptive.scss';

export const Main = ({ myCart, setMyCart, setModalClasses, setImpulse }: StatesProps) => {
    const [refs, setRefs] = useState<[] | null>(null);
    const anchors = Object.keys(goods);

    return (
        <main className="main-content">
            <Slider />
            <div className="sticky-ride-track">
                <Categories goods={goods} anchors={anchors} refs={refs} />
                <Showcase
                    goods={goods}
                    anchors={anchors}
                    myCart={myCart}
                    setMyCart={setMyCart}
                    setModalClasses={setModalClasses}
                    setImpulse={setImpulse}
                    setRefs={setRefs}
                />
                <PaySystems />
                <Photos />
            </div>
        </main>
    );
}