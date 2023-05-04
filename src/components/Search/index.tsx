import React, { useCallback, useRef, useState } from "react";
import { setSearch } from "../../redux/slices/filterSlice";
import crossSvg from "../../assets/img/logo/header/cross.svg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickCross = () => {
    setValue("");
    dispatch(setSearch(""));
    inputRef.current?.focus();
  };

  const timerDebounce = useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 300),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    timerDebounce(event.target.value);
  };

  return (
    <div className="block-right__item search-form">
      <div className="search-form">
        <button className="search-form__icon _icon-form"></button>
        <form action="##" className="search-form__form">
          <button className="search-form__btn _icon-form"></button>
          <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            autoComplete="off"
            className="search-form__input"
            type="text"
            placeholder="Search for minimalist chair"
          />
          {value && (
            <img
              className="search-form__img"
              onClick={onClickCross}
              src={crossSvg}
              alt="cross"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Search;
