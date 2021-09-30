import { ADD_CART, REMOVE_CART } from "./actionType";

export const addToCart = (product) => ({
    type: ADD_CART,
    product
});

export const removeFromCart = (id) => ({
    type: REMOVE_CART,
    id
});