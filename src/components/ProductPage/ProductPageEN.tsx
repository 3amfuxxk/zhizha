import React, { useState } from "react";
import styled from 'styled-components';
import LinkPath from "../LinkPath/LinkPath";
import Link from "next/link";
import Image from "next/image";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { Roboto } from "next/font/google";
import { selectSelectedProduct, setSelectedProduct } from "@/store/liquidSlice";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/store/slice';
import { selectCart } from '@/store/slice';
import { useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin", "cyrillic", "greek"],
})

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 140px;
    gap: 12px;
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
const GeneralInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 620px;
    padding-top: 6px;
    @media (max-width: 430px) {
        flex-direction: column;
        justify-content: unset;
        gap: 12px;
        height: auto;
    }
`
const ImageBlock = styled.div`
    display: flex;
    padding: 14px 14px 20px 14px;
    width: 540px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    flex-direction: column;
    @media (max-width: 430px) {
        width: 100%;
        padding: 11px;
    }
`
const Img = styled(Image)`
    @media (max-width: 430px) {
        max-width: 100%;
        width: 388px;
        height: 388px;
    }
`
const ProductImage = styled.div`
    display: flex;
    width: 512px;
    height: 512px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
    overflow: hidden;
    @media (max-width: 430px) {
        width: 100%;
        flex-direction: column;
        height: auto;
        gap: 6px;
    }
`
const ProductInfo = styled.div`
    display: flex;
    padding: 28px;
    width: 710px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    flex-direction: column;
    @media (max-width: 430px) {
        width: 100%;
        height: auto;
        padding: 23px 17px 17px 17px;
    }
`
const ProductName = styled.div`
    display: -webkit-box;
    height: 84px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    @media (max-width: 430px) {
        height: auto;
        max-height: 84px;   
    }
`
const ProductId = styled.p`
    margin-top: 12px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    @media (max-width: 430px) {
        margin-top: 14px;   
    }
`
const SpanId = styled.span`
    color: rgba(255, 255, 255, 0.60);
`
const DescBlock = styled.div`
    display: -webkit-box;
    height: 84px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    margin-top: 12px;
    height: 42px;
    color: rgba(255, 255, 255, 0.80);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media (max-width: 430px) {
        height: auto;
        max-height: 84px;
        -webkit-line-clamp: 3;  
    }
`
const ProductPrice = styled.div`
    display: flex;
    margin-top: 23px;
    width: 100%;
    align-items: center;
    @media (max-width: 430px) {
        margin-top: 26px;
    }
`
const SalePrice = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1.2px;
    margin-left: 8px;
`
const StartingPrice = styled.p`
    color: #8F8E8F;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1.2px;
    text-decoration: line-through;
`
const Discount = styled.div`
    display: flex;
    width: 54px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #B6020D;
    margin-left: 16px;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 0.7px;
`
interface BlockProps {
    isSelected: boolean;
}
const BlockProps = styled.div<BlockProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 32px;
    padding: 0px 13px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.isSelected ? 'rgba(255, 255, 255, 0.70)' : '#292929')};
    background-color: ${(props) => (props.isSelected ? '#272727' : '#141414')};
    cursor: pointer;
    transition: all 0.3s ease;
    @media (max-width: 430px) {
        padding: 0px 16px;
        height: 40px;
    }
`
const Text = styled.p`
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
`
const Specs = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 6px;
    margin-top: 9px;
`
const CategoryText = styled.p`
    margin-top: 34px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    margin-left: 2px;
`
const NavBlock = styled.div`
    display: flex;
    width: 100%;
    gap: 9px;
    margin-top: auto;
    @media (max-width: 430px) {
        flex-direction: column;
        margin-top: 35px;
        gap: 29px;   
    }
`
const DescWhole = styled.div`
    display: flex;
    width: 100%;
    padding: 34px 29px 25px 29px;
    flex-direction: column;
    gap: 10px;
    height: 177px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    @media (max-width: 430px) {
        width: 100%;
        height: auto;
        padding: 22px 17px 17px 17px;   
    }
`
const DescHeader = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const FullBlock = styled.div`
    display: -webkit-box;
    width: 100%;
    margin-left: 4px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    color: rgba(255, 255, 255, 0.80);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media (max-width: 430px) {
        display: flex;   
    }
`
const ImageWhole = styled.div`
    display: flex;
    width: 100%;
    height: 578px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px;
    @media (max-width: 430px) {
        width: 100%;
        height: 264px;
        padding: 17px;   
    }
`
const ImageFull = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 12px;
    background: #1F1E1F;
    overflow: hidden;
