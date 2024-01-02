import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import LinkPath from "../../../components/LinkPath/LinkPath";
import Link from "next/link";
import { useState, useEffect } from "react";
import { allLiquid, allDetails } from "../../../store/favs";
import { useSelector, useDispatch } from 'react-redux';
import Card from "../../../components/Card/Card";
import DetailCard from "../../../components/DetailCard/DetailCard";

const roboto = Roboto({
    weight: ["300", "400"],
    subsets: ["cyrillic", "latin"],
})

const FavContainer = styled.div`
    display: flex;
    margin-top: 140px;
    flex-direction: column;
    width: 100%;
    height: auto;
`
const Header = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
`
const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-left: auto;
    margin-right: auto;
`
const UnderHeader = styled.p`
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
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
const Wishlist = styled.div`
    display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 10px 10px; 
  grid-template-areas: 
    ". . . ."
    ". . . .";
    width: 100%;
    margin-top: 18px;
`

const FavBlock = () => {
    const favLiquid = useSelector(allLiquid);
    const favDetail = useSelector(allDetails);
    return (
        <FavContainer>
            <HeadContainer>
                <Header>
                    Список бажань
                </Header>
                <UnderHeader>
                    Добірка товарів, яким ви натискали вподобайку
                </UnderHeader>
            </HeadContainer>
            <LinkPath>
                <Link href={"../"} >
                    <TextInactive>
                        Головна
                    </TextInactive>
                </Link>
                <Link href={'/favorites'}>
                    <Active>
                        Вішліст
                    </Active>
                </Link>
            </LinkPath>
            <Wishlist>
                {favLiquid?.map((liquid, index) => (
                    <Link key={index} href={{ pathname: '/product', query: { id: liquid.id } }} >
                        <Card
                            code={liquid.code}
                            desc={liquid.desc}
                            ice={liquid.ice}
                            categories={liquid.categories}
                            image={liquid.image}
                            title={liquid.title}
                            id={liquid.id}
                            options={liquid.options}
                        />
                    </Link>
                ))}
                {favDetail?.map((detail, index) => (
                    <Link key={index} href={{ pathname: '/detailsproduct', query: { id: detail.id } }}>
                        <DetailCard
                            id={detail.id}
                            code={detail.code}
                            title={detail.title}
                            desc={detail.desc}
                            short_desc={detail.short_desc}
                            starting_price={detail.starting_price}
                            sale_price={detail.sale_price}
                            discount={detail.discount}
                            in_stock={detail.in_stock}
                            image={detail.image}
                            wide_image={detail.wide_image}
                            categories={detail.categories}
                            chars={detail.chars}
                        />
                    </Link>
                ))}
            </Wishlist>
        </FavContainer>
    )
}

export default FavBlock;