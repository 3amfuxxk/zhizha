import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../Card/Card';
import AddToCart from '../AddToCart/AddToCart';
// import { useSelectedProduct } from '../../context/SelectedProduct';

const RecContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 19px;
    margin-top: 50px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    align-items: center;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const SvgBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #FF0;
    background: rgba(255, 255, 0, 0.50);
`
const HeadText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const HeaderRight = styled.div`
    display: flex;
    gap: 8px;
    width: auto;
    align-items: center;
`
const LinkText = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
`
const CardContainer = styled.div<{ expanded: boolean }>`
    display: grid;
    overflow: hidden;
    max-height: ${(props) => (props.expanded ? '1754px' : '872px')};
    transition: max-height 0.3s ease;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        ". . . ."
        ". . . ."; 
`
// max-height: ${({ expanded }) => (expanded ? '1754px' : '872px')};
const ButtonRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
`
const ButtonMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 135px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    gap: 7px;
    margin: 0 auto;
    cursor: pointer;
`
const ButtonText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

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
interface ProductOption {
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    nico: number;
    volume: number;
}

// interface SelectedProduct {
//     id: string;
//     title: string;
//     code: number;
//     desc: string;
//     ice: boolean;
//     image: string;
//     categories: string[];
//     options: ProductOption;
//     totalQuantity: number;
//     selectedStrengthIndex: number;
//     selectedSizeIndex: number;
// }

// interface RecommendationProps {
//     onDataUpdate: (data: SelectedProduct) => void;
// }

// const Recommendation = ({ onDataUpdate }: RecommendationProps) => {

const Recommendation = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const [showProduct, setShowProduct] = useState<any>(null);
    const handleToAddToCart = (product: Product) => {
        setShowProduct(product);
    };

    // const [cartItems, setCartItems] = useState<SelectedProduct[]>([]);

    // const handleDataFromAddToCart = (data: SelectedProduct) => {
    //     const isProductInCart = cartItems.some(item => item.id === data.id);

    //     if (!isProductInCart) {
    //         setCartItems(prevCartItems => [...prevCartItems, data]);
    //         onDataUpdate(data);
    //     } else {
    //         console.log('Товар уже добавлен в корзину');
    //     }
    // };

    return (
        <RecContainer>
            <Header>
                <HeaderLeft>
                    <SvgBlock>
                        <Image src={'/img/Recommendation/svg/star.svg'} width={16} height={16} alt="" />
                    </SvgBlock>
                    <HeadText>
                        Ми рекомендуємо:
                    </HeadText>
                </HeaderLeft>
                <Link href="/catalog">
                    <HeaderRight>
                        <LinkText>
                            До каталогу
                        </LinkText>
                        <Image src={'/img/Recommendation/svg/arr-rg.svg'} width={14} height={10} alt="" />
                    </HeaderRight>
                </Link>
            </Header>
            <CardContainer expanded={expanded}>
            {/* <AddToCart selectedProduct={selectedProduct} onDataUpdate={handleDataFromAddToCart} /> */}
                <AddToCart product={showProduct}  />
                <Card
                    code={123123}
                    desc={'def desc'}
                    ice={true}
                    categories={["pod", "liquid"]}
                    image='/img/Card/rb.jpg'
                    options={[
                        {
                            starting_price: 100,
                            sale_price: 80,
                            discount: 20,
                            in_stock: true,
                            nico: 40,
                            volume: 100,
                        },
                        {
                            starting_price: 300,
                            sale_price: 270,
                            discount: 10,
                            in_stock: true,
                            nico: 60,
                            volume: 150,
                        },
                    ]}
                    title={'Рідина R@!N BULL (30/60мл)'}
                    id={'1'}
                    onAddToCart={handleToAddToCart}
                />
                <Card
                    code={323123}
                    desc={'def desc'}
                    ice={true}
                    categories={["pod", "liquid"]}
                    image='/img/Card/rb.jpg'
                    options={[
                        {
                            starting_price: 400,
                            sale_price: 300,
                            discount: 25,
                            in_stock: true,
                            nico: 30,
                            volume: 50,
                        },
                        {
                            starting_price: 250,
                            sale_price: 200,
                            discount: 20,
                            in_stock: true,
                            nico: 60,
                            volume: 100,
                        },
                    ]}
                    title={'Рідина R@!N BOOBS (15/45мл)'}
                    id={'2'}
                    onAddToCart={handleToAddToCart}
                />
            </CardContainer>
            <ButtonRow>
                <ButtonMore onClick={toggleExpanded}>
                    <ButtonText>
                        Більше
                    </ButtonText>
                    <Image src={'/img/Card/svg/dots.svg'} width={16} height={4} alt="" />
                </ButtonMore>
            </ButtonRow>
        </RecContainer>
    )
}

export default Recommendation;

{/* <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'3'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'4'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'5'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'6'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'7'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'8'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'1'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'2'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'3'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'4'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'5'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'6'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'7'} />
                <Card imgLink='rb.jpg' type={'liquid'} price={333} sale={120} name={'Рідина R@!N BULL (30/60мл)'} id={'8'} /> */}