import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "./action";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || [];
  if (list.find((item) => product.id === item.id) !== undefined) {
    return toast.error("Item já está no carrinho");
  }

  toast.success("Item adicionado ao carrinho");
  const newList = [...list, product];
  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(newList));
  dispatch(addToCart(product));
};

export const removeFromCartThunk = (id) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || [];
  const newList = list.filter((product) => product.id !== id);
  toast.success("Item removido do carrinho");
  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(newList));
  dispatch(removeFromCart(id));
};
