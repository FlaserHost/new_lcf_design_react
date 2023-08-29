import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ModalField } from "../ModalField/ModalField";
import { StatesProps } from "../../props/Main/interfaces";
import classNames from "classnames";
import './styles/EntryModal.scss';

export const EntryModal = ({ setEntryModal }: StatesProps) => {
    const [activeTab, setActiveTab] = useState('auth');
    const modalClasses = classNames('modal-tabs', `${activeTab}-active`);

    return (
        <>
            <Helmet>
                <body className="not-scroll" />
            </Helmet>
            <section className="modal-layer entry-modal align-center">
                <article className="entry-modal-body">
                    <div className={modalClasses}>
                        <div className="carriage"></div>
                        <button className="close-cross" onClick={() => setEntryModal(false)}></button>
                        <button className="entry-modal-body__tab auth-tab" type="button" onClick={() => setActiveTab('auth')}>Авторизация</button>
                        <button className="entry-modal-body__tab reg-tab" type="button" onClick={() => setActiveTab('reg')}>Регистрация</button>
                    </div>
                    <div className="auth-body">
                        <ModalField areaType='login' id='login' type='text' label="Логин" required={true} />
                        <ModalField areaType='password' id='password' type='password' label="Пароль" required={true} />
                    </div>
                </article>
            </section>
        </>
    );
}
