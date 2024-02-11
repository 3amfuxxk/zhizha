import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    weight: ["500", "700"],
    subsets: ["cyrillic", "latin"],
})

interface Block {
    id: number;
    title: string;
    photo: string;
}

const StoriesCircle = ({ id, title, photo }: Block) => {
    return (
        <Wrapper>
            <BigCircle>
                <SmallCircle>
                    <Image src={photo} width={58} height={58} alt="" />
                </SmallCircle>
            </BigCircle>
            <StoryName className={roboto.className}>
                {title}
            </StoryName>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    width: 66px;
    height: auto;
    max-height: 98px;
    overflow: hidden;
    cursor: pointer;
`

const BigCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 66px;
    background: transparent;
    border: 2px solid #B6020D;
    border-radius: 50%;
    overflow: hidden;
`

const SmallCircle = styled.div`
    display: flex;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background: #1F1E1F;
`

const StoryName = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    line-height: 120%;
    max-width: 60px;
`

export default StoriesCircle;