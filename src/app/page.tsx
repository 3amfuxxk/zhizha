'use client'
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import HomeSection from "@/modules/Home/HomeSection";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/Blog/Blog";
import Review from "@/components/Review/Review";
import Pros from "@/components/Pros/Pros";
import Recommendation from "@/components/Recommendation/Recommendation";
import Advertising from "@/components/Advertising/Advertising";
import Stories from "@/components/Stories/Stories";
import HotSlider from "@/components/HotSlider/HotSlider";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  useEffect(() => {
    console.log('Cookies: ', cookies);
  }, [cookies]);
  return (
      <CookiesProvider>
        <div>
          <Container>
            <Header/>
            <HomeSection />
            <Stories />
            <Advertising />
            <Pros />
            <HotSlider />
            <Recommendation />
            <Blog />
            <Review />
            <Footer />
          </Container>
        </div>
      </CookiesProvider>
  )
}
