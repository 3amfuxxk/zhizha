import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Link from 'next/link';
import Card from '../../modules/Review/Card/Card';
import axios from 'axios';

const ReviewContainer = styled.div`
    display: flex;
    width: 100%;
    height: 358px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    margin-top: 12px;
    padding: 34px 29px 29px 29px;
    flex-direction: column;
    @media (max-width: 430px) {
        height: 845px;
        flex-direction: column;
        padding: 19px 17px 17px 17px;
    }
`
const HeaderText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const CardContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 17px;
    @media (max-width: 430px) {
        flex-direction: column;
        justify-content: unset;
        gap: 11px;
    }
`
interface Reviews {
    id: number;
    author_name: string;
    author_photo: string;
    product_image1: string;
    product_image2: string;
    text: string;
}

const Review = () => {
    const [reviews, setReviews] = useState<Reviews[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://35.180.189.210/api/v1/reviews/`);
                const reviewsData = response.data as Reviews[];
                setReviews(reviewsData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setReviews(null);
            }
        };

        fetchProduct();
    }, []);

    console.log(reviews);
    return (
        <ReviewContainer>
            <Header>
                <HeaderText>
                    Відгуки:
                </HeaderText>
                {/* <Link href={'/'}>
                    <Button text="Дивитися всі" width={135} height={38} />
                </Link> */}
            </Header>
            <CardContainer>
                {reviews?.map((item, index) => (
                    <Card
                        key={index}
                        id={item.id}
                        imgLink1={item.product_image1}
                        imgLink2={item.product_image2}
                        userLink={item.author_photo}
                        userName={item.author_name}
                        text={item.text} />
                ))}
            </CardContainer>
        </ReviewContainer>
    )
}

export default Review;
