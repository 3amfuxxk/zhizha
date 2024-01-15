import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import LinkPath from "@/components/LinkPath/LinkPath";
import Card from "@/components/Card/CardEN";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '@/store/liquidSlice';

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
    @media (max-width:430px) {
        font-size: 32px;
    }
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
const CardContainer = styled.div<{ maxHeight: number }>`
    display: grid;
    overflow: hidden;
    max-height: ${(props) => `${props.maxHeight}px`};
    transition: max-height 0.3s ease;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        ". . . ."
        ". . . .";
    @media (max-width:430px) {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr; 
        grid-template-areas: 
        ". ."
        ". ."
        ". ."
        ". .";
       gap: 10px;
    }
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


const LiquidBlock = () => {
    let defaultHeight = 1754;
    let increaseHeight = 1764;
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        defaultHeight = window.innerWidth <= 430 ? 1342 : 1754;
    }
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        const increaseHeight = window.innerWidth <= 430 ? 1352 : 1764;
    }

    const [maxHeight, setMaxHeight] = useState<number>(defaultHeight);

    const toggleExpanded = () => {
        setMaxHeight((prevHeight) => prevHeight + increaseHeight);
    };

    const [data, setData] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Product[]>('https://rainzhizha.com/api/v1/products/?lang=en');
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

    const dispatch = useDispatch();
    const handleSelectProduct = (selectedProductData: Product) => {
        dispatch(setSelectedProduct(selectedProductData));
    };

    return (
        <LiquidContainer>
            <NameBlock>
                <HeadText>
                    Kits
                </HeadText>
                <PodText>
                    Choose a set to suit your taste, each with its own unique flavour
                </PodText>
            </NameBlock>
            <ProductBlock>
                <LinkPath>
                    <Link href={"../en"} >
                        <TextInactive>
                            Home
                        </TextInactive>
                    </Link>
                    <Link href={"../en/catalog"} >
                        <TextInactive>
                            Catalogue
                        </TextInactive>
                    </Link>
                    <Link href={"../en/liquid"} >
                        <Active>
                            Kits
                        </Active>
                    </Link>
                </LinkPath>
                <CardContainer maxHeight={maxHeight}>
                    {data && data.length > 0 && data.map((product, index) => (
                        <Link key={index} href={{ pathname: '/en/product', query: { id: product.id } }} onClick={() => handleSelectProduct(product)}>
                            <Card
                                code={product.code}
                                desc={product.desc}
                                ice={product.ice}
                                categories={product.categories}
                                image={product.image}
                                title={product.title}
                                id={product.id}
                                options={product.options}
                            />
                        </Link>
                    ))}
                </CardContainer>
                <ButtonRow>
                    <ButtonMore onClick={toggleExpanded}>
                        <ButtonText>
                            More
                        </ButtonText>
                        <Image src={'/img/Card/svg/dots.svg'} width={16} height={4} alt="" style={{marginTop: "3px"}} />
                    </ButtonMore>
                </ButtonRow>
            </ProductBlock>
        </LiquidContainer>
    )
}

export default LiquidBlock;