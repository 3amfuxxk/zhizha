'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LiquidBlock from "../../modules/Liquid/LiquidBlock/LiquidBlock";
import { useRouter, useSearchParams } from "next/navigation";

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

  return (
    <div>
        <Container>
          <Header cartItems={cartCartItems} />
          <LiquidBlock cartItems={cartCartItems} />
          <Footer />
        </Container>
    </div>
  )
}