import './PaySystems.scss';
// @ts-ignore
import pay from './pay_systems.png';

export const PaySystems = () => {
    return (
        <section className="main-content__pay-systems">
            <div className="section-wrapper">
                <div className="wrapped-platform">
                    <div
                        className="site-title"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="400"
                        data-aos-delay="150"
                        data-aos-easing="ease-in-out"
                    >
                        <h2>light cost family</h2>
                        <span>доставка еды для всей семьи</span>
                    </div>
                    <article className="rules">
                        <div
                            className="rule order-taking"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="400"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-out"
                        >
                            <strong>Прием заказов за сутки</strong>
                            <time dateTime="10:00-20:00">10:00 - 20:00</time>
                            <strong>Заказы после <time dateTime="20:00">20:00</time> можно оформить минимум на послезавтрашний день</strong>
                        </div>
                        <div
                            className="rule delivery-time"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="400"
                            data-aos-delay="250"
                            data-aos-easing="ease-in-out"
                        >
                            <span>Доставка осуществляется</span>
                            <time dateTime="11:00-19:00">11:00 - 19:00</time>
                            <strong>Стоимость доставки по волгограду 100-350 рублей из расчета тарифа Яндекс.Курьер</strong>
                            <strong>При заказе на сумму от 1999 руб. доставка бесплатно*</strong>
                        </div>
                        <div
                            className="rule payment"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="400"
                            data-aos-delay="300"
                            data-aos-easing="ease-in-out"
                        >
                            <strong>Оплата принимается только онлайн</strong>
                        </div>
                        <div
                            className="rule footnote"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="400"
                            data-aos-delay="350"
                            data-aos-easing="ease-in-out"
                        >
                            <strong>* стоимость доставки в красноармейский район, кировский район, п.гумрак, рп.городище, п.гэс, г.волжский, п.латошинка, п.лебяжья поляна рассчитывается по тарифу яндекс курьер</strong>
                        </div>
                    </article>
                    <figure
                        className="pay-systems"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="400"
                        data-aos-delay="400"
                        data-aos-easing="ease-in-out"
                    >
                        <img src={pay} alt="Платежные системы" />
                    </figure>
                </div>
            </div>
        </section>
    );
}