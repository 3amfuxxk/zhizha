'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import HomeSection from "../modules/Home/HomeSection";

export default function Home() {
  return (
    <div>
        <Container>
          <Header />
          <HomeSection />
        </Container>
    </div>
  )
}
