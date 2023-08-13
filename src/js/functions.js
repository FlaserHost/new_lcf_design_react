// сохранение в локальное хранилище
const save = myCart => localStorage.myCart = JSON.stringify(Array.from(myCart.values()));

export const modalBody = (cartSize, setModalClasses) => {
    setModalClasses(['modal-layer', cartSize === 0 ? 'align-center' : 'align-start']);
}

// добавление в корзину
export const addToCart = (setAdded, myCart, setMyCart, setCartSize, good, good_id, setModalClasses) => {
    myCart.set(good_id, {...good, setAddedState: setAdded});
    save(myCart);
    setAdded(prev => !prev);
    setMyCart(prev => myCart);
    setCartSize(myCart.size);
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
