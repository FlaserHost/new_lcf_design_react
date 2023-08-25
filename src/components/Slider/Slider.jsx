import { slides } from "./slides";
import './Slider.scss';
import { register } from 'swiper/element/bundle';
register();

export const Slider = () => {
    return (
        <section className="main-content__slider">
            <swiper-container
                navigation="true"
                pagination="true"
                loop="true"
            >
                {slides.map((item, index) => <swiper-slide key={index}>
                    <img src={item} alt={`slide-${index}`} />
                </swiper-slide>)}
            </swiper-container>
        </section>
    );
}
