import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.name === plant.name);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        state.items.push({ ...plant, quantity: 1 });
      }
    
    },
    removeItem: (state, action) => {
      const plantName = action.payload;
  state.items = state.items.filter(item => item.name !== plantName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
  const item = state.items.find(item => item.name === name);
  if (item) {
    item.quantity = quantity;
  }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
