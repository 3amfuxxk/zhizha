'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CatalogBlock from "../../modules/Catalog/CatalogBlock/CatalogBlock";

export default function Home() {
  return (
    <div>
        <Container>
          <Header />
          <CatalogBlock />
          <Footer />
        </Container>
    </div>
  )
}