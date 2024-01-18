import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addDetail } from '../../store/favs';
import { RootState } from '../../store/store';
import { useCookies } from 'react-cookie';
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
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #fff;
    }
`
const ImgBlock = styled.div`
    display: flex;
    width: 280px;
    flex-shrink: 0;
    height: 280px;
    border-radius: 6px;
    overflow: hidden;
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
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #fff;
    }
`
interface DetailID {
    id: string;
}

interface Details {
    id: string;
    title: string;
    code: number;
    desc: string;
    short_desc: string;
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    image: string;
    wide_image: string;
    categories: string[];
    chars: Chars[];
}

interface Chars {
    key: string;
    value: string;
}

const Card = ({ id, title, code, desc, short_desc, starting_price, sale_price, discount, in_stock, image, categories, chars, wide_image }: Details) => {

    const isMobile = window.innerWidth <= 430;

    const buttonProps = isMobile
        ? { width: 38, height: 38 }
        : { text: 'Add to cart', width: 135, height: 38 };

        const dispatch = useDispatch();
        const favsState = useSelector((state: RootState) => state.favs);
        const [cookies, setCookie] = useCookies(['favoriteProducts']);
        const favoriteProducts = cookies['favoriteProducts'];
        const handleAddToFavs = () => {
            const DetailToAdd: DetailID = {
                id,
            }
        
            let updatedDetails = [];
        
            // Проверяем наличие айди в массиве favoriteProducts.details
            if (favoriteProducts && favoriteProducts.details) {
                const existingIndex = favoriteProducts.details.findIndex(
                    (detail: DetailID) => detail.id === id
                );
        
                if (existingIndex !== -1) {
                    // Если айди уже есть в массиве, удаляем его
                    updatedDetails = favoriteProducts.details.filter(
                        (detail: DetailID) => detail.id !== id
                    );
                } else {
                    // Если айди отсутствует, добавляем его в массив
                    updatedDetails = [...favoriteProducts.details, DetailToAdd];
                }
            } else {
                // Если массив пуст или отсутствует, добавляем первый элемент
                updatedDetails = [DetailToAdd];
            }
        
            // Обновляем объект с обновленным массивом айди деталей
            const updatedFavs = {
                ...favoriteProducts,
                details: updatedDetails,
            };
        
            // Сохраняем обновленные данные в куки
            setCookie('favoriteProducts', JSON.stringify(updatedFavs), {
                path: '/',
                maxAge: 30 * 24 * 60 * 60,
            });
        
            console.log(DetailToAdd);
        }
    
        const handleHeartClick = (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            handleAddToFavs();
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
                        {sale_price}₴
                    </PriceText>
                    {starting_price > sale_price && (
                        <SaleText>
                            {starting_price}₴
                        </SaleText>
                    )}
                </PriceBlock>
                <AddBlock>
                    <Button {...buttonProps} >
                        <Image src={'/img/Card/svg/cart.svg'} width={13} height={16} alt="" />
                    </Button>
                    <LikeBlock onClick={handleHeartClick}> 
                        <Heart />
                    </LikeBlock>
                </AddBlock>
            </InfoBlock>
        </CardContainer>
    )
}

export default Card;