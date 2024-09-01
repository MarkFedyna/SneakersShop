

function Header() {

    return(
        <>
            <header>
                <div className="header-left">
                    <img width={50} height={50} src="src/assets/logo.png" alt="logo" />
                    <div>
                    <h3>Sneakers shop</h3>
                    <p>Shop the best sneakers</p>
                    </div>
                </div>

                <ul className="header-right">
                    <li>
                    <img width={18} height={18} src="src/assets/cart.svg" alt="cart" />
                    <span>14 USD</span>
                    </li>

                    <li>
                    <img width={18} height={18} src="src/assets/user.svg" alt="user" />
                    </li>
                </ul>

            </header>
        </>
    );
}

export default Header;