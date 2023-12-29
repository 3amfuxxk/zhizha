'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Order from "../../modules/Order/Order/Order";

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