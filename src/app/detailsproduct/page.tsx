'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import DetailsPage from "../../components/DetailsPage/DetailsPage";

export default function Home() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  console.log(id);
  return (
    <div>
      <Container>
        <Header />
        <DetailsPage idp={id !== null ? id : ''} />
        <Footer />
      </Container>
    </div>
  )
}