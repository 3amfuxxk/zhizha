import React from 'react';
import styled from 'styled-components';
import LinkPath from '../../../components/LinkPath/LinkPath';
import Link from 'next/link';
import Card from '../Card/Card';

const CatalogContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 140px;
    justify-content: center;
    gap: 13px;
`
const HeaderBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const HeadText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
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
const PageChoice = styled.div`
    display: flex;
    flex-direction: column;
    width: 1159px;
    gap: 18px;
    margin: 0 auto;
`
const CardBlock = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

interface SelectedProduct {
    name: string;
    price: number;
    sale?: number;
    imgLink: string;
    id: string;
    strength: string[];
    size: string[];
    totalQuantity: number;
    selectedStrengthIndex: number;
    selectedSizeIndex: number;
}

interface CatalogBlockProps {
    catalogItems: SelectedProduct[];
}

const CatalogBlock = ({ catalogItems }: CatalogBlockProps) => {
    return (
        <CatalogContainer>
            <HeaderBlock>
                <HeadText>
                    Каталог
                </HeadText>
            </HeaderBlock>
            <PageChoice>
                <LinkPath>
                    <Link href={"../"} >
                        <TextInactive>
                            Головна
                        </TextInactive>
                    </Link>
                    <Link href={"/catalog"} >
                        <Active>
                            Каталог
                        </Active>
                    </Link>
                </LinkPath>
                <CardBlock>
                    <Link href={{pathname:"/liquid", query: { catalogItems: JSON.stringify(catalogItems) } }}>
                        <Card text={"Набори"} imgLink={'liquid.png'} />
                    </Link>
                    <Link href={"/accessories"}>
                        <Card text={"Комплектуючі"} imgLink={'component.png'} />
                    </Link>
                    <Link href={"/pods"}>
                        <Card text={"Под системи"} imgLink={'pod.png'} />
                    </Link>
                </CardBlock>
            </PageChoice>
        </CatalogContainer>
    )
}

export default CatalogBlock;