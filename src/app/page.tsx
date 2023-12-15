'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import HomeSection from "../modules/Home/HomeSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
        <Container>
          <Header />
          <HomeSection />
          <Footer />
        </Container>
    </div>
  )
}
