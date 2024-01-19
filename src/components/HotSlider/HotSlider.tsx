import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Image from "next/image";
import axios from "axios";

const roboto = Roboto({
    weight: ["500", "700"],
    subsets: ["cyrillic", "latin"],
})

const SliderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 673px;
    padding: 34px 29px 14px 29px;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    margin-top: 12px;
    gap: 17px;
    @media (max-width: 430px) {
        height: auto;
        padding: 22px 17px 17px 17px;
    }
`
const Header = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const SliderBlock = styled.div`
    display: flex;
    width: 100%;
    height: 520px;
    scroll-behavior: smooth;
    overflow: hidden;
    @media (max-width: 430px) {
        height: 230px;
    }
`
const Slide = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #1F1E1F;
    flex-shrink: 0;
    overflow: hidden;
`
const NavSlider = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 9px;
    margin-top: 14px;
    @media (max-width: 430px) {
        margin-top:0px;
    }
`
const NavArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid #292929;
    background: #141414;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #fff;
    }
`
const BulletNav = styled.div`
    display: flex;
    width: 84px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
const Bullet = styled.span`
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #2D2D2D;

    &.activee {
    background: white;
  }
`
const Img = styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
`

interface Images {
    id: number;
    image_desktop_1: string;
    image_desktop_2: string;
    image_desktop_3: string;
    image_mobile_1: string;
    image_mobile_2: string;
    image_mobile_3: string;
}

const HotSlider = () => {

    const [images, setData] = useState<Images | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/hot`);
                const imagesData = response.data as Images;
                setData(imagesData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setData(null);
            }
        };

        fetchProduct();
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 430);
            };

            handleResize();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const [isSlideMoving, setSlideMoving] = useState(false);
    if (typeof document !== 'undefined') {
        const slider = document.getElementById("hot-slider");

        if (slider !== null) {
            slider.addEventListener('scroll', () => {
                setSlideMoving(true);
            });
            setTimeout(() => {
                setSlideMoving(false);
            }, 600);
        }
    }


    const updateBulletColors = () => {
        if (typeof document !== 'undefined') {
            const bullets = document.querySelectorAll('.bullet');

            bullets.forEach((bullet, index) => {
                if (index === currentSlideIndex) {
                    bullet.classList.add('active');
                } else {
                    bullet.classList.remove('active');
                }
            });
        }
    };

    const slideLeft = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            if (!isSlideMoving) {
                const slide = document.querySelector('.hot-slide-slide');
                if (slide) {
                    const slideWidth = slide.getBoundingClientRect().width;
                    const slider = document.getElementById('hot-slider');

                    const newIndex = currentSlideIndex - 1 < 0 ? 0 : currentSlideIndex - 1;

                    if (slider !== null) {
                        slider.scrollLeft = slider.scrollLeft - slideWidth;
                        setCurrentSlideIndex(newIndex);
                        updateBulletColors();
                    }
                }
            }
        }
    };

    const slideRight = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            if (!isSlideMoving) {
                const slide = document.querySelector('.hot-slide-slide');
                if (slide) {
                    const slideWidth = slide.getBoundingClientRect().width;
                    const slider = document.getElementById('hot-slider');

                    const newIndex = currentSlideIndex + 1 > 2 ? 2 : currentSlideIndex + 1;

                    if (slider !== null) {
                        slider.scrollLeft = slider.scrollLeft + slideWidth;
                        setCurrentSlideIndex(newIndex);
                        updateBulletColors();
                    }
                }
            }
        }
    };
    return (
        <SliderContainer>
            <Header>
                Гарячі пропозиції:
            </Header>
            <SliderBlock id="hot-slider">
                {isMobile ? (
                    <Slide className="hot-slide-slide">
                        {images?.image_mobile_1 ? (
                            <Img src={images.image_mobile_1} width={374} height={230} alt="" />
                        ) : (
                            <div>Изображение не найдено</div>
                        )}
                    </Slide>
                ) : (
                    <Slide className="hot-slide-slide">
                        {images?.image_desktop_1 ? (
                            <Img src={images.image_desktop_1} width={1204} height={520} alt="" />
                        ) : (
                            <div>Изображение не найдено</div>
                        )}
                    </Slide>
                )}
                {isMobile ? (
                    <Slide className="hot-slide-slide">
                        {images?.image_mobile_2 ? (
                            <Img src={images.image_mobile_2} width={374} height={230} alt="" />
                        ) : (
                            <div>Изображение не найдено</div>
                        )}
                    </Slide>
                ) : (
                    <Slide className="hot-slide-slide">
                        {images?.image_desktop_2 ? (
                            <Img src={images.image_desktop_2} width={1204} height={520} alt="" />
                        ) : (
                            <div>Изображение не найдено</div>
                        )}
                    </Slide>
                )}
                {isMobile ? (
                    <Slide className="hot-slide-slide">
                        {images?.image_mobile_3 ? (
                            <Img src={images.image_mobile_3} width={374} height={230} alt="" />
                        ) : (
                            <div>Изображение не найдено</div>
                        )}
                    </Slide>
                ) : (
                    <Slide className="hot-slide-slide">
                        {images?.image_desktop_3 ? (
                            <Img src={images.image_desktop_3} width={1204} height={520} alt="" />
                        ) : (
                            <div>Изображение не найдено</div>
                        )}
                    </Slide>
                )}
            </SliderBlock>
            <NavSlider>
                <NavArrow onClick={slideLeft}>
                    <Image src={'/img/Advertising/Slider/arrow-left.svg'} width={4} height={8} alt="" />
                </NavArrow>
                <BulletNav>
                    <Bullet className={currentSlideIndex === 0 ? 'bullett activee' : 'bullett'} />
                    <Bullet className={currentSlideIndex === 1 ? 'bullett activee' : 'bullett'} />
                    <Bullet className={currentSlideIndex === 2 ? 'bullett activee' : 'bullett'} />
                </BulletNav>
                <NavArrow onClick={slideRight}>
                    <Image src={'/img/Advertising/Slider/arrow-right.svg'} width={4} height={8} alt="" />
                </NavArrow>
            </NavSlider>
        </SliderContainer>
    )
}

export default HotSlider;