import React, { useRef } from "react";
import { TypeParams } from "../redux/slices/productSlice";
import { useSelector } from "react-redux";
import {
  setActiveCategory,
  setPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchCatalog } from "../redux/slices/productSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import {
  Arrivals,
  Filter,
  ProductBlock,
  Categories,
  Skeleton,
  Pagination,
} from "../components";
import { filter } from "../components/CatalogComponents/Filter";
import { RootState, useAppDispatch } from "../redux/store";

const categories = [
  "All clothes",
  "Jackets",
  "Suits",
  "Trousers",
  "Shirts",
  "T-shirts",
  "Pullovers",
  "Blazer",
];

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const isMount = useRef(false);

  const { activeFilter, activeCategory, page, search } = useSelector(
    (state: RootState) => state.filterSlice
  );
  const { items, status } = useSelector(
    (state: RootState) => state.productSlice
  );

  const choiceCategory = categories[activeCategory];

  const onClickCategory = React.useCallback((index: number) => {
    dispatch(setActiveCategory(index));
  }, []);

  const onChangePage = (number: number) => {
    dispatch(setPage(number));
  };

  const getCatalog = async () => {
    const order = activeFilter.sortParam.includes("-") ? " asc" : "desc";
    const sortBy = activeFilter.sortParam.replace("-", "");
    const activeCat =
      activeCategory > 0 ? `category=${String(activeCategory)}` : "";
    const searchValue = search ? `search=${search}` : "";

    dispatch(
      fetchCatalog({
        order,
        sortBy,
        activeCat,
        searchValue,
        page: String(page),
      })
    );
    window.scrollTo(0, 0);
  };

  const navigate = useNavigate();
  React.useEffect(() => {
    // if (isMount.current) {
    //   const params = {
    //     activeFilter: activeFilter.sortParam,
    //     page,
    //     activeCategory,
    //   };
    //   console.log(activeCategory);
    //   const queryString = qs.stringify(
    //     params,

    //     { skipNulls: true }
    //   );

    //   navigate(`?${queryString}`);
    // }

    // const params = qs.parse(
    //   window.location.search.substring(1)
    // ) as unknown as TypeParams;

    // dispatch(
    //   setFilters({
    //     search: params.searchValue,
    //     activeFilter: activeFilter || filter[0],
    //     activeCategory: Number(params.activeCat),
    //     activeItem: 0,
    //     page: Number(page),
    //   })
    // );
    getCatalog();
    //  isMount.current = true;
  }, [activeCategory, activeFilter.sortParam, search, page]);

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(
  //       window.location.search.substring(1)
  //     ) as unknown as TypeParams;

  //     const sort = filter.find((obj) => obj.sortParam === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         search: params.searchValue,
  //         activeFilter: sort || filter[0],
  //         activeCategory: Number(params.activeCat),
  //         activeItem: 0,
  //         page: Number(page),
  //       })
  //     );
  //   }

  //   isMount.current = true;
  // }, []);

  const catalog = items
    // .filter((obj) => {
    //   if (obj.categories.toLowerCase().includes(search.toLowerCase())) {
    //     return true;
    //   } else if (obj.title.toLowerCase().includes(search.toLowerCase())) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })
    .map((obj) => <ProductBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <main className="catalog">
      <Arrivals onChoice={choiceCategory} />
      <section className="catalog__main-catalog main-catalog">
        <div className="main-catalog__container container">
          <div className="main-catalog__nav">
            <Filter activeFilter={activeFilter} />
            <Categories
              objCategory={categories}
              propCategory={activeCategory}
              onClickCategory={onClickCategory}
            />
          </div>

          {status === "error" ? (
            <div className="main-catalog__error">
              <span>😢</span>
              <h3>An error has occurred!</h3>
              <p>Please, try to repeat the request in a minute.</p>
            </div>
          ) : status === "loading" ? (
            skeleton
          ) : (
            <div className="mini-catalog__content">{catalog}</div>
          )}

          <div className="main-catalog__pagination">
            <Pagination onChange={onChangePage} />
          </div>
        </div>
      </section>
      <section className="page__info info">
        <div className="info__container _container">
          <div className="info__column block-column">
            <div className="block-column__icon _icon-delivery"></div>
            <h4 className="block-column__support">Free Delivery</h4>
            <p className="block-column__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div className="info__column block-column">
            <div className="block-column__icon _icon-sale"></div>
            <h4 className="block-column__support">Sales & discounts</h4>
            <p className="block-column__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div className="info__column block-column">
            <div className="block-column__icon _icon-crown"></div>
            <h4 className="block-column__support">Quality assurance</h4>
            <p className="block-column__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
