'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import ProductPage from "../../components/ProductPage/ProductPage";

interface SelectedProduct {
  id: string;
  name: string;
  code: number;
  desc: string;
  ice: boolean;
  image: string;
  categories: string[];
  options: ProductOption;
  strength: string[];
  size: string[];
  totalQuantity: number;
  selectedStrengthIndex: number;
  selectedSizeIndex: number;
}

interface ProductData {
  id: string;
  title: string;
  code: number;
  desc: string;
  ice: boolean;
  image: string;
  categories: string[];
  options: ProductOption;
  strength: string[];
  size: string[];
}
interface ProductOption {
  startingPrice: number;
  salePrice: number;
  discount: number;
  inStock: boolean;
}

export default function Home() {
  const searchParams = useSearchParams();

  const cartItems = searchParams.get('cartItems');
  const cartCartItems: SelectedProduct[] = cartItems ? JSON.parse(cartItems) : [];

  const productData = searchParams.get('productData');
  const productProductData: ProductData = productData ? JSON.parse(productData) : [];

  console.log(productData);

  return (
    <div>
      <Container>
        <Header cartItems={cartCartItems} />
        <ProductPage selectedProduct={productProductData} />
        <Footer />
      </Container>
    </div>
  )
}

