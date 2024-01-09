import React from "react";
import styled from 'styled-components';
import Image from "next/image";

const ItemBlock = styled.div`
    display: flex;
    width: 100%;
    height: 62px;
    gap: 12px;
`
const ImgBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 62px;
    flex-shrink: 0;
    border-radius: 6px;
    background: rgba(41, 41, 41, 1);
`
const ParamsBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: center;
    height: 100%;
    width: 100%;
`
const Title = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const Code = styled.p`
    color: #FFF;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`
const Span = styled.span`
    color: rgba(255, 255, 255, 0.60);
`
const Price = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 0.7px;
`
interface Item {
    img: string;
    title: string;
    code: number;
    price: number;
}

const SearchItem = ({ img, title, code, price }: Item) => {
    return (
        <ItemBlock>
            <ImgBlock>
                <Image src={img} width={62} height={62} alt="" />
            </ImgBlock>
            <ParamsBlock>
                <Title>
                    {title}
                </Title>
                <Code>
                    Код товару: <Span>{code}</Span>
                </Code>
                <Price>
                    {price}₴
                </Price>
            </ParamsBlock>
        </ItemBlock>
    )
}

export default SearchItem;