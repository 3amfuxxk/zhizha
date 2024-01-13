'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import AccessoriesBlock from "@/modules/Accessories/AccessoriesBlock/AccessoriesBlockEN";


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