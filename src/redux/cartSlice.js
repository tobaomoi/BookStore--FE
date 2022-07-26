import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            const bookInformation = action.payload;
            if (!state.find(cart => cart.bookId === bookInformation.bookId)) {
                state.push(bookInformation);
                alert("Them gio hang thanh cong!");
            }
            else{
                alert("Gio hang da ton tai san pham nay!");
            }


            //  state.push(bookInformation);
        },
        removeCart: (state, action) => {
            const removeCartId = action.payload;
            console.log("id", action.payload);
            return state.filter(cart => cart.bookId !== removeCartId);
        },
        incrementCart: (state, action) => {
            state.forEach((cart) => {
                if (cart.bookId === action.payload) {
                    cart.quantity += 1;
                }
            })
        },
        subtractCart: (state, action) => {
            state.forEach((cart) => {
                if (cart.bookId === action.payload) {
                    if (cart.quantity > 1) {

                        cart.quantity -= 1;
                    }
                }
            })
        },
        deleteCart: (state) => {
            return [];
        }
    }
});

const { reducer, actions } = cart;
export const { addCart, removeCart, incrementCart, subtractCart, deleteCart } = actions;
export default reducer; 