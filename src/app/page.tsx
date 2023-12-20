'use client'
import React, {useState} from "react";
import styled from 'styled-components';
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import HomeSection from "../modules/Home/HomeSection";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";
import Review from "../components/Review/Review";
import Pros from "../components/Pros/Pros";
import Recommendation from "../components/Recommendation/Recommendation";

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
  const [cartItems, setCartItems] = useState<SelectedProduct[]>([]);

  const handleDataFromAddToCart = (data: SelectedProduct) => {
    setCartItems(prevCartItems => [...prevCartItems, data]);
  };

  return (
      <div>
        <Container>
          <Header cartItems={cartItems} />
          <HomeSection />
          <Pros />
          <Recommendation onDataUpdate={handleDataFromAddToCart} />
          <Blog />
          <Review />
          <Footer />
        </Container>
      </div>
  )
}
