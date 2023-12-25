import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  starting_price: number;
  sale_price: number;
  discount: number;
  in_stock: boolean;
  nico: number;
  volume: number;
}

interface SelectedProductState {
  selectedProduct: Product | null;
}

const initialState: SelectedProductState = {
  selectedProduct: null,
};

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } = selectedProductSlice.actions;

export const selectSelectedProduct = (state: { selectedProduct: SelectedProductState }) =>
  state.selectedProduct.selectedProduct;

export default selectedProductSlice.reducer;
