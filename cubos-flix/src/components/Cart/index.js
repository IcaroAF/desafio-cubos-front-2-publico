import "./style.css";
import emptycartimg from "../../assets/images/person-illustration.svg";
import plusicon from "../../assets/images/plus-icon.svg";
import trashicon from "../../assets/images/trash-icon.svg";
import minusicon from "../../assets/images/minus-icon.svg";
import bagIcon from "../../assets/images/Bag.svg";
import { useEffect, useState } from "react";

function Cart({ cartFilled }) {
  const [addAmount, setAddAmount] = useState(0);

  const [total, setTotal] = useState(0);

  const localCart = [...cartFilled];

  useEffect(() => {
    let sum = 0;

    for (const items of localCart) {
      sum += items.amount * items.price;
    }

    setTotal(sum);
  }, [localCart]);

  function handleAddAmount(value, movieID) {
    const indexCart = localCart.findIndex((movie) => movie.id === movieID);

    const newAmount = localCart[indexCart].amount + value;

    localCart[indexCart].amount = newAmount;

    if (localCart[indexCart].amount === 0) {
      cartFilled.splice(indexCart, 1);
    }

    setAddAmount([...localCart]);
  }

  return (
    <div className="full-bag">
      <div className="cart-header">
        <img src={bagIcon} alt="bag-icon-img" />
        <h2>Sacola</h2>
      </div>

      <div className="cart">
        {cartFilled.length > 0 &&
          cartFilled.map((movie) => (
            <div className="cart-item" key={movie.id}>
              <img
                src={movie.poster_path}
                alt="cart-poster-img"
                className="cart-poster"
              />
              <div className="cart-movie-info">
                <p>{movie.title}</p>
                <p>R$ {movie.price.toFixed(2)}</p>
              </div>
              <div className="control-amount-area">
                <button
                  onClick={() => handleAddAmount(1, movie.id)}
                  className="add-amount"
                >
                  <img src={plusicon} alt="plus-icon" />
                </button>
                <p>{movie.amount}</p>
                {movie.amount > 1 ? (
                  <button
                    onClick={() => handleAddAmount(-1, movie.id)}
                    className="remove-button"
                  >
                    <img src={minusicon} alt="minus-icon" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddAmount(-1, movie.id)}
                    className="remove-button"
                  >
                    <img src={trashicon} alt="trash-icon" />
                  </button>
                )}
              </div>
            </div>
          ))}
        {cartFilled.length > 0 && (
          <div className="totalprice-area">
            <button className="purchase-button">
              <p>Confirme seus dados</p>
              <p>R$ {total.toFixed(2)}</p>
            </button>
          </div>
        )}
        {cartFilled.length === 0 && (
          <div className="empty-cart">
            <h1>Sua sacola está vazia</h1>
            <p>Adicione filmes agora</p>
            <img src={emptycartimg} alt="empty-card-img" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
