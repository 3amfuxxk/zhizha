import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Link from 'next/link';
import Card from '../../modules/Review/Card/Card';

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
`

const Review = () => {
    return (
        <ReviewContainer>
            <Header>
                <HeaderText>
                    Відгуки:
                </HeaderText>
                <Link href={'/'}>
                    <Button text="Дивитися всі" />
                </Link>
            </Header>
            <CardContainer>
                <Card imgLink1='demo.jpg' imgLink2='demo.jpg' userLink='demo.jpg' userName='Роман' text='Отримав посилку, залишу відгук. Порадувала упаковка, смак теж добрий. Кількість та якість бомбічна. За таку ціну просто ідеал. Тепер братиму у вас, так вигідніше 😉' />
                <Card imgLink1='demo.jpg' imgLink2='demo.jpg' userLink='demo.jpg' userName='Роман' text='Отримав посилку, залишу відгук. Порадувала упаковка, смак теж добрий. Кількість та якість бомбічна. За таку ціну просто ідеал. Тепер братиму у вас, так вигідніше 😉' />
                <Card imgLink1='demo.jpg' imgLink2='demo.jpg' userLink='demo.jpg' userName='Роман' text='Отримав посилку, залишу відгук. Порадувала упаковка, смак теж добрий. Кількість та якість бомбічна. За таку ціну просто ідеал. Тепер братиму у вас, так вигідніше 😉' />
            </CardContainer>
        </ReviewContainer>
    )
}

export default Review;
