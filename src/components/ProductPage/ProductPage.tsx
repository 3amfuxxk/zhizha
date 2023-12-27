import React, { useState } from "react";
import styled from 'styled-components';
import LinkPath from "../LinkPath/LinkPath";
import Link from "next/link";
import Image from "next/image";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { Roboto } from "next/font/google";
import { selectSelectedProduct, setSelectedProduct } from "../../store/liquidSlice";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/slice';
import { selectCart } from '../../store/slice';
import { useEffect } from "react";

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
`
const ProductImage = styled.div`
    display: flex;
    width: 512px;
    height: 512px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
    overflow: hidden;
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
    /* justify-content: space-between; */
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
`
const ProductId = styled.p`
    margin-top: 12px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
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
`
const ProductPrice = styled.div`
    display: flex;
    margin-top: 23px;
    width: 100%;
    align-items: center;
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
`
const ImageWhole = styled.div`
    display: flex;
    width: 100%;
    height: 578px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px;
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
const FullData = styled.div`
    display: flex;
    width: 100%;
    height: 542px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 34px 29px 29px 29px;
    flex-direction: column;
`
const FullDataBlock = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
const DataValue = styled.p`
    color: rgba(255, 255, 255, 0.80);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`
const ValueBlock = styled.div`
    display: flex;
    height: auto;
    width: auto;
    gap: 18px;
    flex-direction: column;
`
const ValueName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`
const ValueRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
`
// DataName = Active

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

const ProductPage = () => {
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
        const filteredOptions = selectedProduct?.options.filter((item) => item.nico === selectedNico);
        const uniqueVolumes = Array.from(new Set(filteredOptions?.map((item) => item.volume)) || []);
        setUniqueVolumes(uniqueVolumes);
    };

    const filterNicoByVolume = (selectedVolume: number) => {
        const filteredOptions = selectedProduct?.options.filter((item) => item.volume === selectedVolume);
        const uniqueNicos = Array.from(new Set(filteredOptions?.map((item) => item.nico)) || []);
        setFilteredNicos(uniqueNicos);
    };

    const findIdByOptions = (selectedNico: number, selectedVolume: number) => {
        const selectedOptionID = selectedProduct?.options.find((item) => item.nico === selectedNico && item.volume === selectedVolume);
        return selectedOptionID?.id || null;
    };

    const id = findIdByOptions(selectedNico, selectedVolume) || 0;
    console.log(id);

    const findByID = (id: number) => {
        const selectedIndex = selectedProduct?.options.findIndex((item) => item.id === id);
        return selectedIndex !== -1 ? selectedIndex : null;
    };

    const index = findByID(id) || 0;
    console.log(index);

    const handleAddToCart = (quantity: number) => {
        if (selectedProduct) {
            const selectedOptions: ProductOption = selectedProduct.options[index];
            const selectedProductToAdd: AddToCartProduct = {
                ...selectedProduct,
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
                    <TextInactive>
                        Набори
                    </TextInactive>
                </Link>
                <Link href={'/'}>
                    <Active>
                        {selectedProduct?.title}
                    </Active>
                </Link>
            </LinkPath>
            <GeneralInfo>
                <ImageBlock>
                    <ProductImage>
                        <Image src={`${selectedProduct?.image}`} width={512} height={512} alt="" />
                    </ProductImage>
                </ImageBlock>
                <ProductInfo>
                    <ProductName>
                        {selectedProduct?.title}
                    </ProductName>
                    <ProductId>
                        Код товару: <SpanId>{selectedProduct?.code}</SpanId>
                    </ProductId>
                    <DescBlock>
                        {selectedProduct?.desc}
                    </DescBlock>
                    <ProductPrice>
                        <StartingPrice>
                        {((selectedProduct?.options[index].starting_price || 0) * totalQuantity).toFixed(2)}₴
                        </StartingPrice>
                        <SalePrice>
                            {((selectedProduct?.options[index].sale_price || 0) * totalQuantity).toFixed(2)}₴
                        </SalePrice>
                        {selectedProduct?.options[index].discount !== 0 && (
                            <Discount>
                                {selectedProduct?.options[index].discount}%
                            </Discount>
                        )}
                    </ProductPrice>
                    <CategoryText>
                        Міцність:
                    </CategoryText>
                    <Specs>
                        {Array.from(new Set(filteredNicos.length > 0 ? filteredNicos : selectedProduct?.options.map((item) => item.nico))).map((uniqueNico, index) => (
                            <BlockProps
                                key={index}
                                isSelected={selectedNico === uniqueNico}
                                onClick={() => {
                                    setSelectedNico(uniqueNico);
                                    filterVolumeByNico(uniqueNico);
                                }}
                            >
                                <Text>{uniqueNico / 10}%({uniqueNico}мг)</Text>
                            </BlockProps>
                        ))}
                    </Specs>
                    <CategoryText>
                        Об’єм
                    </CategoryText>
                    <Specs>
                        {Array.from(new Set(uniqueVolumes.length > 0 ? uniqueVolumes : selectedProduct?.options.map((item) => item.volume))).map((uniqueVolume, index) => (
                            <BlockProps
                                key={index}
                                isSelected={selectedVolume === uniqueVolume}
                                onClick={() => {
                                    setSelectedVolume(uniqueVolume);
                                    filterNicoByVolume(uniqueVolume);
                                }}
                            >
                                <Text>{uniqueVolume}мл</Text>
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
                    Опис товару:
                </DescHeader>
                <FullBlock className={roboto.className}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero neque sunt eos iusto nulla repudiandae voluptas sit autem suscipit et assumenda, vel beatae? Voluptatem ullam pariatur quidem vitae ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda temporibus dolor magnam id recusandae atque, vitae repellat. Laudantium et natus deleniti odio, non in excepturi, praesentium nemo aperiam porro quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum corporis fuga alias consequuntur quas iure pariatur impedit repudiandae nulla cumque ducimus perferendis est assumenda maiores dolore dolor, atque ratione nesciunt!
                </FullBlock>
            </DescWhole>
            <ImageWhole>
                <ImageFull>
                    <Image src={'/img/Card/rb.jpg'} width={1204} height={520} alt="" />
                </ImageFull>
            </ImageWhole>
            {/* <FullData>
                <DescHeader>
                    Характеристики {selectedProduct?.title}:
                </DescHeader>
                <FullDataBlock className={roboto.className}>
                    <ValueBlock>
                        <ValueRow>
                            <Active>
                                Лід
                            </Active>
                            <DataValue>
                                Так/ні
                            </DataValue>
                        </ValueRow>
                        <ValueRow>
                            <Active>
                                Вага
                            </Active>
                            <DataValue>
                                50 гр
                            </DataValue>
                        </ValueRow>
                    </ValueBlock>
                </FullDataBlock>
            </FullData> */}
        </ProductContainer>
    )
}

export default ProductPage;