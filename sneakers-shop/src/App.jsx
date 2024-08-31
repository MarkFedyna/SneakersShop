
function App() {

  return (
    <>
      <div className="wrapper">


        <div className="overlay">

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

        <div className="content">
          <div className="search">
            <h1>All sneakers</h1>
            <div className="search-block">
              <img src="src/assets/search.svg" alt="search" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="sneakers">

            <div className="card">
              <div className="favorite">
                <img width={20} height={20} src="src/assets/heart.png" alt="unliked heart" />
              </div>
              <img width={133} height={112} src="src/assets/sneakers/1.png" alt="sneakers" />
              <h5>Снікерcи Puma Hypnotic LS 395295 13 Бежевий</h5>
              <div className="card-bottom">
                <div className="price">
                  <span>Price</span>
                  <b>12 USD</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="src/assets/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
            
            <div className="card">
              <div className="favorite">
                <img width={20} height={20} src="src/assets/heart.png" alt="unliked heart" />
              </div>
              <img width={133} height={112} src="src/assets/sneakers/2.png" alt="sneakers" />
              <h5>Снікерcи Puma Palermo Lth 396464 01 Бежевий</h5>
              <div className="card-bottom">
                <div className="price">
                  <span>Price</span>
                  <b>12 USD</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="src/assets/plus.svg" alt="plus" />
                </button>
              </div>
            </div>

            <div className="card">
              <div className="favorite">
                <img width={20} height={20} src="src/assets/heart.png" alt="unliked heart" />
              </div>
              <img width={133} height={112} src="src/assets/sneakers/3.png" alt="sneakers" />
              <h5>Снікерcи Puma Club 5V5 38940601 Білий</h5>
              <div className="card-bottom">
                <div className="price">
                  <span>Price</span>
                  <b>12 USD</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="src/assets/plus.svg" alt="plus" />
                </button>
              </div>
            </div>

            <div className="card">
              <div className="favorite">
                <img width={20} height={20} src="src/assets/heart.png" alt="unliked heart" />
              </div>
              <img width={133} height={112} src="src/assets/sneakers/4.png" alt="sneakers" />
              <h5>Снікерcи Puma Palermo 396463 18 Зелений</h5>
              <div className="card-bottom">
                <div className="price">
                  <span>Price</span>
                  <b>12 USD</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="src/assets/plus.svg" alt="plus" />
                </button>
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
