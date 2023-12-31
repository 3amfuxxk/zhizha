'use client'
import React, {useState} from "react";
import styled from 'styled-components';
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import HomeSection from "../modules/Home/HomeSection";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";
import Review from "../components/Review/Review";
import Pros from "../components/Pros/Pros";
import Recommendation from "../components/Recommendation/Recommendation";
import Advertising from "../components/Advertising/Advertising";
import Stories from "../components/Stories/Stories";

export default function Home() {

  return (
      <div>
        <Container>
          <Header/>
          <HomeSection />
          <Advertising />
          <Pros />
          <Recommendation />
          <Blog />
          <Review />
          <Footer />
        </Container>
      </div>
  )
}
