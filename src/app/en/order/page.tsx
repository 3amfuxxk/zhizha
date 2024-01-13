'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import Order from "@/modules/Order/Order/OrderEN";

export default function Home() {

  return (
    <div>
        <Container>
          <Header />
          <Order />
          <Footer />
        </Container>
    </div>
  )
}