// сохранение в локальное хранилище
const save = myCart => localStorage.myCart = JSON.stringify(Array.from(myCart.values()));

export const modalBody = (cartSize, setModalClasses) => setModalClasses(['modal-layer', cartSize === 0 ? 'align-center' : 'align-start']);

// добавление в корзину
export const addToCart = (setAdded, myCart, setMyCart, good, good_id, setModalClasses) => {
    setAdded(prev => !prev);
    myCart.set(good_id, {...good, inCart: setAdded});
    save(myCart);
    setMyCart(myCart);
    modalBody(myCart.size, setModalClasses);
}

const html = document.querySelector('html');
export const goToAnchor = (e, anchor) => {
    e.preventDefault();
    const toAnchor = document.getElementById(anchor);
    const elementPosition = toAnchor.offsetTop;
    html.scroll({top: elementPosition - 118, behavior: 'smooth'});
}

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

export const calculate = cart => Array.from(cart).reduce((sum, item) => sum + item.item_cost, 0);

export const deleteCartItem = (myCart, setMyCart, id) => {
    const item = myCart.get(id);
    item.inCart(false);
    myCart.delete(id);
    save(myCart);
    setMyCart(new Map(myCart));
}

export const amountChanger = (sign, myCart, id, setMyCart, setNewParams, input = 0) => {
    const currentCartItem = myCart.get(id);
    const price = currentCartItem.item_price;
    let amount = currentCartItem.item_amount;
    let newCost;

    if (sign !== 'input') {
        sign === '+' ? amount++ : amount--;
    } else {
        amount = input;
    }

    if (amount < 1) amount = 1;

    newCost = price * amount;
    myCart.set(id, {...currentCartItem, item_amount: amount, item_cost: newCost});
    save(myCart);
    setNewParams({amount: amount, cost: newCost});
}
