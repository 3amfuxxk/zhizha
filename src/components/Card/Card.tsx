import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addLiquid } from '../../store/favs';
import { useCookies } from 'react-cookie';
import { RootState } from '../../store/store';
import Heart from '../../../public/img/Card/svg/heart.svg';

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
    @media (max-width: 430px) {
        width: 100%;
        height: 328px;
        padding: 9px;
    }
`
const ImgBlock = styled.div`
    display: flex;
    width: 280px;
    flex-shrink: 0;
    height: 280px;
    border-radius: 6px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: 430px) {
        width: 100%;
        height: 182px;
    }
`
const Img = styled(Image)`
    @media (max-width: 430px) {
        width: 300px;
        max-width: 100%;
        height: 182px;
    }
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
    @media (max-width: 430px) {
        font-size: 14px;
    }
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
    @media (max-width: 430px) {
        font-size: 17px;
    }
`
const SaleText = styled.p`
    color: #8F8E8F;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1px;
    text-decoration: line-through;
    @media (max-width: 430px) {
        font-size: 17px;   
    }
`
const AddBlock = styled.div`
    display: flex;
    gap: 8px;
    width: auto;
    align-items: center;
    @media (max-width: 400px) {
        gap: 1px !important;
    }
    @media (max-width: 430px) {
        gap: 3px;
    }
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
interface LiquidID {
    id: string;
}

interface Product {
    id: string;
    title: string;
    code: number;
    desc: string;
    ice: boolean;
    image: string;
    categories: string[];
    options: ProductOption[];
}

interface Props {
    id: string;
    title: string;
    code: number;
    desc: string;
    ice: boolean;
    image: string;
    categories: string[];
    options: ProductOption[];
    onAddToCart?: (product: Product) => void;
}

interface ProductOption {
    id: number;
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    nico: number;
    volume: number;
}

const Card = ({ id, title, code, desc, ice, image, categories, options, onAddToCart }: Props) => {

    const handleOpen = () => {
        const addContainer = document.getElementById('add-container');
        if (addContainer) {
            addContainer.style.display = 'flex';
        }
    };

    const handleAddToCart = () => {
        const product = { id, title, code, desc, ice, image, categories, options };
        if (onAddToCart) {
            onAddToCart(product);
        }
        handleOpen();
    };

    const isMobile = window.innerWidth <= 430;

    const buttonProps = isMobile
        ? { width: 38, height: 38 }
        : { text: 'В кошик', width: 135, height: 38 };
        

    const favsState = useSelector((state: RootState) => state.favs);
    const [cookies, setCookie] = useCookies(['favoriteProducts']);
    const favoriteProducts = cookies['favoriteProducts'];
    const dispatch = useDispatch();
    const handleAddToFavs = () => {
        const liquidToAdd: LiquidID = {
            id,
        }
    
        let updatedProducts = [];
    
        // Проверяем наличие айди в массиве favoriteProducts.products
        if (favoriteProducts && favoriteProducts.products) {
            const existingIndex = favoriteProducts.products.findIndex(
                (product: LiquidID) => product.id === id
            );
    
            if (existingIndex !== -1) {
                // Если айди уже есть в массиве, удаляем его
                updatedProducts = favoriteProducts.products.filter(
                    (product: LiquidID) => product.id !== id
                );
            } else {
                // Если айди отсутствует, добавляем его в массив
                updatedProducts = [...favoriteProducts.products, liquidToAdd];
            }
        } else {
            // Если массив пуст или отсутствует, добавляем первый элемент
            updatedProducts = [liquidToAdd];
        }
    
        // Обновляем объект с обновленным массивом айди
        const updatedFavs = {
            ...favoriteProducts,
            products: updatedProducts,
        };
    
        // Сохраняем обновленные данные в куки
        setCookie('favoriteProducts', JSON.stringify(updatedFavs), {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        });
    
        console.log(liquidToAdd);
    }

    return (
        <CardContainer>
            <ImgBlock>
                <Img src={image} width={280} height={280} alt="" />
            </ImgBlock>
            <NameBlock>
                <NameText>
                    {title}
                </NameText>
            </NameBlock>
            <InfoBlock>
                <PriceBlock>
                    <PriceText>
                        {options[0].sale_price}₴
                    </PriceText>
                    {options[0].starting_price > options[0].sale_price && (
                        <SaleText>
                            {options[0].starting_price}₴
                        </SaleText>
                    )}
                </PriceBlock>
                <AddBlock>
                    <Button onClick={handleAddToCart} {...buttonProps} >
                        <Image src={'/img/Card/svg/cart.svg'} width={13} height={16} alt="" />
                    </Button>
                    <LikeBlock onClick={handleAddToFavs}>
                        <Heart />
                    </LikeBlock>
                </AddBlock>
            </InfoBlock>
        </CardContainer>
    )
}

export default Card;