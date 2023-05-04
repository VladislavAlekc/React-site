import React from "react";

type CategoriesProps = {
  propCategory: number;
  onClickCategory: (index: number) => void;
  objCategory: string[];
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ propCategory, onClickCategory, objCategory }) => {
    return (
      <div className="main-catalog__choice choice">
        <ul className="choice__category-all">
          {objCategory.map((item, index) => (
            <li
              key={`${item}_${index}`}
              onClick={() => onClickCategory(index)}
              className={
                propCategory === index
                  ? "choice__category _choice-categories"
                  : "choice__category "
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
