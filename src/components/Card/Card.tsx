import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';

const CardContainer = styled.div`
    display: flex;
    width: 308px;
    height: 431px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #1F1E1F;
    padding: 15px 14px;
    flex-direction: column;
`
const ImgBlock = styled.div`
    display: flex;
    width: 280px;
    flex-shrink: 0;
    height: 280px;
    border-radius: 6px;
    overflow: hidden;
`
const NameBlock = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    width: 100%;
    margin-top: 10px;
`
const NameText = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const InfoBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`
const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
`
const PriceText = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1px;
`
const SaleText = styled.p`
    color: #8F8E8F;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1px;
    text-decoration: line-through;
`
const AddBlock = styled.div`
    display: flex;
    gap: 8px;
    width: auto;
    align-items: center;
`
const LikeBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #292929;
    background: #141414;
    cursor: pointer;
`

interface Product {
    name: string;
    price: number;
    sale?: number;
    imgLink: string;
    id: string;
    strength: string[];
    size: string[];
}

interface Props {
    name: string;
    price: number;
    sale?: number;
    imgLink: string;
    id: string;
    onAddToCart: (product: Product) => void;
    strength: string[];
    size: string[];
}

const Card = ({ name, price, sale, imgLink, id, onAddToCart, strength, size }: Props) => {

    const handleOpen = () => {
        const addContainer = document.getElementById('add-container');
        if (addContainer) {
            addContainer.style.display = 'flex';
        }
    };

    const handleAddToCart = () => {
        const product = { name, price, sale, imgLink, id, strength, size};
        onAddToCart(product);
        handleOpen();
    };

    return (
        <CardContainer>
            <ImgBlock>
                <Image src={`/img/Card/${imgLink}`} width={280} height={280} alt="" />
            </ImgBlock>
            <NameBlock>
                <NameText>
                    {name}
                </NameText>
            </NameBlock>
            <InfoBlock>
                <PriceBlock>
                    <PriceText>
                        {price}₴
                    </PriceText>
                    {sale != null && (
                        <SaleText>
                            {sale}₴
                        </SaleText>
                    )}
                </PriceBlock>
                <AddBlock>
                    <Button onClick={handleAddToCart} text={'В кошик'} >
                        <Image src={'/img/Card/svg/cart.svg'} width={13} height={16} alt="" />
                    </Button>
                    <LikeBlock>
                        <Image src={'/img/Card/svg/heart.svg'} width={16} height={13.995} alt="" />
                    </LikeBlock>
                </AddBlock>
            </InfoBlock>
        </CardContainer>
    )
}

export default Card;