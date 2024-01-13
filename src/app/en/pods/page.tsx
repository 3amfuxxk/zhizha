'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import PodsBlock from "@/modules/Pods/PodsBlock/PodsBlockEN";
import { useRouter, useSearchParams } from "next/navigation";


export default function Home() {

  return (
    <div>
        <Container>
          <Header />
          <PodsBlock />
          <Footer />
        </Container>
    </div>
  )
}