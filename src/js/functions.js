// сохранение в локальное хранилище
const save = myCart => localStorage.myCart = JSON.stringify(Array.from(myCart.values()));

// открытие модального окна
export const modalBody = (cartSize, setModalClasses) => setModalClasses(['modal-layer', cartSize === 0 ? 'align-center' : 'align-start']);

// добавление в корзину
export const addToCart = (setAdded, myCart, setMyCart, good, setModalClasses, setImpulse) => {
    setImpulse(prev => [...prev, <div className="impulse" />]);
    setAdded(prev => !prev);
    myCart.set(good.item_id, {...good, inCart: setAdded});
    save(myCart);
    setMyCart(myCart);
    modalBody(myCart.size, setModalClasses);
}

// рывок к якорю
const html = document.querySelector('html');
export const goToAnchor = (e, anchor) => {
    e.preventDefault();
    const toAnchor = document.getElementById(anchor);
    const elementPosition = toAnchor.offsetTop;

    let addition;

    if (window.innerWidth < 321) {
        addition = 90;
    } else if (window.innerWidth < 366) {
        addition = 104;
    } else if (window.innerWidth < 376) {
        addition = 130;
    } else if (window.innerWidth < 426) {
        addition = 150;
    } else if (window.innerWidth < 769) {
        addition = 313;
    } else {
        addition = 415
    }

    html.scroll({top: elementPosition + addition, behavior: 'smooth'});
}

// определение окончания слова
export const getWordEnding = count => {
    if (
        count % 100 >= 11 &&
        count % 100 <= 19
    ) {
        return 'ров';
    }

    const lastDigit = count % 10;

    if (lastDigit === 1) {
        return 'р';
    } else if ([2, 3, 4].includes(lastDigit)) {
        return 'ра';
    }

    return 'ров';
}

// Суммирование итоговой стоимости корзины
export const calculate = cart => Array.from(cart).reduce((sum, item) => sum + item.item_cost, 0);

// Удаление товара из корзины
export const deleteCartItem = (myCart, setMyCart, id, setModalClasses) => {
    const item = myCart.get(id);
    item.inCart(false);
    myCart.delete(id);
    save(myCart);
    setMyCart(new Map(myCart));
    modalBody(myCart.size, setModalClasses);
}

// Изменение количества выбранного товара в корзине
export const amountChanger = (sign, myCart, id, setMyCart, setNewParams, input = 0) => {
    const currentCartItem = myCart.get(id);
    const price = currentCartItem.item_price;
    let amount = currentCartItem.item_amount;
    let newCost;

    if (sign !== 'input') {
        sign === '+' ? amount++ : amount--;
        if (amount < 1) amount = 1;
    } else {
        amount = input;
    }

    newCost = price * amount;
    myCart.set(id, {...currentCartItem, item_amount: amount, item_cost: newCost});
    save(myCart);
    setMyCart(new Map(myCart));
    setNewParams({amount: amount, cost: newCost});
}

// Ограничения поля ввода количества товара
export const fieldChecker = (sign, myCart, id, setMyCart, setNewParams, input = 0) => {
    (input === '' || input <= 0) && amountChanger(sign, myCart, id, setMyCart, setNewParams, 1);
}
