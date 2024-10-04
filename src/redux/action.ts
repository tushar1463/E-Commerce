import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './constant';

export const addToCart = (product: any) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: string) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const increaseQuantity = (productId: string) => ({
  type: INCREASE_QUANTITY,
  payload: productId,
});

export const decreaseQuantity = (productId: string) => ({
  type: DECREASE_QUANTITY,
  payload: productId,
});

export const addToWishlist = (product: any) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (productId: string) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});