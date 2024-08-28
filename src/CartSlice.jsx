import { createSlice } from '@reduxjs/toolkit';

const updateTotalQuantity = (items) => {

    let totalQuantity = 0;
    items.forEach( (item) => {
        totalQuantity += item.quantity;
    });

    return totalQuantity;
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItemsQuantity: 0
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1});
        }

        state.totalItemsQuantity = updateTotalQuantity(state.items);
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        state.totalItemsQuantity = updateTotalQuantity(state.items);
    },
    updateQuantity: (state, action) => {
        const { name, quantity} = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if(itemToUpdate) {
            itemToUpdate.quantity = quantity;
            state.totalItemsQuantity = updateTotalQuantity(state.items);
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;