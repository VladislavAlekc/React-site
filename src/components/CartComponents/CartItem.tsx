import React from "react";
import cross from "../../assets/img/main/delete/01.svg";
import plus from "../../assets/img/logo/header/plus.svg";
import minus from "../../assets/img/logo/header/minus.svg";
import { useDispatch } from "react-redux";

import {
  minusItem,
  addToCart,
  removeToCart,
  CartItemType,
} from "../../redux/slices/cartSlice";

type CartItemProps = {
  id: string;
  title: string;
  categories: string;
  sizes: string;
  price: number;
  image: string;
  count: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  categories,
  sizes,
  price,
  image,
  count,
}) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addToCart({ id } as CartItemType));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeToCart(id));
  };
  return (
    <div className="shopping-cart__content cart-body">
      <a href="#" className="cart-body__image _ibg">
        <img src={image} alt="cart" />
      </a>
      <div className="cart-body__content">
        <div className="cart-body__top">
          <span className="cart-body__title">{title}</span>
          <a onClick={onClickRemove} href="##" className="cart-body__delete">
            <img src={cross} alt="delete" />
          </a>
        </div>

        <div className="cart-body__info">
          <div className="cart-body__text">{categories}</div>
          <div className="cart-body__size">Size: {sizes}</div>
          <div className="cart-body__price">
            Price:<span>${price * count}</span>
          </div>
          <div className="cart-body__quantity">
            Quantity:{" "}
            <button
              disabled={count === 1}
              onClick={onClickMinus}
              className="cart-body__add-minus"
            >
              <img src={minus} />
            </button>
            <span className="cart-body__count">{count}</span>
            <button onClick={onClickPlus} className="cart-body__add-plus">
              <img src={plus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
