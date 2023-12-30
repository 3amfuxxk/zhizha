import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import SocialMediaBlock from "../../modules/Footer/SocialMediaBlock/SocialMediaBlock";
import ListBlock from "../../modules/Footer/ListBlock/ListBlock";
import FormBlock from "../../modules/Footer/FormBlock/FormBlock";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const FooterContainer = styled.div`
    display: flex;
    flex-shrink: 0;
    height: auto;
    gap: 92px;
    width: 1004px;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 318px;
    margin-bottom: 102px;
    @media (max-width: 430px) {
        margin-top: 143px;
        width: 100%;
        height: auto;
        gap: 59px;
        margin-bottom: 70px;
    }
`

const FooterBlock = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    gap: 12px 12px;
    grid-auto-flow: row;
    grid-template-areas:
        "div1 div2"
        "div3 div4"
        "div3 div5";
    @media (max-width: 430px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`;
const InfoBlock = styled.div`
    grid-area: div1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px 28px;
    width: 424px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #181818;
    @media (max-width: 430px) {
        width: 100%;
        padding: 17px;
        height: 78px;
        order: -2;
    }
`
const InfoRow = styled.div`
    display: flex;
    gap: 15px;
    width: auto;
    align-items: center;
`
const InfoText = styled.p`
    color: #8B8B8B;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const UpBlock = styled.div`
    grid-area: div2;
    display: flex;
    width: 568px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 18px;
    border: 1px solid #292929;
    background: #181818;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    @media (max-width: 430px) {
        width: 100%;
        height: 78px;
        order: -3;
    }
`
const Img = styled(Image)`
   @media (max-width: 430px) {
    width: 37px;
    height: 44.769px;
   }
`
const Imgs = styled(Image)`
    @media (max-width: 430px) {
        width: 26px;
        height: 13px;
        margin-top: 5px;
    }
`
const UpBlockRow = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`
const HeadText = styled.div<{ fontSize?: string; color?: string }>`
    color: ${(props) => (props.color === 'rgba(255, 255, 255, 0.3)' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 1)')};
    font-size: ${(props) => (props.fontSize === '28px' ? '28px' : '24px')};
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`;
const SocialContainer = styled.div`
    display: flex;
    gap: 14px;
    grid-area: div5;
    @media (max-width: 430px) {
        width: 100%;
        justify-content: space-between;
        gap: unset;
    }
`
const CreditsBlock = styled.div`
    display: flex;
    width: 100%;
    margin-top: 92px;
    margin: 0 auto;
    width: auto;
    height: auto;
`
const CreditsText = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const Span = styled.span`
    color: #FFF;
`

const ScrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBlock>
                <InfoBlock>
                    <Img src={'/img/Footer/svg/logo.svg'} width={26} height={32} alt='' />
                    <InfoRow>
                        <InfoText className={roboto.className}>
                            With Love For Ukraine
                        </InfoText>
                        <Image src={'/img/Footer/svg/flag.svg'} width={27} height={18} alt='' />
                    </InfoRow>
                </InfoBlock>
                <UpBlock onClick={ScrollTop}>
                    <UpBlockRow>
                        <HeadText>
                            Вгору
                        </HeadText>
                        <Imgs src={'img/Footer/svg/arrow-up.svg'} width={18} height={9} alt="" />
                    </UpBlockRow>
                </UpBlock>
                <ListBlock />
                <SocialContainer>
                    <SocialMediaBlock imgLink="/img/Footer/svg/tg.svg" />
                    <SocialMediaBlock imgLink="/img/Footer/svg/insta.svg" />
                    <SocialMediaBlock imgLink="/img/Footer/svg/tw.svg" />
                </SocialContainer>
                <FormBlock />
            </FooterBlock>
            <CreditsBlock>
                <CreditsText>
                    @2023 Жижа. <Span>All Rights reserved</Span>
                </CreditsText>
            </CreditsBlock>
        </FooterContainer>
    )
}

export default Footer;