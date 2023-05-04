import { calcTotalPrice } from "./calcTotalPrice";

export const getProductLocalStorage = () => {
  const data = localStorage.getItem("cart");
  const json = data ? JSON.parse(data) : [];
  const totalPriceItems = calcTotalPrice(json);

  return {
    json,
    totalPriceItems,
  };
};
