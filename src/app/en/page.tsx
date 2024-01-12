'use client'
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Container from "@/components/Container/Container";
import Header from "@/components/Header/HeaderEN";
import HomeSection from "@/modules/Home/HomeSectionEN";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/Blog/Blog";
import Review from "@/components/Review/Review";
import Pros from "@/components/Pros/ProsEN";
import Recommendation from "@/components/Recommendation/RecommendationEN";
import Advertising from "@/components/Advertising/AdvertisingEN";
import Stories from "@/components/Stories/StoriesEN";
import HotSlider from "@/components/HotSlider/HotSliderEN";
import { CookiesProvider } from 'react-cookie';
// import { useCookies } from 'react-cookie';

export default function Home() {
  // const [cookies, setCookie, removeCookie] = useCookies(['user']);

  // useEffect(() => {
  //   console.log('Cookies: ', cookies);
  // }, [cookies]);
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
