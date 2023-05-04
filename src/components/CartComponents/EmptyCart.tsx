import React from "react";
import cover from "../../assets/img/main/cartcover/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart: React.FC = () => {
  return (
    <main className="cart-empty">
      <div className="cart-empty__container _container">
        <div className="cart-empty__wrap">
          <div className="cart-empty__cover _ibg">
            <img src={cover} alt="empty-cart" />
          </div>
          <h3 className="cart-empty__title">
            Your Cart is <span>Empty!</span>
          </h3>
          <p className="cart-empty__text">
            You have no items in your shopping cart. <br /> Let's go buy
            something!
          </p>
          <Link to="/catalog" className="cart-empty__btn btn">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </main>
  );
};

export default EmptyCart;
