import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    weight: ["500", "700"],
    subsets: ["cyrillic", "latin"],
})

const StoriesContainer = styled.div`
    display: flex;
    width: 100%;
    height: 132px;
    align-items: center;
    justify-content: space-between;
    border-radius: 18px;
    background: #141414;
    padding: 17px;
`
const StoryBlock = styled.div`
    display: flex;
    width: auto;
`
const StoryText = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    @media (max-width: 430px) {
        display: none;
    }
`
const ContactBlock = styled.div`
    display: flex;
    width: auto;
    margin-right: 73px;
    height: auto;
    gap: 28px;
    @media (max-width: 430px) {
        margin-right: 0;
        align-items: center;   
    }
`
const Text = styled.p`
    color: rgba(255, 255, 255, 0.30);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    line-height: 180%;
    @media (max-width: 430px) {
        text-align: center;
        line-height: normal; 
    }
`
const TgBlock = styled.div`
    display: flex;
    width: 110px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 36px;
    border: 1px solid #292929;
    background: #141414;
    gap: 4px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #fff;
    }
`
const TgText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`

const Stories = () => {
    return (
        <StoriesContainer>
            <StoryBlock>
                <StoryText>
                    Тут скоро будуть круті історії ;)
                </StoryText>
            </StoryBlock>
            <ContactBlock>
                <Text>
                    Оновлення та анонси нашого магазину:
                </Text>
                <TgBlock>
                    <Image src={'/img/Shipping/tg.svg'} width={16} height={16} alt="" />
                    <TgText>
                        Telegram
                    </TgText>
                </TgBlock>
            </ContactBlock>
        </StoriesContainer>
    )
}

export default Stories;