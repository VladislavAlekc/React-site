import React, { useRef } from "react";
import logoSvg from "../assets/img/logo/header/01.png";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";

const Header: React.FC = () => {
  const location = useLocation();

  const { items } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const isMounted = useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__left-block">
              <Link to="/" className="header__logo">
                <img src={logoSvg} alt="logo" />
              </Link>
              {location.pathname !== "/catalog" &&      
              <div className="header__menu menu">
                <nav className="menu__body">
                  <ul className="menu__list">
                   <li className="menu__item">

                  <Link to="/catalog" className="menu__link">Catalog</Link>
                </li>
              </ul>
            </nav>
          </div>}
         
            </div>
            <div className="header__right-block block-right">
              {location.pathname === "/catalog" && <Search />}
              <div className="block-right__item basket-header">
                {location.pathname !== "/cart" && (
                  <Link to="/cart" className="basket-header__icon _icon-basket">
                    <span>{totalCount}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
