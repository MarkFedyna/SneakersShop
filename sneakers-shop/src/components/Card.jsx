

function Card() {

    return(
        <>
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
        </>
    );
}

export default Card;