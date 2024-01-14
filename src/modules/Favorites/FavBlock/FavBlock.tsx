import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import LinkPath from "../../../components/LinkPath/LinkPath";
import Link from "next/link";
import { useState, useEffect } from "react";
import { allLiquid, allDetails, allPods } from "../../../store/favs";
import { useSelector, useDispatch } from 'react-redux';
import Card from "../../../components/Card/Card";
import DetailCard from "../../../components/DetailCard/DetailCard";
import PodCard from "../../../components/PodCard/PodCard";
import { useCookies } from 'react-cookie';
import axios from "axios";

const roboto = Roboto({
    weight: ["300", "400"],
    subsets: ["cyrillic", "latin"],
})

const FavContainer = styled.div`
    display: flex;
    margin-top: 140px;
    flex-direction: column;
    width: 100%;
    height: auto;
`
const Header = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
`
const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-left: auto;
    margin-right: auto;
`
const UnderHeader = styled.p`
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
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
const Wishlist = styled.div`
    display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 10px 10px; 
  grid-template-areas: 
    ". . . ."
    ". . . .";
    width: 100%;
    margin-top: 18px;
`
interface favIDs {
    id: string;
}
//Liquid
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
//Pods
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
}

interface Chars {
    id: number;
    color: string;
}
//Details
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
    chars: Charss[];
}

interface Charss {
    key: string;
    value: string;
}
const FavBlock = () => {
    const favLiquid = useSelector(allLiquid);
    const favDetail = useSelector(allDetails);
    const favPod = useSelector(allPods);

    const [cookies] = useCookies(['favoriteProducts']);
    const favoriteProducts = cookies['favoriteProducts'];
    console.log('Избранные товары:', favoriteProducts);
    //Liquid
    const [liquidData, setLiquidData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (favoriteProducts && favoriteProducts.products && favoriteProducts.products.length > 0) {
                    const productIds = (favoriteProducts.products as favIDs[]).map(product => product.id);

                    const response = await axios.get<Product[]>('http://35.180.189.210/api/v1/products/', {
                        params: {
                            id: productIds.join(','),
                        },
                    });

                    const filteredProducts = response.data.filter(product => productIds.includes(product.id));
                    const modifiedData = filteredProducts.map(item => ({
                        ...item,
                        options: item.options.map(option => ({
                            ...option,
                            starting_price: Number(option.starting_price),
                            sale_price: Number(option.sale_price),
                        })),
                    }));

                    setLiquidData(modifiedData);
                }
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        if (cookies && cookies['favoriteProducts']) {
            fetchData();
        }
    }, [cookies, favoriteProducts]);
    console.log(liquidData);
    //Pod
    const [podData, setPodData] = useState<Pods[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (favoriteProducts && favoriteProducts.pods && favoriteProducts.pods.length > 0) {
                    const podIds = (favoriteProducts.pods as favIDs[]).map(pod => pod.id);

                    const response = await axios.get<Pods[]>('http://35.180.189.210/api/v1/pods/', {
                        params: {
                            id: podIds.join(','),
                        },
                    });

                    const filteredPods = response.data.filter(pod => podIds.includes(pod.id));
                    const modifiedData = filteredPods.map(item => ({
                        ...item,
                        chars: item.chars.map((char => ({
                            ...char,
                        })))
                    }));

                    setPodData(modifiedData);
                }
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        if (cookies && cookies['favoriteProducts']) {
            fetchData();
        }
    }, [cookies, favoriteProducts]);

    console.log(podData);

    //Details
    const [detailData, setDetailData] = useState<Details[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (favoriteProducts && favoriteProducts.details && favoriteProducts.details.length > 0) {
                    const detailIds = (favoriteProducts.details as favIDs[]).map(detail => detail.id);

                    const response = await axios.get<Details[]>('http://35.180.189.210/api/v1/details/', {
                        params: {
                            id: detailIds.join(','),
                        },
                    });

                    const filteredDetails = response.data.filter(detail => detailIds.includes(detail.id));
                    const modifiedData = filteredDetails.map(item => ({
                        ...item,
                        chars: item.chars.map((char => ({
                            ...char,
                        })))
                    }));

                    setDetailData(modifiedData);
                }
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        if (cookies && cookies['favoriteProducts']) {
            fetchData();
        }
    }, [cookies, favoriteProducts]);

    console.log(detailData);

    return (
        <FavContainer>
            <HeadContainer>
                <Header>
                    Список бажань
                </Header>
                <UnderHeader>
                    Добірка товарів, яким ви натискали вподобайку
                </UnderHeader>
            </HeadContainer>
            <LinkPath>
                <Link href={"../"} >
                    <TextInactive>
                        Головна
                    </TextInactive>
                </Link>
                <Link href={'/favorites'}>
                    <Active>
                        Вішліст
                    </Active>
                </Link>
            </LinkPath>
            <Wishlist>
                {liquidData?.map((liquid, index) => (
                    <Link key={index} href={{ pathname: '/product', query: { id: liquid.id } }} >
                        <Card
                            code={liquid.code}
                            desc={liquid.desc}
                            ice={liquid.ice}
                            categories={liquid.categories}
                            image={liquid.image}
                            title={liquid.title}
                            id={liquid.id}
                            options={liquid.options}
                        />
                    </Link>
                ))}
                {detailData?.map((detail, index) => (
                    <Link key={index} href={{ pathname: '/detailsproduct', query: { id: detail.id } }}>
                        <DetailCard
                            id={detail.id}
                            code={detail.code}
                            title={detail.title}
                            desc={detail.desc}
                            short_desc={detail.short_desc}
                            starting_price={detail.starting_price}
                            sale_price={detail.sale_price}
                            discount={detail.discount}
                            in_stock={detail.in_stock}
                            image={detail.image}
                            wide_image={detail.wide_image}
                            categories={detail.categories}
                            chars={detail.chars}
                        />
                    </Link>
                ))}
                {podData?.map((pod, index) => (
                        <Link key={index} href={{ pathname: '/podsproduct', query: { id: pod.id } }}>
                            <PodCard
                                id={pod.id}
                                code={pod.code}
                                title={pod.title}
                                desc={pod.desc}
                                short_desc={pod.short_desc}
                                starting_price={pod.starting_price}
                                sale_price={pod.sale_price}
                                discount={pod.discount}
                                in_stock={pod.in_stock}
                                // image={item.image}
                                image={'/img/Card/rb.jpg'}
                                wide_image={pod.wide_image}
                                categories={pod.categories}
                                chars={pod.chars}
                            />
                        </Link>
                ))}
            </Wishlist>
        </FavContainer>
    )
}

export default FavBlock;