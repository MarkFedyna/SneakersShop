import Card from "./components/Card"
import Cart from "./components/Cart"
import Header from "./components/Header"

function App() {

  return (
    <>
      <div className="wrapper">

        <Cart />


        <Header />

        <div className="content">
          <div className="search">
            <h1>All sneakers</h1>
            <div className="search-block">
              <img src="src/assets/search.svg" alt="search" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="sneakers">

            <Card />
            
            {/* <div className="card">
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
            </div> */}

            {/* <div className="card">
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
            </div> */}

            {/* <div className="card">
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
            </div> */}

          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
