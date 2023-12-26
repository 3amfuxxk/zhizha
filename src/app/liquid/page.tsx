'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LiquidBlock from "../../modules/Liquid/LiquidBlock/LiquidBlock";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {

  return (
    <div>
        <Container>
          <Header />
          <LiquidBlock />
          <Footer />
        </Container>
    </div>
  )
}