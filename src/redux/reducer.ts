import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './constant';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  discountPrice: number;
  selectedSize: number;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find(item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case DECREASE_QUANTITY:
      return state.flatMap(item => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return [];
          }
        }
        return [item];
      });
    default:
      return state;
  }
};

interface WishlistItem {
  id: string;
  name: string;
  image: any;
  price: number;
  discountPrice: number;
}

const initialWishlistState: WishlistItem[] = [];

export const wishlistReducer = (state = initialWishlistState, action: any) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
