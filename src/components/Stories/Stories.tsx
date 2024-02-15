import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

import StoriesCircle from "../StoriesCircle/StoriesCircle";

const roboto = Roboto({
    weight: ["500", "700"],
    subsets: ["cyrillic", "latin"],
})

interface Block {
    id: number;
    title: string;
    photo: string;
}

interface Story {
    id: string;
    block: Block;
    title: string;
    start_date: string;
    end_date: string;
    content: string;
}

const Stories = () => {

    const [blocks, setBlocks] = useState<Block[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/stories/blocks/`);
                const blockData = response.data as Block[];
                setBlocks(blockData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setBlocks(null);
            }
        };

        fetchProduct();
    }, []);

    const [stories, setStories] = useState<Story[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (blocks && blocks.length > 0) {
                    const response = await axios.get(`https://rainzhizha.com/api/v1/stories/blocks/1`);
                    const storiesData = response.data as Story[];
                    setStories(storiesData);
                } else {
                    console.error('Массив блоков пуст или null');
                    setStories(null);
                }
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setStories(null);
            }
        };

        fetchProduct();
    }, [blocks]);

    return (
        <StoriesContainer>
            <StoryBlock>
                {blocks?.map((block, index) => (
                    <Link href={{pathname: '/stories', query: { id: block.id}}}>
                        <StoriesCircle {...block} key={index} />
                    </Link>
                ))}
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
    max-width: 647px;
    overflow-x: auto;
    height: 100%;
    gap: 17px;
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
        display: none;
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


export default Stories;