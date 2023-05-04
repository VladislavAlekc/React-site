import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, CartItemType } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

type ProductBlockProps = {
  id: string;
  title: string;
  categories: string;
  sizes: string[];
  price: number;
  image: string;
};

const ProductBlock: React.FC<ProductBlockProps> = ({
  id,
  title,
  price,
  categories,
  image,
  sizes,
}) => {
  const [activeItem, setActiveItem] = React.useState(0);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const items: CartItemType = {
      id,
      title,
      categories,
      sizes: sizes[activeItem],
      price,
      image,
      count: 0,
    };
    dispatch(addToCart(items));
  };

  const onClickActiveIndex = (index: number) => {
    setActiveItem(index);
  };

  return (
    <article className="mini-catalog__items catalog-item">
      <Link to={`/product/${id}`} key={id} className="catalog-item__img _ibg">
        <img src={image} alt="product" />
      </Link>
      <div className="catalog-item__body">
        <Link to={`/product/${id}`} className="catalog-item__title">
          {title}
        </Link>
        <div className="catalog-item__text">{categories}</div>
        <ul className="catalog-item__sizes">
          {sizes.map((size, index) => (
            <li
              key={`${size}_${index}`}
              onClick={() => onClickActiveIndex(index)}
              className={activeItem === index ? "_choice" : ""}
            >
              {size}
            </li>
          ))}
        </ul>
        <div className="catalog-item__price">${price}</div>
        <a
          onClick={onClickAdd}
          href="##"
          className="catalog-item__button btn _icon-basket"
        >
          Add to Cart
        </a>
      </div>
    </article>
  );
};

export default ProductBlock;
