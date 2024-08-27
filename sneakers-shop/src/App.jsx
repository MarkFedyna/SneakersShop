
function App() {

  return (
    <>
      <div className="wrapper">
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
          <h1>All sneakers</h1>

          <div className="sneakers">

            <div className="card">
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
