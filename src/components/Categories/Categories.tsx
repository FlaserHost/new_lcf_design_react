import React, { useEffect } from 'react';
import { GoodsProps } from "../../props/Main/interfaces";
import { goToAnchor } from "../../js/functions";
import './styles/Categories.scss';
import './styles/Category_adaptive.scss';

export const Categories = ({ goods, anchors, refs }: GoodsProps) => {
    const linksRefs: React.RefObject<HTMLAnchorElement>[] = [];
    let flag = false;
    let aLinks: any[];

    useEffect(() => {
        if (Array.isArray(refs) && flag) {
            aLinks = linksRefs.map(item => item.current);

            const scrollDetector = () => {
                const pos = window.scrollY;

                refs.forEach((section, index) => {
                    const rect = section.offsetTop;

                    if (rect <= pos) {
                        aLinks.forEach(link => link.classList.remove("active"));
                        aLinks[index].classList.add("active");
                    }
                });
            }

            document.addEventListener('scroll', scrollDetector);
            document.addEventListener('resize', scrollDetector);

            return () => {
                document.removeEventListener('scroll', scrollDetector);
                document.removeEventListener('resize', scrollDetector);
            }
        }
    }, [refs, flag]);

    const links = Object.values(goods).map((good: any, index) => {
        const linkRef = React.createRef<HTMLAnchorElement>();
        linksRefs.push(linkRef);

        return (<li className={`category-menu-${good.category_id}`} key={good.category_id}>
            <a
                className="category-link"
                href={`#${anchors[index]}`}
                ref={linkRef}
                onClick={e => goToAnchor(e, anchors[index])}
            >
                {good.category}
            </a>
        </li>);
    });

    flag = true;

    return (
        <section className="main-content__categories">
            <nav>
                <ul className="goods-categories">
                    {links}
                </ul>
            </nav>
        </section>
    );
}
