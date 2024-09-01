

function Cart() {

    return(
        <>
            <div style={{ display: "none" }} className="overlay">

                <div className="rigth-side">
                <h2>Cart <img width={30} height={30} className="remove-button" src="src/assets/cross.svg" alt="remove" /></h2>

                <div className="items">
                    <div className="cart-item">
                    <img className="cart-item-img" width={70} height={70} src="src/assets/sneakers/1.png" alt="cart sneakers" />
                    <div className="price-right-side">
                        <p>Снікерcи Puma Hypnotic LS 395295 13 Бежевий</p>
                        <b>12 USD</b>
                    </div>
                    <img className="remove-button" src="src/assets/cross.svg" alt="remove button" />
                    </div>

                    <div className="cart-item">
                    <img className="cart-item-img" width={70} height={70} src="src/assets/sneakers/2.png" alt="cart sneakers" />
                    <div className="price-right-side">
                        <p>Снікерcи Puma Palermo Lth 396464 01 Бежевий</p>
                        <b>12 USD</b>
                    </div>
                    <img className="remove-button" src="src/assets/cross.svg" alt="remove button" />
                    </div>
                </div>

                <div className="right-side-total">
                    <ul>
                    <li>
                        <span>Total</span>
                        <b>40 USD</b>
                    </li>
                    </ul>
                    <button className="order-button">Make an order</button>
                </div>

                </div>

            </div>
        </>
    );
}

export default Cart;