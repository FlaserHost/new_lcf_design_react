import React, { useEffect, useState } from 'react';
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { modalBody } from "./js/functions";
import { HelmetProvider } from "react-helmet-async";
import classNames from "classnames";

const App = () => {
    const [myCart, setMyCart] = useState(new Map());
    const [modal, setModal] = useState(false);
    const [modalClasses, setModalClasses] = useState(['modal-layer']);
    const [impulse, setImpulse] = useState([]);

    useEffect(() => {
        if (localStorage.myCart) {
            const saved = JSON.parse(localStorage.myCart);
            saved.forEach((good: any) => myCart.set(good.item_id, good));
            setMyCart(myCart);
        }

        modalBody(myCart.size, setModalClasses);
    }, []);

    const classes = classNames(...modalClasses);

  return (
     <HelmetProvider>
         {modal && <Modal classes={classes} myCart={myCart} setModal={setModal} setMyCart={setMyCart} setModalClasses={setModalClasses} />}
         <Header cartSize={myCart.size} setModal={setModal} impulse={impulse} setImpulse={setImpulse} />
         <Main myCart={myCart} setMyCart={setMyCart} setModalClasses={setModalClasses} setImpulse={setImpulse} />
         <Footer />
     </HelmetProvider>
  );
}

export default App;
