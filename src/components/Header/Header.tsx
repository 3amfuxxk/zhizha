import React, { useState } from "react";
import styled from 'styled-components';
import Image from "next/image";
import NavButton from "../NavButton/NavButton";
import Language from "../Language/Language";
import Link from "next/link";
// import { useSelectedProduct } from "../../context/SelectedProduct";
import Counter from "../Counter/Counter";

const HeaderBlock = styled.div`
    position: fixed;
    border-bottom: 1px solid #1A1A1A;
    background: rgba(6, 6, 6, 0.70);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    width: 100%;
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 96px;
    z-index: 5;
`
const NavBlock = styled.div`
    display: flex;
    gap: 12px;
    padding: 0px 180px;
`
const Bar = styled.div`
    display: flex;
    position: relative;
    width: 297px;
`
const Img = styled(Image)`
    cursor: pointer;
`
const RoundCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 26px;
    background: #FFF;
`
const ItemsCount = styled.p`
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Like = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    margin-left: 95px;
`
const Search = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`
const Cart = styled.div`
    display: flex;
    padding: 6px 5px;
    width: 90px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    gap: 14px;
    align-items: center;
    cursor: pointer;
    position: relative;
    margin-left: auto;
    user-select: none;
`
const CartBlock = styled.div<{ cartOpen: boolean }>`
    width: 459px;
    height: 648px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    display: ${props => props.cartOpen ? 'flex' : 'none'};
    flex-direction: column;
    padding: 29px;
    gap: 16px;
`
const CartProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const CartHeader = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const CartNav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const CartContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    gap: 8px;
    right: 0;
    z-index: 3;
`
const Product = styled.div`
    display: flex;
    width: 100%;
    overflow-y: scroll;
    flex-direction: column;
    gap: 8px;
    max-height: 340px;
    height: 340px;

    &::-webkit-scrollbar {
        width: 0.1px;
    }
`
const ProductCard = styled.div`
    display: flex;
    padding: 10px;
    gap: 8px;
    width: 100%;
    height: 134px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #1F1E1F;
`
const ImageBlock = styled.div`
    display: flex;
    height: 100%;
    aspect-ratio: 1 / 1;
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
    overflow: hidden;
`
const ProductInfo = styled.div`
    display: flex;
    padding: 5px 10px 5px 0px;
    flex-direction: column;
    flex: 1;
`
const ProductName = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const ProductID = styled.p`
    color: #FFF;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-top: 4px;
`
const Span = styled.span`
    color: rgba(255, 255, 255, 0.60);
`
const PriceContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
`
const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductPrice = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 0.7px;
`
const ProductSale = styled.p`
    color: #8F8E8F;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 0.7px;
    text-decoration: line-through;
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

interface HeaderProps {
    cartItems: SelectedProduct[];
}

const Header = ({ cartItems }: HeaderProps) => {
    const [cartOpen, setCart] = useState<boolean>(false);

    const toggleOpen = () => {
        setCart(!cartOpen);
    }

    const [totalQuantity, setTotalQuantity] = useState<number>(1);

    const handleQuantityChange = (newQuantity: number) => {
        setTotalQuantity(newQuantity);
    };

    return (
        <HeaderBlock>
            <Link href={"/"}>
                <Img src={'/img/Logo/Logo.svg'} width={37} height={44.769} alt='Logo' />
            </Link>
            <NavBlock>
                <Link href={"/catalog"} >
                    <NavButton text={'Каталог'} svgLink={'catalog.svg'} />
                </Link>
                <NavButton text={'Доставка'} svgLink={'contact.svg'} />
                <NavButton text={'Контакти'} svgLink={'order.svg'} />
            </NavBlock>
            <Bar>
                <Search>
                    <Image src={'/img/Header/search.svg'} width={16} height={16} alt="" />
                </Search>
                <Language />
                <Like>
                    <Image src={'/img/Header/like.svg'} width={18} height={16} alt="" />
                </Like>
                <CartContainer>
                    <Cart onClick={toggleOpen}>
                        <RoundCount>
                            <ItemsCount>
                                0
                            </ItemsCount>
                        </RoundCount>
                        <Image src={'/img/Header/shop-bag.svg'} alt={''} width={18} height={21} />
                    </Cart>
                    <CartBlock cartOpen={cartOpen}>
                        <CartProducts>
                            <CartNav>
                                <CartHeader>
                                    Ваш Кошик
                                </CartHeader>
                                <Img src={'/img/Header/close.svg'} width={22} height={22} alt="" />
                            </CartNav>
                        </CartProducts>
                        <Product id="product-block" className="scrol">
                            {cartItems.map((product, index) => (
                                <ProductCard key={index}>
                                    <ImageBlock>
                                        <Image src={`/img/Card/${product.imgLink}`} width={114} height={114} alt="" />
                                    </ImageBlock>
                                    <ProductInfo>
                                        <ProductName>
                                            {product.name}
                                        </ProductName>
                                        <ProductID>
                                            Код товару: <Span>{product.id}</Span>
                                        </ProductID>
                                        <PriceContainer>
                                            <PriceBlock>
                                                <ProductPrice>
                                                    {product.price * totalQuantity}₴
                                                </ProductPrice>
                                                <ProductSale>
                                                    {product.sale ? `${product.sale * totalQuantity}₴` : null}
                                                </ProductSale>
                                            </PriceBlock>
                                            <Counter width={86} height={28} inpWidth={28} onQuantityChange={handleQuantityChange} totalQuantity={totalQuantity} />
                                        </PriceContainer>
                                    </ProductInfo>
                                </ProductCard>
                            ))}
                        </Product>
                    </CartBlock>
                </CartContainer>
            </Bar>
        </HeaderBlock >
    )
}

export default Header;

{/* <ProductCard>
                                <ImageBlock>
                                    <Image src={`/img/Card/${selectedProduct?.imgLink}`} width={114} height={114} alt="" />
                                </ImageBlock>
                                <ProductInfo>
                                    <ProductName>
                                        {selectedProduct?.name}
                                    </ProductName>
                                    <ProductID>
                                        Код товару: <Span>{selectedProduct?.id}</Span>
                                    </ProductID>
                                    <PriceContainer>
                                        <PriceBlock>
                                            <ProductPrice>
                                                {selectedProduct?.price * totalQuantity}₴
                                            </ProductPrice>
                                            <ProductSale>
                                                {selectedProduct?.sale * totalQuantity}₴
                                            </ProductSale>
                                        </PriceBlock>
                                        <Counter width={86} height={28} inpWidth={28} onQuantityChange={handleQuantityChange} totalQuantity={totalQuantity} />
                                    </PriceContainer>
                                </ProductInfo>
                            </ProductCard> */}