`
const Imgfull = styled(Image)`
    @media (max-width: 430px) {
        width: 376px;
        height: 230px;
    }
`
const RecContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    gap: 17px;
    flex-direction: column;
    padding: 34px 0px;
    flex-shrink: 0;
    border-radius: 18px;
`
const RecBlock = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    @media (max-width: 430px) {
        display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 10px 10px; 
  grid-template-areas: 
    ". ."
    ". ."; 
        justify-content: unset;
    }
`

interface AddToCartProduct {
    id: string;
    title: string;
    code: number;
    desc: string;
    ice: boolean;
    image: string;
    categories: string[];
    options: ProductOption;
    totalQuantity: number;
}


interface Product {
    id: string;
    title: string;
    code: number;
    desc: string;
    short_desc: string;
    ice: boolean;
    image: string;
    wide_image: string;
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

interface GetId {
    idp: string;
}

const ProductPage = ({ idp }: GetId) => {

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/products/${idp}/?lang=en`);
                const productData = response.data as Product;
                setProduct(productData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setProduct(null);
            }
        };

        fetchProduct();
    }, [idp]);

    const [recs, setRecs] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/products/recommendations/${idp}/?lang=en`);
                const recsData = response.data as Product[];
                setRecs(recsData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setRecs(null);
            }
        };

        fetchProduct();
    }, [idp]);

    const [selectedNico, setSelectedNico] = useState<number>(-1);
    const [selectedVolume, setSelectedVolume] = useState<number>(-1);

    const [totalQuantity, setTotalQuantity] = useState<number>(1);

    const cartProducts = useSelector(selectCart);
    const dispatch = useDispatch();

    const handleQuantityChange = (newQuantity: number) => {
        setTotalQuantity(newQuantity);
    };

    const selectedProduct = useSelector(selectSelectedProduct);

    const [uniqueVolumes, setUniqueVolumes] = useState<number[]>([]);
    const [filteredNicos, setFilteredNicos] = useState<number[]>([]);

    const filterVolumeByNico = (selectedNico: number) => {
        const filteredOptions = product?.options.filter((item) => item.nico === selectedNico);
        const uniqueVolumes = Array.from(new Set(filteredOptions?.map((item) => item.volume)) || []);
        setUniqueVolumes(uniqueVolumes);
    };

    const filterNicoByVolume = (selectedVolume: number) => {
        const filteredOptions = product?.options.filter((item) => item.volume === selectedVolume);
        const uniqueNicos = Array.from(new Set(filteredOptions?.map((item) => item.nico)) || []);
        setFilteredNicos(uniqueNicos);
    };

    const findIdByOptions = (selectedNico: number, selectedVolume: number) => {
        const selectedOptionID = product?.options.find((item) => item.nico === selectedNico && item.volume === selectedVolume);
        return selectedOptionID?.id || null;
    };

    const id = findIdByOptions(selectedNico, selectedVolume) || 0;

    const findByID = (id: number) => {
        const selectedIndex = product?.options.findIndex((item) => item.id === id);
        return selectedIndex !== -1 ? selectedIndex : null;
    };

    const index = findByID(id) || 0;

    const handleAddToCart = (quantity: number) => {
        if (product) {
            const selectedOptions: ProductOption = product?.options[index];
            const selectedProductToAdd: AddToCartProduct = {
                ...product,
                totalQuantity: quantity,
                options: selectedOptions,
            };

            const isProductInCart = cartProducts.some(
                item =>
                    item.id === selectedProductToAdd.id &&
                    item.options.id === selectedProductToAdd.options.id
            );

            if (!isProductInCart) {
                dispatch(addToCart(selectedProductToAdd));
            } else {
                console.log('Этот товар уже есть в корзине');
            }
        }
    };

    return (
        <ProductContainer>
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
                    <TextInactive>
                        Kits
                    </TextInactive>
                </Link>
                <Link href={''}>
                    <Active>
                        {product?.title}
                    </Active>
                </Link>
            </LinkPath>
            <GeneralInfo>
                <ImageBlock>
                    <ProductImage>
                        <Img src={product?.image ? `${product.image}` : '/img/Card/rb.jpg'} width={512} height={512} alt="" />
                    </ProductImage>
                </ImageBlock>
                <ProductInfo>
                    <ProductName>
                        {product?.title}
                    </ProductName>
                    <ProductId>
                        Product code: <SpanId>{product?.code}</SpanId>
                    </ProductId>
                    <DescBlock>
                        {product?.short_desc}
                    </DescBlock>
                    <ProductPrice>
                        <StartingPrice>
                            {((product?.options[index].starting_price || 0) * totalQuantity).toFixed(2)}₴
                        </StartingPrice>
                        <SalePrice>
                            {((product?.options[index].sale_price || 0) * totalQuantity).toFixed(2)}₴
                        </SalePrice>
                        {product?.options[index].discount !== 0 && (
                            <Discount>
                                {product?.options[index].discount}%
                            </Discount>
                        )}
                    </ProductPrice>
                    <CategoryText>
                        Strength:
                    </CategoryText>
                    <Specs>
                        {Array.from(new Set(filteredNicos.length > 0 ? filteredNicos : product?.options.map((item) => item.nico))).map((uniqueNico, index) => (
                            <BlockProps
                                key={index}
                                isSelected={selectedNico === uniqueNico}
                                onClick={() => {
                                    setSelectedNico(uniqueNico);
                                    filterVolumeByNico(uniqueNico);
                                }}
                            >
                                <Text>{uniqueNico / 10}%({uniqueNico}mg)</Text>
                            </BlockProps>
                        ))}
                    </Specs>
                    <CategoryText>
                        Volume:
                    </CategoryText>
                    <Specs>
                        {Array.from(new Set(uniqueVolumes.length > 0 ? uniqueVolumes : product?.options.map((item) => item.volume))).map((uniqueVolume, index) => (
                            <BlockProps
                                key={index}
                                isSelected={selectedVolume === uniqueVolume}
                                onClick={() => {
                                    setSelectedVolume(uniqueVolume);
                                    filterNicoByVolume(uniqueVolume);
                                }}
                            >
                                <Text>{uniqueVolume}ml</Text>
                            </BlockProps>
                        ))}
                    </Specs>
                    <NavBlock>
                        <Counter width={138} height={46} inpWidth={46} onQuantityChange={handleQuantityChange} totalQuantity={totalQuantity} />
                        <Button text={'В кошик'} width={213} height={46} onClick={() => handleAddToCart(totalQuantity)}>
                            <Image src={'/img/Card/svg/cart.svg'} width={13} height={16} alt="" />
                        </Button>
                    </NavBlock>
                </ProductInfo>
            </GeneralInfo>
            <DescWhole>
                <DescHeader>
                    Product description:
                </DescHeader>
                <FullBlock className={roboto.className}>
                    {product?.desc}
                </FullBlock>
            </DescWhole>
            <ImageWhole>
                <ImageFull>
                    <Imgfull src={product?.wide_image ? `${product.wide_image}` : '/img/Card/rb.jpg'} width={1204} height={520} alt="" />
                </ImageFull>
            </ImageWhole>
            <RecContainer>
                <DescHeader>
                    Similar products
                </DescHeader>
                <RecBlock>
                    {recs?.map((item, index) => (
                        <Link key={index} href={{ pathname: '../en/product', query: { id: item.id } }}>
                            <Card
                                code={item.code}
                                desc={item.desc}
                                ice={item.ice}
                                categories={item.categories}
                                image={item.image}
                                title={item.title}
                                id={item.id}
                                options={item.options}
                            />
                        </Link>
                    ))}
                </RecBlock>
            </RecContainer>
        </ProductContainer>
    )
}

export default ProductPage;