import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../Card/Card';

const RecContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 19px;
    margin-top: 50px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    align-items: center;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const SvgBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #FF0;
    background: rgba(255, 255, 0, 0.50);
`
const HeadText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const HeaderRight = styled.div`
    display: flex;
    gap: 8px;
    width: auto;
    align-items: center;
`
const LinkText = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
`
const CardContainer = styled.div`
    display: grid;
    overflow: hidden;
    max-height: 872px;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        ". . . ."
        ". . . ."; 
`

const Recommendation = () => {
    return (
        <RecContainer>
            <Header>
                <HeaderLeft>
                    <SvgBlock>
                        <Image src={'/img/Recommendation/svg/star.svg'} width={16} height={16} alt="" />
                    </SvgBlock>
                    <HeadText>
                        Ми рекомендуємо:
                    </HeadText>
                </HeaderLeft>
                <Link href="/catalog">
                    <HeaderRight>
                        <LinkText>
                            До каталогу
                        </LinkText>
                        <Image src={'/img/Recommendation/svg/arr-rg.svg'} width={14} height={10} alt="" />
                    </HeaderRight>
                </Link>
            </Header>
            <CardContainer>
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'1'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'2'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'3'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'4'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'5'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'6'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'7'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'8'} />
            </CardContainer>
        </RecContainer>
    )
}

export default Recommendation;