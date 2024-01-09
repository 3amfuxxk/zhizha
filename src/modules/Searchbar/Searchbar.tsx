import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from '../../../public/img/Header/search.svg';
import axios from 'axios';
import SearchItem from '../SearchItem/SearchItem';
import Link from 'next/link';
import Right from '../../../public/img/Header/right-sm.svg';

const SearchBlock = styled.div`
    display: flex;
    width: 528px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #292929;
    background: #141414;
    padding: 12px 0px;
    position: relative;
`
const SearchButton = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 108px;
    flex-shrink: 0;
    border-radius: 0px 12px 12px 0px;
    background: #B6020D;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const SrBut = styled.p`
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const MnBlock = styled.div`
    display: flex;
    gap: 11px;
    margin-left: 18px;
    align-items: center;
`
const StInp = styled.input`
    display: flex;
    height: 100%;
    width: 360px;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-items: center;
    &:focus {
        border: none;
    }
    &::placeholder {
        color: rgba(255, 255, 255, 0.50);
        padding-top: 3px;
    }
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
interface Pods {
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
    options: any[];
}

interface Chars {
    id: number;
    color: string;
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
    wide_card: string;
    categories: string[];
    chars: Charss[];
}

interface Charss {
    key: string;
    value: string;
}

const SearchWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: absolute;
    top: -100px;
    transition: all 0.3s ease;
    width: auto;
`
const ListProd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 100%;
    height: auto;
    max-height: 368px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #292929;
    background: #141414;
    padding: 14px;
    overflow: hidden;
`
const Long = styled.span`
    display: flex;
    width: 492px;
    height: 1px;
    flex-shrink: 0;
    border-radius: 5px;
    opacity: 0.3;
    background: rgba(255, 255, 255, 0.70);
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`
const ProductHolders = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 100%;
    height: auto;
    max-height: 305px;
    overflow: hidden;
`
const LookMore = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    cursor: pointer;
`
const TextMore = styled.div`
    color: #FFF;
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
`

const Searchbar = () => {
    const [liquids, setLiquid] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Product[]>('https://rainzhizha.com/api/v1/products/');
                const modifiedData = response.data.map(item => ({
                    ...item,
                    options: item.options.map(option => ({
                        ...option,
                        starting_price: Number(option.starting_price),
                        sale_price: Number(option.sale_price),
                    })),
                }));
                setLiquid(modifiedData);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        fetchData();
    }, []);

    const [pods, setPods] = useState<Pods[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/pods`);
                const podsData = response.data as Pods[];
                setPods(podsData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setPods(null);
            }
        };

        fetchProduct();
    }, []);

    const [details, setDetails] = useState<Details[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/details`);
                const detailsData = response.data as Details[];
                setDetails(detailsData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setDetails(null);
            }
        };

        fetchProduct();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');

    const [liquidResults, setLiquidResults] = useState<Product[]>([]);
    const [podResults, setPodResults] = useState<Pods[]>([]);
    const [detailResults, setDetailResults] = useState<Details[]>([]);

    const handleSearch = (event: any) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setLiquidResults([]);
            setPodResults([]);
            setDetailResults([]);
            return;
        }

        const liquidsResults = liquids?.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
        const podsResults = pods?.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
        const detailsResults = details?.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));

        setLiquidResults(liquidsResults || []);
        setPodResults(podsResults || []);
        setDetailResults(detailsResults || []);
    }
    const totalResultsCount = liquidResults.length + podResults.length + detailResults.length;

    useEffect(() => {
        const interval = setInterval(() => {
            const searchBar = document.getElementById('search-bar');

            if (searchBar) {
                const computedStyle = window.getComputedStyle(searchBar);
                const topValue = computedStyle.getPropertyValue('top');

                if (topValue !== '0px') {
                    setSearchTerm('');
                    setLiquidResults([]);
                    setPodResults([]);
                    setDetailResults([]);
                }
            }
        }, 1);

        return () => clearInterval(interval);
    }, []);


    return (
        <SearchWrap id="search-bar">
            <SearchBlock>
                <MnBlock>
                    <Search />
                    <StInp placeholder='Search through our shop' value={searchTerm} onChange={handleSearch} />
                </MnBlock>
                <SearchButton>
                    <SrBut>
                        Search
                    </SrBut>
                </SearchButton>
            </SearchBlock>
            {totalResultsCount > 0 && (
                <ListProd>
                    {(liquidResults.length > 0 || podResults.length > 0 || detailResults.length > 0) && (
                        <ProductHolders>
                            {liquidResults.map((liquid, index) => (
                                <Column key={index}>
                                    <Link key={index} href={{ pathname: '/product', query: { id: liquid.id } }} >
                                        <SearchItem
                                            img={liquid.image}
                                            code={liquid.code}
                                            price={liquid.options[0].sale_price}
                                            title={liquid.title}
                                        />
                                    </Link>
                                    <Long />
                                </Column>
                            ))}
                            {podResults.map((pod, index) => (
                                <Column key={index}>
                                    <Link key={index} href={{ pathname: '/podsproduct', query: { id: pod.id } }}>
                                        <SearchItem
                                            img={pod.image}
                                            code={pod.code}
                                            price={pod.sale_price}
                                            title={pod.title}
                                        />
                                    </Link>
                                    <Long />
                                </Column>
                            ))}
                            {detailResults.map((detail, index) => (
                                <Column key={index}>
                                    <Link key={index} href={{ pathname: '/detailsproduct', query: { id: detail.id } }}>
                                        <SearchItem
                                            img={detail.image}
                                            code={detail.code}
                                            price={detail.sale_price}
                                            title={detail.title}
                                        />
                                    </Link>
                                    <Long />
                                </Column>
                            ))}
                        </ProductHolders>
                    )}
                    {totalResultsCount !== undefined && totalResultsCount > 4 && (
                        <LookMore>
                            <TextMore>
                                Показати ще {totalResultsCount - 4} пошуків
                            </TextMore>
                            <Right />
                        </LookMore>
                    )}
                </ListProd>
            )}
        </SearchWrap>
    )
}

export default Searchbar;