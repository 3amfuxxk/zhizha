'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import LiquidBlock from "@/modules/Liquid/LiquidBlock/LiquidBlockEN";
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