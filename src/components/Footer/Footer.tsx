import React from "react";
import { links } from "./Links";
// @ts-ignore
import logo from './logo_footer.png';
import './Footer.scss';

export const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <footer className="page-footer">
            <article className="footer-section contacts-section">
                <a className="footer-link" href="mailto:lightcost@bk.ru">lightcost@bk.ru</a>
                <a className="footer-link" href="tel:79954272121">+7(995)427-21-21</a>
                <span className="owner">ИП Киселева Юлия Андреевна</span>
                <p className="address">ИНН 344346538347 ул.Советская, 27</p>
                <span>Разработчик сайта:</span>
                <a href="mailto:flaserhost@yandex.ru">flaserhost@yandex.ru</a>
            </article>
            <article className="footer-section links-section">
                <div className="social-links">
                    {Object.values(links).map((link, index) => <a href={link.href} key={index}>
                        <figure>
                            <img src={link.src} alt={link.alt} />
                        </figure>
                    </a>)}
                </div>
                <div className="copyright">
                    <strong>&copy; 2021 - {currentYear} Light Cost Family</strong>
                </div>
            </article>
            <article className="footer-section logo-section">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
            </article>
        </footer>
    );
}