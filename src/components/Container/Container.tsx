import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import Link from "next/link";
import Contact from "@/modules/Contact/Contact";
import LanguageMobile from "@/components/Language/LanguageMobile";
import { useState, useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const MenuMobile = styled.div`
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.90);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
`
const LikeNav = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`

const Text = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFF;
    margin: 0px 27px 0px 60px;
`
const NavCont = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    margin-top: 200px;
    margin-left: 10px;
`
const RoundBlock = styled.div`
    display: flex;
    height: 100%;
    width: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 36px;
    background: #FFF;
    flex-shrink: 0;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.3s ease;
`

const NavPart = styled.div`
    width: auto;
    max-width: 160px;
    height: 50px;
    position: relative;
    display: flex;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 36px;
    border: 1px solid #292929;
    background: #141414;
    align-items: center;
    cursor: pointer;

    &:hover ${RoundBlock} {
        width: 100%;
    }
`
const BlurBack = styled.div`
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.20);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        justify-content: center;
        align-items: center;
`
const NavRow = styled.div`
  display: flex;
  gap: 12px;
`

const Container = ({ children }: ContainerProps) => {

  if (typeof window !== 'undefined') {
    let isScreenWidthBelowThreshold = window.innerWidth <= 430;

    const checkAndUpdatePage = () => {
      const screenWidth = window.innerWidth;
      const isBelowThreshold = screenWidth <= 430;

      if (isScreenWidthBelowThreshold !== isBelowThreshold) {
        isScreenWidthBelowThreshold = isBelowThreshold;
        window.location.reload();
      }
    };

    window.addEventListener('resize', () => {
      checkAndUpdatePage();
    });

    window.addEventListener('load', () => {
      checkAndUpdatePage();
    });
  }


  const showContact = () => {
    const menu = document.getElementById('menu-mobile');
    const contact = document.getElementById('blur-back');
    const burger = document.getElementById('burger-menu');
    const cross = document.getElementById('cross-menu');
    if (menu && contact && burger && cross) {
      menu.style.display = 'none';
      contact.style.display = 'flex';
      cross.style.display = 'none';
      burger.style.display = 'flex';
    }
  }
  return (
    <Wrapper className="container">
      <BlurBack id="blur-back">
        <Contact />
      </BlurBack>
      <MenuMobile id="menu-mobile">
        <NavCont>
          <NavRow>
            <Link href={"favorites"}>
              <LikeNav>
                <Image src={'/img/Header/like.svg'} width={18} height={16} alt="" />
              </LikeNav>
            </Link>
            <LanguageMobile />
          </NavRow>
          <Link href={{ pathname: '/catalog' }}>
            <NavPart>
              <RoundBlock>
                <Image src={`/img/Header/catalog.svg`} width={20} height={20} alt='Catalog' />
              </RoundBlock>
              <Text>
                Каталог
              </Text>
            </NavPart>
          </Link>
          <Link href={'/shipping'}>
            <NavPart>
              <RoundBlock>
                <Image src={`/img/Header/shipping.svg`} width={20} height={20} alt='Catalog' />
              </RoundBlock>
              <Text>
                Доставка
              </Text>
            </NavPart>
          </Link>
          <NavPart onClick={showContact}>
            <RoundBlock>
              <Image src={`/img/Header/contact.svg`} width={20} height={20} alt='Catalog' />
            </RoundBlock>
            <Text>
              Контакти
            </Text>
          </NavPart>
        </NavCont>
      </MenuMobile>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 1262px;
    margin: 0 auto;
    position: relative;
    height: auto;

    @media (max-width: 430px) {
      width: 100%;
      padding: 0px 10px;
    } 
  `;

export default Container;