import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addcart: (state, action) => {
      const repeatobj = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if (repeatobj) {
        repeatobj.qty++;
      } else {
        state.cartData.push(action.payload);
      }
    },

    removecart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increment: (state, action) => {
      const itemToUpdate = state.cartData.find(
        (item) => item.id === action.payload.id
      );

      if (itemToUpdate) {
        
        itemToUpdate.qty++;
      }
    },

    //immer
    // increment: (state, action) => {
    //   return produce(state, (draftState) => {
    //     const itemToUpdate = draftState.cartData.find(
    //       (item) => item.id === action.payload.id
    //     );
    //     console.log(itemToUpdate); // proxy data issues
    //     if (itemToUpdate) {
    //       itemToUpdate.qty++;
    //     }
    //   });
    // },

    decrement: (state, action) => {
      const itemToUpdate = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      console.log(itemToUpdate); // proxy data issue
      if (itemToUpdate) {
        if (itemToUpdate.qty <= 1) {
          itemToUpdate.qty = 1;
          
        } else {
          itemToUpdate.qty--;
        }
      }
    },
    // immer
    // decrement: (state, action) => {
    //   return produce(state, (draftState) => {
    //     const itemToUpdate = draftState.cartData.find(
    //       (item) => item.id === action.payload.id
    //     );

    //     if (itemToUpdate) {
    //       if (itemToUpdate.qty <= 1) {
    //         draftState.cartData = draftState.cartData.filter(
    //           (item) => item.id !== action.payload.id
    //         );
    //       } else {
    //         itemToUpdate.qty--;
    //       }
    //     }
    //   });
    // },
  },
});

export const { increment, decrement, addcart, removecart } =
  counterSlice.actions;

export default counterSlice.reducer;
