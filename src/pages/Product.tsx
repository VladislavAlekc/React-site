import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<{
    id: string;
    title: string;
    categories: string;
    sizes: string[];
    price: number;
    image: string;
  }>();

  const [activeItem, setActiveItem] = React.useState(0);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          `https://64002da19f844910298a8928.mockapi.io/items/` + id
        );

        setProduct(data);
      } catch (error) {
        alert("Product not found!😢");
        navigate("/catalog");
      }
    }
    fetchProduct();
  }, []);

  const dispatch = useDispatch();
  const onClickActiveItem = (index: number) => {
    setActiveItem(index);
  };

  if (!product) {
    return (
      <div className="cart__wrap wrap">
        <div className="wrap__container _container">
          <div className="wrap__title">PRODUCT Loading...</div>
        </div>
      </div>
    );
  }

  const onClickAddProduct = () => {
    const items = {
      id: product.id,
      title: product.title,
      categories: product.categories,
      sizes: product.sizes[activeItem],
      price: product.price,
      image: product.image,
      count: 0,
    };
    dispatch(addToCart(items));
  };

  return (
    <main className="product">
      <div className="cart__wrap wrap">
        <div className="wrap__container _container">
          <div className="wrap__title">PRODUCT</div>
        </div>
      </div>
      <div className="product__cards cards">
        <div className="cards__container container">
          <div className="cards__slider slider-carts">
            <div className="slider-carts__body ">
              <img
                className="cards__block-img"
                src={product.image}
                alt="cards"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="product__information information">
        <div className="information__container container">
          <h3 className="information__category">{product.title}</h3>
          <div className="information__brend">{product.categories}</div>
          <div className="information__title">
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </div>
          <div className="information__price">${product.price}</div>
          <ul className="catalog-item__sizes">
            {product.sizes.map((size, index) => (
              <li
                key={`${size}_${index}`}
                onClick={() => onClickActiveItem(index)}
                className={activeItem === index ? "_choice" : ""}
              >
                {size}
              </li>
            ))}
          </ul>
          <button
            onClick={onClickAddProduct}
            className="information__button-rose btn _icon-basket"
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default Product;
