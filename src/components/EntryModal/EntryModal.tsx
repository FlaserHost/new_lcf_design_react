import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ModalField } from "../ModalField/ModalField";
import { StatesProps } from "../../props/Main/interfaces";
import classNames from "classnames";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/EntryModal.scss';

export const EntryModal = ({ setEntryModal }: StatesProps) => {
    const [activeTab, setActiveTab] = useState({modalType: 'auth', btnTitle: 'Авторизоваться'});
    const modalClasses = classNames('modal-tabs', `${activeTab.modalType}-active`);
    const auth = activeTab.modalType === 'auth';

    const notify = () => toast("Wow so easy!");

    return (
        <>
            <Helmet>
                <body className="not-scroll" />
            </Helmet>
            <section className="modal-layer entry-modal align-center">
                <article className="entry-modal-body">
                    <form action="#" method="POST">
                        <div className={modalClasses}>
                            <div className="carriage"></div>
                            <button className="close-cross" onClick={() => setEntryModal(false)}></button>
                            <button className="entry-modal-body__tab auth-tab" type="button" onClick={() => setActiveTab({modalType: 'auth', btnTitle: 'Авторизоваться'})}>Авторизация</button>
                            <button className="entry-modal-body__tab reg-tab" type="button" onClick={() => setActiveTab({modalType: 'reg', btnTitle: 'Зарегистрироваться'})}>Регистрация</button>
                        </div>
                        {
                            auth
                                ? (<div className="auth-body">
                                    <ModalField areaType='login' id='login' type='text' label="Логин" required={true} />
                                    <ModalField areaType='password' id='password' type='password' label="Пароль" required={true} />
                                </div>)
                                : ''
                        }
                        <div className="submit-btn-block">
                            <button
                                className="modal-submit-btn"
                                type="submit"
                                onClick={e => {
                                    e.preventDefault();
                                    notify();
                                }}
                            >
                                {activeTab.btnTitle}
                            </button>
                        </div>
                    </form>
                </article>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}
