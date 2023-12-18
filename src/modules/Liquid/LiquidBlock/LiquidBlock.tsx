import React, { useState } from "react";
import styled from 'styled-components';
import LinkPath from "../../../components/LinkPath/LinkPath";
import Card from "../../../components/Card/Card";
import Link from "next/link";
import Image from "next/image";

const LiquidContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 140px;
    gap: 8px;
`
const NameBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 378px;
    margin: 0 auto;
`
const HeadText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
`
const PodText = styled.p`
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`
const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
`
const TextInactive = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const Active = styled.p`
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const CardContainer = styled.div<{ expanded: boolean }>`
    display: grid;
    overflow: hidden;
    max-height: ${(props) => (props.expanded ? '1754px' : '3518px')};
    transition: max-height 0.3s ease;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        ". . . ."
        ". . . ."; 
`
const ButtonRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
`
const ButtonMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 135px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    gap: 7px;
    margin: 0 auto;
    cursor: pointer;
`
const ButtonText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const LiquidBlock = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <LiquidContainer>
            <NameBlock>
                <HeadText>
                    Набори
                </HeadText>
                <PodText>
                    Підберіть набор на свій смак, кожен з котрих має свій унікальний смак
                </PodText>
            </NameBlock>
            <ProductBlock>
                <LinkPath>
                    <Link href={"../"} >
                        <TextInactive>
                            Головна
                        </TextInactive>
                    </Link>
                    <Link href={"/catalog"} >
                        <TextInactive>
                            Каталог
                        </TextInactive>
                    </Link>
                    <Link href={"/liquid"} >
                        <Active>
                            Набори
                        </Active>
                    </Link>
                </LinkPath>
                <CardContainer expanded={expanded}>
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'1'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'2'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'3'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'4'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'5'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'6'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'7'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'8'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'9'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'10'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'11'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'12'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'13'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'14'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'15'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'16'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'17'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'18'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'19'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'20'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'21'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'22'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'23'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'24'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'25'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'26'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'27'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'28'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'29'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'30'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'31'} />
                    <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'32'} />
                </CardContainer>
                <ButtonRow>
                    <ButtonMore onClick={toggleExpanded}>
                        <ButtonText>
                            Більше
                        </ButtonText>
                        <Image src={'/img/Card/svg/dots.svg'} width={16} height={4} alt="" />
                    </ButtonMore>
                </ButtonRow>
            </ProductBlock>
        </LiquidContainer>
    )
}

export default LiquidBlock;