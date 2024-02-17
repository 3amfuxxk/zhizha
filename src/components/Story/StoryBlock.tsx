import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";

import StoryVideo from "./StoryVideo";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface StoryBlock {
    idb: string | number;
}

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

const StoryBlock = ({ idb }: StoryBlock) => {
    
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
                    const response = await axios.get(`https://rainzhizha.com/api/v1/stories/blocks/${idb}`);
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

    const [swiperConfig, setSwiperConfig] = useState({
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 50,
      });
    
      useEffect(() => {
        const handleResize = () => {
          // Проверяем ширину экрана и обновляем конфигурацию Swiper
          if (window.innerWidth < 430) {
            setSwiperConfig({
              centeredSlides: false,
              slidesPerView: 1,
              spaceBetween: 0, // или другое значение по вашему выбору
            });
          } else {
            setSwiperConfig({
              centeredSlides: true,
              slidesPerView: 3,
              spaceBetween: 50,
            });
          }
        };
    
        // Вызываем функцию при монтировании компонента
        handleResize();
    
        // Добавляем слушатель события изменения размера экрана
        window.addEventListener('resize', handleResize);
    
        // Очищаем слушатель при размонтировании компонента
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <Wrapper>
            <Swiper
                modules={[Navigation]}
                navigation
                {...swiperConfig}
            >
                {stories?.map((story, index) => (
                    <SwiperSlide key={index}>
                        <StoryVideo
                            id={story.id}
                            block={story.block}
                            title={story.title}
                            start_date={story.start_date}
                            end_date={story.end_date}
                            content={story.content}
                            image={story.block.photo}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 140px 0px;
    
    @media (max-width: 430px) {
        padding: 100px 0px;
    }
`

export default StoryBlock;