import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartItem, EmptyCart } from "../components";
import { clearToCart, selectCart } from "../redux/slices/cartSlice";
import Modal from "../components/ModalComponent/Modal";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { items, totalPrice } = useSelector(selectCart);
  const onClickOpen = () => {
    setShowModal(true);
  };
  const onClickClear = () => {
    dispatch(clearToCart());
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalCount) {
    return <EmptyCart />;
  }
  return (
    <main className="cart">
      <Modal
        onClickClear={onClickClear}
        active={showModal}
        onClose={closeModal}
        title="Delete"
      >
        <div>Are you sure you want to delete all products?</div>
      </Modal>
      <div className="cart__wrap wrap">
        <div className="wrap__container _container">
          <div className="wrap__title">SHOPPING CART</div>
        </div>
      </div>
      <section className="cart__shopping-cart shopping-cart">
        <div className="shopping-cart__container _container">
          <div className="shopping-cart__body">
            <div className="shopping-cart__carts">
              <div className="shopping-cart__wrap">
                {items.map((item, index) => (
                  <CartItem key={`${item}_${index}`} {...item} />
                ))}
              </div>
              <div className="shopping-cart__buttons button-carts">
                <a
                  onClick={onClickOpen}
                  href="##"
                  className="button-carts__button btn"
                >
                  CLEAR SHOPPING CART
                </a>
                <Link to="/catalog" className="button-carts__button btn">
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
            <div className="shopping-cart__adress adress">
              <div className="adress__total">
                <div className="adress__grand-total">
                  <div className="adress__count">
                    QUANTITY TOTAL <span>{totalCount}</span>
                  </div>
                  <div className="adress__price">
                    GRAND TOTAL <span>${totalPrice}</span>
                  </div>
                </div>
                <div className="adress__footer">
                  <a href="##" className="adress__button btn">
                    PROCEED TO CHECKOUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
