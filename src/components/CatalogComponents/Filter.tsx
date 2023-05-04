import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  activeTypeFilter,
  setActiveFilter,
} from "../../redux/slices/filterSlice";

type ActiveFilterType = {
  activeFilter: activeTypeFilter;
};
export type SortFilter = {
  name: string;
  sortParam: string;
};
type FilterOutsideClick = MouseEvent & {
  path: Node[];
};
export const filter: SortFilter[] = [
  { name: "TRENDING NOW", sortParam: "rating" },
  { name: "BRAND", sortParam: "-title" },
  { name: "HIGH PRICE", sortParam: "price" },
  { name: "LOW PRICE", sortParam: "-price" },
];

const Filter: React.FC<ActiveFilterType> = React.memo(({ activeFilter }) => {
  const dispatch = useDispatch();
  const onClickCategory = (obj: SortFilter) => {
    dispatch(setActiveFilter(obj));
    setOpenFilte(false);
  };

  const [openFilter, setOpenFilte] = useState(false);

  const toggleVisibleFilter = () => {
    setOpenFilte(!openFilter);
  };
  const filterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickOutsideFilter = (event: MouseEvent) => {
      const _event = event as FilterOutsideClick;
      const path = _event.path || (event.composedPath && event.composedPath());
      if (filterRef.current && !path.includes(filterRef.current)) {
        setOpenFilte(false);
      }
    };
    document.addEventListener("click", clickOutsideFilter);
    return () => {
      document.removeEventListener("click", clickOutsideFilter);
    };
  }, []);

  return (
    <nav ref={filterRef} className="main-catalog__filter filter">
      <ul className="filter__list">
        <li className={openFilter ? "filter__link _open" : "filter__link"}>
          <button
            onClick={toggleVisibleFilter}
            className="filter__link-span _icon-filter "
          >
            <span>FILTER</span>
          </button>
          {openFilter && (
            <ul className="filter__list-sub">
              {filter.map((obj, index) => (
                <li
                  key={`${obj}_${index}`}
                  onClick={() => onClickCategory(obj)}
                  className={
                    activeFilter.sortParam === obj.sortParam
                      ? "filter__link-sub _active"
                      : "filter__link-sub"
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
});

export default Filter;
