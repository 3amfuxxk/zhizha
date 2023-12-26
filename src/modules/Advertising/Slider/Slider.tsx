import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { Roboto } from "next/font/google";

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
    overflow: hidden;
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
    gap: 8px;
    width: 100%;
    height: auto;
    margin-top: 21px;
`
const NicoName = styled.p`
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%; /* 15px */
`
const NicoOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    height: 68px;
    width: 100%;
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

                            </NicoOptions>
                        </NicoBlock>
                    </ProductInfo>
                </Card>
                <Card>

                </Card>
            </SliderBlock>
        </SliderContainer>
    )
}

export default Slider;