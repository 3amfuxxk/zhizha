import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// For Liquids
interface Product {
  id: string;
  title: string;
  code: number;
  desc: string;
  ice: boolean;
  image: string;
  categories: string[];
  options: ProductOption[];
}
interface ProductOption {
  id: number;
  starting_price: number;
  sale_price: number;
  discount: number;
  in_stock: boolean;
  nico: number;
  volume: number;
}
// For Pods
interface Pods {
  id: string;
  title: string;
  code: number;
  desc: string;
  short_desc: string;
  starting_price: number;
  sale_price: number;
  discount: number;
  in_stock: boolean;
  image: string;
  wide_image: string;
  categories: string[];
  chars: Chars[];
}

interface Chars {
  id: number;
  color: string;
}
// For Details
interface Details {
  id: string;
  title: string;
  code: number;
  desc: string;
  short_desc: string;
  starting_price: number;
  sale_price: number;
  discount: number;
  in_stock: boolean;
  image: string;
  wide_image: string;
  categories: string[];
  chars: Charss[];
}

interface Charss {
  key: string;
  value: string;
}

interface SearchState {
  liquids: Product[];
  pods: Pods[];
  details: Details[];
  abstracts: Details[];
}

const initialState: SearchState = {
  liquids: [],
  pods: [],
  details: [],
  abstracts: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getLiquidResults(state, action: PayloadAction<Product[]>) {
      state.liquids = action.payload;
    },
    getPodResults(state, action: PayloadAction<Pods[]>) {
      state.pods = action.payload;
    },
    getDetailResults(state, action: PayloadAction<Details[]>) {
      state.details = action.payload;
    },
    getAbstractResults(state, action: PayloadAction<Details[]>) {
      state.abstracts = action.payload;
    },
  },
});

export const { getLiquidResults, getPodResults, getDetailResults, getAbstractResults } = searchSlice.actions;

export const selectAllLiquid = (state: RootState) => state.search.liquids;
export const selectAllPods = (state: RootState) => state.search.pods;
export const selectAllDetails = (state: RootState) => state.search.details;
export const selectAllAbstracts = (state: RootState) => state.search.abstracts;

export default searchSlice.reducer;
