import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../Card/Card';
import AddToCart from '../AddToCart/AddToCart';
import axios from 'axios';
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
    @media (max-width: 430px) {
        font-size: 24px;
    }
`
const HeaderRight = styled.div`
    display: flex;
    gap: 8px;
    width: auto;
    align-items: center;
    @media (max-width: 430px) {
        margin-top: 4px;
    }
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
    @media (max-width: 430px) {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        ". ."
        ". .";
        max-height: ${(props) => (props.expanded ? '1332px' : '666px')};
    }
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

    const [data, setData] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Product[]>('http://35.180.189.210/api/v1/products/recommendations/');
                const modifiedData = response.data.map(item => ({
                    ...item,
                    options: item.options.map(option => ({
                        ...option,
                        starting_price: Number(option.starting_price),
                        sale_price: Number(option.sale_price),
                    })),
                }));
                setData(modifiedData);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        fetchData();
    }, []);

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
                <AddToCart product={showProduct} />
                {data && data.length > 0 && data.map((product, index) => (
                    <Card
                        key={index}
                        code={product.code}
                        desc={product.desc}
                        ice={product.ice}
                        categories={product.categories}
                        image={product.image}
                        title={product.title}
                        id={product.id}
                        options={product.options}
                        onAddToCart={handleToAddToCart}
                    />
                ))}

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