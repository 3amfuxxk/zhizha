import React from 'react';
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from 'next/link';

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const CardContainer = styled.div`
    display: flex;
    width: 394px;
    height: 242px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #1F1E1F;
    flex-direction: column;
    padding: 15px 13px 13px 13px;
`
const ImageBlock = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
`
const ImageContainer = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #282828;
    background: #181818;
    overflow: hidden;
`
const ReviewText = styled.div`
    display: -webkit-box;
    width: 100%;
    margin-top: 6px;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`
const Text = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`
interface Props {
    imgLink1: string;
    imgLink2: string;
    text: string;
}

const Card = ({imgLink1,imgLink2,text}: Props) => {
    return (
        <CardContainer>
            <ImageBlock>
                <ImageContainer>
                    <Image src={`/img/Review/product/${imgLink1}`} width={60} height={60} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={`/img/Review/product/${imgLink2}`} width={60} height={60} alt="" />
                </ImageContainer>
            </ImageBlock>
            <ReviewText>
                <Text className={roboto.className}>
                    {text}
                </Text>
            </ReviewText>
        </CardContainer>
    )
}

export default Card;