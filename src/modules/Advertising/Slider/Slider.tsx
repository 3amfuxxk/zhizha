import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { useState } from "react";
import { Roboto } from "next/font/google";
import Button from "../../../components/Button/Button";

const roboto = Roboto({
    weight: ["100", "300", "400"],
    subsets: ["cyrillic", "latin"],
    style: ["normal", "italic"],
})

const SliderContainer = styled.div`
    display: flex;
    width: 771px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px 29px 14px 29px;
    flex-direction: column;
`
const HeaderText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const SliderBlock = styled.div`
    display: flex;
    width: auto;
    height: 352px;
    flex-shrink: 0;
    margin-top: 17px;
    /* overflow: hidden; */
`
const Card = styled.div`
    display: flex;
    width: 713px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #1F1E1F;
    padding: 14px;
    gap: 17px;
`
const ImageBlock = styled.div`
    display: flex;
    width: 324px;
    height: 324px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
    overflow: hidden;
`
const ProductInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 8px 0px;
`
const ProductName = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const ShortDesc = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
`
const DescText = styled.p`
    color: rgba(255, 255, 255, 0.80);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`
const NicoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    height: auto;
    margin-top: 9px;
`
const NicoName = styled.p`
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    margin-left: 2px;
`
const NicoOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    max-height: 68px;
    width: 100%;
`
// interface BlockProps {
//     isSelected: boolean;
// }
const BlockProps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 32px;
    padding: 0px 13px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #292929;
    background-color: #141414;
    cursor: pointer;
    transition: all 0.3s ease;
`
const Text = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
`
const PriceBlock = styled.div`
    display: flex;
    margin-top: 22px;
    gap: 17px;
    width: 100%;
`
const StartingPrice = styled.p`
    color: #8F8E8F;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1.2px;
    text-decoration: line-through;
`
const SalePrice = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1.2px;
`
const FuncionBlock = styled.div`
    display: flex;
    width: 100%;
    gap: 9px;
    margin-top: 13px;
`
const FavBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #292929;
    background: #141414;
`
const FunctionBlock = styled.div`
    display: flex;
    margin-top: auto;
    width: 100%;
    flex-direction: column;
`
const NavSlider = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 9px;
    margin-top: 14px;
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
`

const Slider = () => {

    return (
        <SliderContainer>
            <HeaderText>
                Топ продажів цього тижня:
            </HeaderText>
            <SliderBlock>
                <Card>
                    <ImageBlock>
                        <Image src={'/img/Card/rb.jpg'} width={324} height={324} alt="" />
                    </ImageBlock>
                    <ProductInfo>
                        <ProductName>
                            The Product Name Should Be Here With Some Kind Of Specs
                        </ProductName>
                        <ShortDesc>
                            <DescText className={roboto.className}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde sapiente, cum labore maxime dolor et, velit itaque totam veritatis perspiciatis eos quos optio repellat voluptates cumque pariatur ad maiores!
                            </DescText>
                        </ShortDesc>
                        <NicoBlock>
                            <NicoName>
                                Міцність:
                            </NicoName>
                            <NicoOptions>
                                <BlockProps>
                                    <Text>0%(0мг)</Text>
                                </BlockProps>
                            </NicoOptions>
                        </NicoBlock>
                        <FunctionBlock>
                                <PriceBlock>
                                    <StartingPrice>
                                        350₴
                                    </StartingPrice>
                                    <SalePrice>
                                        300₴
                                    </SalePrice>
                                </PriceBlock>
                                <FuncionBlock>
                                    <Button text='В кошик' width={135} height={38}>
                                        <Image src={'/img/Advertising/Slider/cart.svg'} width={13} height={16} alt="" />
                                    </Button>
                                    <FavBlock>
                                        <Image src={'/img/Advertising/Slider/heart.svg'} width={16} height={13.955} alt="" />
                                    </FavBlock>
                                </FuncionBlock>
                            </FunctionBlock>
                    </ProductInfo>
                </Card>
                <Card>

                </Card>
            </SliderBlock>
            <NavSlider>
                <NavArrow>

                </NavArrow>
                <NavArrow>
                    
                </NavArrow>
            </NavSlider>
        </SliderContainer>
    )
}

export default Slider;