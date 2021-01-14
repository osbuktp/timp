import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItem {
  id: string;
  imageSrc: string;
  name: string;
  price: number;
}

export type ICartItem = IItem & {
  count: number;
};

interface IChangeCountPayload {
  id: string;
  count: number;
}

const initialState: ICartItem[] = [];

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IItem>) => {
      const idx = state.findIndex((it) => it.id === action.payload.id);
      console.log(idx);
      if (idx === -1) {
        state.push({ ...action.payload, count: 1 });
      } else {
        state[idx].count += 1;
      }
      return state;
    },
    changeCount: (state, action: PayloadAction<IChangeCountPayload>) => {
      const idx = state.findIndex((el) => el.id === action.payload.id);
      state[idx].count = action.payload.count;
      return state;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const idx = state.findIndex((it) => it.id === action.payload);
      if (idx === -1) return state;
      state.splice(idx, 1);
      return state;
    },
  },
});

export const { addToCart, removeFromCart, changeCount } = slice.actions;

export default slice.reducer;
