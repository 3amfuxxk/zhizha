import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import LinkPath from "@/components/LinkPath/LinkPath";
import Link from "next/link";
import { useState, useEffect } from "react";
import { allLiquid, allDetails, allPods } from "@/store/favs";
import { useSelector, useDispatch } from 'react-redux';
import Card from "@/components/Card/CardEN";
import DetailCard from "@/components/DetailCard/DetailCardEN";
import PodCard from "@/components/PodCard/PodCardEN";
import CategoryCard from "@/components/category/CategoryCard/CategoryCardEN";
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
    gap: 8px;
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
    //Liquid
    const [liquidData, setLiquidData] = useState<Product[]>([]);
    // const [shouldUpdate, setShouldUpdate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (favoriteProducts && favoriteProducts.products && favoriteProducts.products.length > 0) {
                    const productIds = (favoriteProducts.products as favIDs[]).map(product => product.id);

                    const response = await axios.get<Product[]>('https://rainzhizha.com/api/v1/products/?lang=en', {
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
                } else {
                    setLiquidData([]);
                }

            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        if (cookies && cookies['favoriteProducts']) {
            fetchData();
        }
    }, [cookies, favoriteProducts]);
    //Pod
    const [podData, setPodData] = useState<Pods[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (favoriteProducts && favoriteProducts.pods && favoriteProducts.pods.length > 0) {
                    const podIds = (favoriteProducts.pods as favIDs[]).map(pod => pod.id);

                    const response = await axios.get<Pods[]>('https://rainzhizha.com/api/v1/pods/?lang=en', {
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
                } else {
                    setPodData([]);
                }

            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        if (cookies && cookies['favoriteProducts']) {
            fetchData();
        }
    }, [cookies, favoriteProducts]);

    //Details
    const [detailData, setDetailData] = useState<Details[]>([]);
    const [abstractsData, setAbstractsData] = useState<Details[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (favoriteProducts && favoriteProducts.details && favoriteProducts.details.length > 0) {
                    const detailIds = (favoriteProducts.details as favIDs[]).map(detail => detail.id);

                    // Запрос для товаров из 'https://rainzhizha.com/api/v1/details/'
                    const detailsResponse = await axios.get<Details[]>('https://rainzhizha.com/api/v1/details/?lang=en', {
                        params: {
                            id: detailIds.join(','),
                        },
                    });

                    // Запрос для товаров из 'https://rainzhizha.com/api/v1/abstracts/'
                    const abstractsResponse = await axios.get<Details[]>('https://rainzhizha.com/api/v1/abstracts/?lang=en', {
                        params: {
                            id: detailIds.join(','),
                        },
                    });

                    // Обработка данных для деталей
                    const filteredDetails = detailsResponse.data.filter(detail => detailIds.includes(detail.id));
                    const modifiedDetails = filteredDetails.map(item => ({
                        ...item,
                        chars: item.chars.map(char => ({
                            ...char,
                        })),
                    }));

                    // Обработка данных для абстрактов
                    const filteredAbstracts = abstractsResponse.data.filter(abstract => detailIds.includes(abstract.id));
                    const modifiedAbstracts = filteredAbstracts.map(item => ({
                        ...item,
                        chars: item.chars.map(char => ({
                            ...char,
                        })),
                    }));

                    // Устанавливаем данные в соответствующие стейты
                    setDetailData(modifiedDetails);
                    setAbstractsData(modifiedAbstracts);
                } else {
                    setDetailData([]);
                    setAbstractsData([]);
                }
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };

        if (cookies && cookies['favoriteProducts']) {
            fetchData();
        }
    }, [cookies, favoriteProducts]);

    return (
        <FavContainer>
            <HeadContainer>
                <Header>
                    Wishlist
                </Header>
                <UnderHeader>
                    A selection of products you&apos;ve liked
                </UnderHeader>
            </HeadContainer>
            <LinkPath>
                <Link href={"/en"} >
                    <TextInactive>
                        Home
                    </TextInactive>
                </Link>
                <Link href={'/en/favorites'}>
                    <Active>
                        Wishlist
                    </Active>
                </Link>
            </LinkPath>
            <Wishlist>
                {liquidData?.map((liquid, index) => (
                    <Link key={index} href={{ pathname: '/en/product', query: { id: liquid.id } }} >
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
                    <Link key={index} href={{ pathname: '/en/detailsproduct', query: { id: detail.id } }}>
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
                {abstractsData?.map((abstract, index) => (
                    <Link key={index} href={{pathname: '/en/goods', query: { id: abstract.id}}}>
                        <CategoryCard
                            id={abstract.id}
                            code={abstract.code}
                            title={abstract.title}
                            desc={abstract.desc}
                            short_desc={abstract.short_desc}
                            starting_price={abstract.starting_price}
                            sale_price={abstract.sale_price}
                            discount={abstract.discount}
                            in_stock={abstract.in_stock}
                            image={abstract.image}
                            wide_image={abstract.wide_image}
                            categories={abstract.categories}
                            chars={abstract.chars}
                        />
                    </Link>
                ))}
                {podData?.map((pod, index) => (
                    <Link key={index} href={{ pathname: '/en/podsproduct', query: { id: pod.id } }}>
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