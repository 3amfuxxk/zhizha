'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import { useRouter, useSearchParams } from "next/navigation";
import ProductPage from "@/components/ProductPage/ProductPageEN";

export default function Home() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  // console.log(id);
  return (
    <div>
      <Container>
        <Header />
        <ProductPage idp={id !== null ? id : ''} />
        <Footer />
      </Container>
    </div>
  )
}

