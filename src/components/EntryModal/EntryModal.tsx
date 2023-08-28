import { Helmet } from "react-helmet-async";
import classNames from "classnames";
import './styles/EntryModal.scss';
import {useState} from "react";

export const EntryModal = () => {
    const [activeTab, setActiveTab] = useState({tab: 'auth', active: 'auth-active'});
    const modalClasses = classNames('modal-tabs', activeTab.active);

    return (
        <>
            <Helmet>
                <body className="not-scroll" />
            </Helmet>
            <section className="modal-layer entry-modal align-center">
                <article className="entry-modal-body">
                    <div className={modalClasses}>
                        <div className="carriage"></div>
                        <button className="entry-modal-body__tab auth-tab" type="button" onClick={() => setActiveTab({tab: 'auth', active: 'auth-active'})}>Авторизация</button>
                        <button className="entry-modal-body__tab reg-tab" type="button" onClick={() => setActiveTab({tab: 'reg', active: 'reg-active'})}>Регистрация</button>
                    </div>
                </article>
            </section>
        </>
    );
}
