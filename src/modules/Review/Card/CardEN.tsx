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
    @media (max-width: 430px) {
        padding: 13px;
        width: 100%;
        height: 242px;   
    }
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
const UserBlock = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    align-items: center;
    margin-top: auto;
`
const UserImage = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    fill: #181818;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const UserName = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
`
const UserRole = styled.p`
color: rgba(255, 255, 255, 0.50);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 100%;
`

interface Props {
    imgLink1: string;
    imgLink2: string;
    text: string;
    userLink: string;
    userName: string;
    id: number;
}

const Card = ({ imgLink1, imgLink2, text, userLink, userName, id }: Props) => {
    return (
        <CardContainer>
            <ImageBlock>
                <ImageContainer>
                    <Image src={imgLink1} width={59} height={59} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={imgLink2} width={59} height={59} alt="" />
                </ImageContainer>
            </ImageBlock>
            <ReviewText>
                <Text className={roboto.className}>
                    {text}
                </Text>
            </ReviewText>
            <UserBlock>
                <UserImage>
                    <Image src={userLink} width={49} height={49} alt="" />
                </UserImage>
                <UserInfo>
                    <UserName>
                        {userName}
                    </UserName>
                    <UserRole className={roboto.className}>
                        Customer
                    </UserRole>
                </UserInfo>
            </UserBlock>
        </CardContainer>
    )
}

export default Card;