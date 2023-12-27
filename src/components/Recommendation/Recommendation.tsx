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
    id: number;
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    nico: number;
    volume: number;
}

const Recommendation = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const [showProduct, setShowProduct] = useState<any>(null);
    const handleToAddToCart = (product: Product) => {
        setShowProduct(product);
    };

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
                <AddToCart product={showProduct}  />
                <Card
                    code={123123}
                    desc={'def desc'}
                    ice={true}
                    categories={["pod", "liquid"]}
                    image='/img/Card/rb.jpg'
                    options={[
                        {
                            id: 7,
                            volume: 20,
                            nico: 0,
                            starting_price: 342.97,
                            sale_price: 179.97,
                            discount: 47,
                            in_stock: true
                        },
                        {
                            id: 8,
                            volume: 20,
                            nico: 20,
                            starting_price: 433.45,
                            sale_price: 399.45,
                            discount: 7,
                            in_stock: true
                        },
                        {
                            id: 9,
                            volume: 20,
                            nico: 50,
                            starting_price: 681.93,
                            sale_price: 371.93,
                            discount: 45,
                            in_stock: true
                        },
                        {
                            id: 10,
                            volume: 30,
                            nico: 0,
                            starting_price: 332.94,
                            sale_price: 200.94,
                            discount: 39,
                            in_stock: false
                        },
                        {
                            id: 11,
                            volume: 30,
                            nico: 20,
                            starting_price: 302.11,
                            sale_price: 291.11,
                            discount: 3,
                            in_stock: false
                        },
                        {
                            id: 12,
                            volume: 30,
                            nico: 50,
                            starting_price: 970.74,
                            sale_price: 696.74,
                            discount: 28,
                            in_stock: false
                        },
                        {
                            id: 13,
                            volume: 40,
                            nico: 0,
                            starting_price: 808.26,
                            sale_price: 753.26,
                            discount: 6,
                            in_stock: false
                        },
                        {
                            id: 14,
                            volume: 40,
                            nico: 20,
                            starting_price: 490.94,
                            sale_price: 445.94,
                            discount: 9,
                            in_stock: true
                        },
                        {
                            id: 15,
                            volume: 40,
                            nico: 50,
                            starting_price: 897.27,
                            sale_price: 553.27,
                            discount: 38,
                            in_stock: true
                        },
                        {
                            id: 16,
                            volume: 50,
                            nico: 0,
                            starting_price: 434.21,
                            sale_price: 349.21,
                            discount: 19,
                            in_stock: true
                        },
                        {
                            id: 17,
                            volume: 50,
                            nico: 20,
                            starting_price: 165.39,
                            sale_price: 83.39,
                            discount: 49,
                            in_stock: true
                        },
                        {
                            id: 18,
                            volume: 50,
                            nico: 50,
                            starting_price: 788.56,
                            sale_price: 635.56,
                            discount: 19,
                            in_stock: true
                        },
                        {
                            id: 19,
                            volume: 50,
                            nico: 100,
                            starting_price: 788.56,
                            sale_price: 635.56,
                            discount: 19,
                            in_stock: true
                        }
                        
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
                            id: 31,
                            volume: 20,
                            nico: 0,
                            starting_price: 278.74,
                            sale_price: 255.74,
                            discount: 8,
                            in_stock: true
                        },
                        {
                            id: 32,
                            volume: 20,
                            nico: 20,
                            starting_price: 586.43,
                            sale_price: 309.43,
                            discount: 47,
                            in_stock: false
                        },
                        {
                            id: 33,
                            volume: 20,
                            nico: 50,
                            starting_price: 144.73,
                            sale_price: 107.73,
                            discount: 25,
                            in_stock: false
                        },
                        {
                            id: 34,
                            volume: 30,
                            nico: 0,
                            starting_price: 398.76,
                            sale_price: 236.76,
                            discount: 40,
                            in_stock: true
                        },
                        {
                            id: 35,
                            volume: 30,
                            nico: 20,
                            starting_price: 385.2,
                            sale_price: 224.2,
                            discount: 41,
                            in_stock: false
                        },
                        {
                            id: 36,
                            volume: 30,
                            nico: 50,
                            starting_price: 637.07,
                            sale_price: 455.07,
                            discount: 28,
                            in_stock: false
                        },
                        {
                            id: 37,
                            volume: 40,
                            nico: 0,
                            starting_price: 146.13,
                            sale_price: 80.13,
                            discount: 45,
                            in_stock: false
                        },
                        {
                            id: 38,
                            volume: 40,
                            nico: 20,
                            starting_price: 247.31,
                            sale_price: 150.31,
                            discount: 39,
                            in_stock: false
                        },
                        {
                            id: 39,
                            volume: 40,
                            nico: 50,
                            starting_price: 769.27,
                            sale_price: 543.27,
                            discount: 29,
                            in_stock: true
                        },
                        {
                            id: 40,
                            volume: 50,
                            nico: 0,
                            starting_price: 471.31,
                            sale_price: 287.31,
                            discount: 39,
                            in_stock: false
                        },
                        {
                            id: 41,
                            volume: 50,
                            nico: 20,
                            starting_price: 177.56,
                            sale_price: 138.56,
                            discount: 21,
                            in_stock: true
                        },
                        {
                            id: 42,
                            volume: 50,
                            nico: 50,
                            starting_price: 511.48,
                            sale_price: 333.48,
                            discount: 34,
                            in_stock: true
                        }
                        
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