import React from 'react';
import './Categories.scss';
import { GoodsProps } from "../../props/Main/interfaces";
import { goToAnchor } from "../../js/functions";

export const Categories = ({ goods, anchors }: GoodsProps) => {
    return (
        <section className="main-content__categories">
            <nav>
                <ul className="goods-categories">
                    {Object.values(goods).map((good: any, index) => <li
                        className={`category-menu-${good.category_id}`}
                        key={good.category_id}
                    >
                        <a className="category-link" href={`#${anchors[index]}`} onClick={e => goToAnchor(e, anchors[index])}>{good.category}</a>
                    </li>)}
                </ul>
            </nav>
        </section>
    );
}