import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import LinkPath from "../../../components/LinkPath/LinkPath";
import Card from "../../../components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const LiquidContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 140px;
    gap: 8px;
`
const NameBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 378px;
    margin: 0 auto;
`
const HeadText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
`
const PodText = styled.p`
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`
const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
`
const TextInactive = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const Active = styled.p`
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const CardContainer = styled.div<{ expanded: boolean }>`
    display: grid;
    overflow: hidden;
    max-height: ${(props) => (props.expanded ? '1754px' : '3518px')};
    transition: max-height 0.3s ease;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        ". . . ."
        ". . . ."; 
`
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

interface SelectedProduct {
    name: string;
    price: number;
    sale?: number;
    imgLink: string;
    id: string;
    strength: string[];
    size: string[];
    totalQuantity: number;
    selectedStrengthIndex: number;
    selectedSizeIndex: number;
}

interface CatalogBlockProps {
    cartItems: SelectedProduct[];
}

interface Product {
    id: string,
    title: string,
    desc: string,
    starting_price: number,
    sale_price: number,
    discount: number,
    volume: number,
    stock: number,
    ice: boolean,
    image: string,
    categories: string[],
}

const LiquidBlock = ({ cartItems }: CatalogBlockProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const [data, setData] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Product[]>('http://18.130.180.167/api/v1/products/');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        fetchData();
    }, []);

    const productCards = data ? data.map((product: Product) => ({
        id: product.id,
        sale: product.sale_price,
        discount: product.discount,
        imgLink: product.image,
        ice: product.ice,
        desc: product.desc,
        price: product.starting_price,
        name: product.title,
        categories: product.categories,
        onAddToCart: toggleExpanded,
        strength: ['5%(50мг)', '6.5%(62мг)'],
        size: ['30мл', '60мл'],
    })) : [];

    return (
        <LiquidContainer>
            <NameBlock>
                <HeadText>
                    Набори
                </HeadText>
                <PodText>
                    Підберіть набор на свій смак, кожен з котрих має свій унікальний смак
                </PodText>
            </NameBlock>
            <ProductBlock>
                <LinkPath>
                    <Link href={"../"} >
                        <TextInactive>
                            Головна
                        </TextInactive>
                    </Link>
                    <Link href={"/catalog"} >
                        <TextInactive>
                            Каталог
                        </TextInactive>
                    </Link>
                    <Link href={"/liquid"} >
                        <Active>
                            Набори
                        </Active>
                    </Link>
                </LinkPath>
                <CardContainer expanded={expanded}>
                    <Card imgLink='rb.jpg' price={333} name={'Рідина R@!N BULL (30/60мл)'} id={'1'} onAddToCart={toggleExpanded} strength={['5%(50мг)', '6.5%(62мг)']} size={['30мл', '60мл']} />
                    {productCards.length > 0 ? (
                        productCards.map((product) => (
                            <Link key={product.id} href={{ pathname: '/product', query: { cartItems: JSON.stringify(cartItems), productData: JSON.stringify(product) } }}>
                                <Card
                                    key={product.id}
                                    imgLink={'rb.jpg'}
                                    price={product.price}
                                    name={product.name}
                                    id={product.id}
                                    onAddToCart={product.onAddToCart}
                                    strength={product.strength}
                                    size={product.size}
                                    sale={product.sale}
                                />
                            </Link>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </CardContainer>
                <ButtonRow>
                    <ButtonMore onClick={toggleExpanded}>
                        <ButtonText>
                            Більше
                        </ButtonText>
                        <Image src={'/img/Card/svg/dots.svg'} width={16} height={4} alt="" />
                    </ButtonMore>
                </ButtonRow>
            </ProductBlock>
        </LiquidContainer>
    )
}

export default LiquidBlock;