'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AccessoriesBlock from "../../modules/Accessories/AccessoriesBlock/AccessoriesBlock";

export default function Home() {
  return (
    <div>
        <Container>
          <Header />
          <AccessoriesBlock />
          <Footer />
        </Container>
    </div>
  )
}