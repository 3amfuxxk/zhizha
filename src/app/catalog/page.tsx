'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CatalogBlock from "../../modules/Catalog/CatalogBlock/CatalogBlock";
import { useRouter, useSearchParams } from "next/navigation";

interface SelectedProduct {
  name: string;
  price: number;
  sale?: number;
  imgLink: string;
  id: string;
  strength: string[];
  size: string[];
  totalQuantity: number;
  selectedStrengthIndex: number;
  selectedSizeIndex: number;
}

export default function Home() {
  const searchParams = useSearchParams();
  const cartItems = searchParams.get('cartItems');
  const parsedCartItems: SelectedProduct[] = cartItems ? JSON.parse(cartItems) : [];
  console.log(parsedCartItems);

  return (
    <div>
        <Container>
          <Header cartItems={parsedCartItems} />
          <CatalogBlock catalogItems={parsedCartItems} />
          <Footer />
        </Container>
    </div>
  )
}