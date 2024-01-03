import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// Product = liquid

interface Product {
  id: string;
}

// Pod = pod
interface PodProduct {
  id: string;
}

//Detail = detail
interface Detail {
  id: string;
}

interface favsState {
  products: Product[];
  pods: PodProduct[];
  details: Detail[];
}

const initialState: favsState = {
  products: [],
  pods: [],
  details: [],
};

const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addLiquid(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    addPod(state, action: PayloadAction<PodProduct>) {
      state.pods.push(action.payload);
    },
    addDetail(state, action: PayloadAction<Detail>) {
      state.details.push(action.payload);
    },
  },
});

export const { addLiquid, addDetail, addPod } = favsSlice.actions;

export const allLiquid = (state: RootState) => state.favs.products;
export const allPods = (state: RootState) => state.favs.pods;
export const allDetails = (state: RootState) => state.favs.details;

export default favsSlice.reducer;