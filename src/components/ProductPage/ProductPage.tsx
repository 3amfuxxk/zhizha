import React, { useState } from "react";
import styled from 'styled-components';
import LinkPath from "../LinkPath/LinkPath";
import Link from "next/link";
import Image from "next/image";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { Roboto } from "next/font/google";

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
    height: auto;
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
// DataName = Active


interface ProductData {
    id: string,
    sale: number,
    discount: number,
    imgLink: string,
    ice: boolean,
    desc: string,
    price: number,
    name: string,
    code: number,
    categories: string[],
    strength: string[],
    size: string[],
    inStock: boolean,
}

interface Product {
    selectedProduct: ProductData;
}


const ProductPage = ({ selectedProduct }: Product) => {
    console.log(selectedProduct);
    const [SelecteStrength, setSelecteStrength] = useState(0);
    const [SelectedSize, setSelectedSize] = useState(0);

    const [totalQuantity, setTotalQuantity] = useState<number>(1);

    const handleQuantityChange = (newQuantity: number) => {
        setTotalQuantity(newQuantity);
    };

    const handleStrengthClick = (index: number) => {
        setSelecteStrength(index);
    };
    const handleSizeClick = (index: number) => {
        setSelectedSize(index);
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
                        {selectedProduct.name}
                    </Active>
                </Link>
            </LinkPath>
            <GeneralInfo>
                <ImageBlock>
                    <ProductImage>
                        <Image src={'/img/Card/rb.jpg'} width={512} height={512} alt="" />
                    </ProductImage>
                </ImageBlock>
                <ProductInfo>
                    <ProductName>
                        {selectedProduct.name}
                    </ProductName>
                    <ProductId>
                        Код товару: <SpanId>{selectedProduct.id}</SpanId>
                    </ProductId>
                    <DescBlock>
                        {selectedProduct.desc}
                    </DescBlock>
                    <ProductPrice>
                        <StartingPrice>
                            {selectedProduct.price}
                        </StartingPrice>
                        <SalePrice>
                            {selectedProduct.sale}
                        </SalePrice>
                        <Discount>
                            {selectedProduct.discount}%
                        </Discount>
                    </ProductPrice>
                    <CategoryText>
                        Міцність:
                    </CategoryText>
                    <Specs>
                        {selectedProduct.strength.map((item, index) => (
                            <BlockProps
                                key={index}
                                isSelected={SelecteStrength === index}
                                onClick={() => handleStrengthClick(index)}>
                                <Text>{item}</Text>
                            </BlockProps>
                        ))}
                    </Specs>
                    <CategoryText>
                        Об’єм
                    </CategoryText>
                    <Specs>
                        {selectedProduct.size.map((item, index) => (
                            <BlockProps
                                key={index}
                                isSelected={SelectedSize === index}
                                onClick={() => handleSizeClick(index)}>
                                <Text>{item}</Text>
                            </BlockProps>
                        ))}
                    </Specs>
                    <NavBlock>
                        <Counter width={138} height={46} inpWidth={46} radius={8} onQuantityChange={handleQuantityChange} totalQuantity={totalQuantity} />
                        <Button text={'В кошик'} width={213} height={46}>
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
            <FullData>
                <DescHeader>
                    Характеристики (Name_Of_Product):
                </DescHeader>
                <FullDataBlock className={roboto.className}>

                </FullDataBlock>
            </FullData>
        </ProductContainer>
    )
}

export default ProductPage;