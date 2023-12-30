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
    @media (max-width:430px) {
        justify-content: unset;

    }
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
    @media (max-width:430px) {
        font-size: 32px;   
    }
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
    @media (max-width:430px) {
        width: 100%;
    }
`
const CardBlock = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 430px) {
        flex-wrap: wrap;
        justify-content: unset;
        gap: 6px;
    }
`
const Linked = styled(Link)`
    @media (max-width: 430px) {
        width: 49%;
    }
`
const CatalogBlock = () => {
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
                    <Linked href="/liquid">
                        <Card text={"Набори"} imgLink={'liquid.png'} />
                    </Linked>
                    <Linked href={{pathname: "/accessories"} }>
                        <Card text={"Комплектуючі"} imgLink={'component.png'} />
                    </Linked>
                    <Linked href={{pathname: "/pods"}}>
                        <Card text={"Под системи"} imgLink={'pod.png'} />
                    </Linked>
                </CardBlock>
            </PageChoice>
        </CatalogContainer>
    )
}

export default CatalogBlock;