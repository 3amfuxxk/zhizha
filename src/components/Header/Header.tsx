import React, { useState } from "react";
import styled from 'styled-components';
import Image from "next/image";
import NavButton from "../NavButton/NavButton";
import Language from "../Language/Language";
import Link from "next/link";
import Counter from "../Counter/Counter";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slice';
import { selectCart } from "../../store/slice";
import { removeFromCart } from '../../store/slice';
import { Dispatch } from "@reduxjs/toolkit";

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
    @media (max-width: 430px) {
        justify-content: space-between;
        padding: 0px 10px 0px 18px;
    }
`
const NavBlock = styled.div`
    display: flex;
    gap: 12px;
    padding: 0px 180px;
    @media (max-width: 430px) {
        padding: 0px;
    }
`
const Bar = styled.div`
    display: flex;
    position: relative;
    width: 297px;
    align-items: center;
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
    @media (max-width: 430px) {
        display: none;
    }
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
    @media (max-width: 430px) {
        margin-left: 100px;
    }
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
    position: absolute;
    width: 459px;
    height: 648px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    display: ${props => props.cartOpen ? 'flex' : 'none'};
    flex-direction: column;
    padding: 29px;
    gap: 16px;
    right: 0;
    top: 80px;
    @media (max-width: 430px) {
        width: 410px;
        flex-shrink: 1;
        padding: 29px 17px;
    }
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
    @media (max-width: 430px) {
        right: 50px;
    }
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
    position: relative;
    overflow: hidden;
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
const OrderInfo = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 237px;
    flex-shrink: 0;
    border-radius: 0px 0px 18px 18px;
    border-top: 1px solid #282828;
    background: #181818;
    flex-direction: column;
    padding: 19px 29px 29px 29px;
`
const PromoBlock = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #292929;
    background: #141414;
    align-items: center;
`
const PromoInput = styled.input`
    display: flex;
    flex-shrink: 0;
    background: transparent;
    height: 100%;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    margin-left: 14px;
    color: #FFF;
    border: none;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`
const SubmitPromo = styled.div`
    display: flex;
    width: 116px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
`
const OrderPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 14px;
`
const InfoPrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const SummaryText = styled.p`
    color: rgba(255, 255, 255, 0.70);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    flex-shrink: 0;
`
const SpanBot = styled.span`
    display: flex;
    width: 100%;
    height: 1px;
    border-radius: 5px;
    opacity: 0.3;
    background: rgba(255, 255, 255, 0.70);
    margin: 14px 4px 0px 4px;
`
const TotalPrice = styled.div`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    flex-shrink: 0;
`
const SubmitOrder = styled.div`
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 42px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
const OrderText = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const FunctionBlock = styled.div`
    display: flex;
    width: auto;
    height: auto;
    align-items: center;
    gap: 11px;
`
const DeleteBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #B6020D;
    cursor: pointer;
`
const DeleteConfirm = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    background: #1F1E1F;
    align-items: center;
    justify-content: center;
`
const ConfirmBlock = styled.div`
    display: flex;
    width: 236px;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
`
const ConfirmOptions = styled.div`
    display: flex;
    gap: 7px;
    height: auto;
`
const NoBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #292929;
    background: #181818;
`
const Burger = styled(Image)`
    display: none;
    @media (max-width: 430px) {
        position: absolute;
        right: 0;
        display: flex;   
    }
`
const Cross = styled(Image)`
    display: none;
    @media (max-width: 430px) {
        position: absolute;
        right: 0;
        display: none;   
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
interface ProductOption {
    id: number,
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    nico: number;
    volume: number;
}


const Header = () => {
    const cartProducts = useSelector(selectCart);

    const [cartOpen, setCart] = useState<boolean>(false);

    const toggleOpen = () => {
        setCart(!cartOpen);
    }

    const [productQuantities, setProductQuantities] = useState<{ [key: string]: number }>({});

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: newQuantity,
        }));
    };

    const showMenu = () => {
        const showMenuCont = document.getElementById('menu-mobile');
        const burger = document.getElementById('burger-menu');
        const cross = document.getElementById('cross-menu');
        if (showMenuCont && burger && cross) {
            showMenuCont.style.display = 'flex';
            burger.style.display = 'none';
            cross.style.display = 'flex';
        }
    };
    const hideMenu = () => {
        const hideMenuCont = document.getElementById('menu-mobile');
        const burger = document.getElementById('burger-menu');
        const cross = document.getElementById('cross-menu');
        if (hideMenuCont && burger && cross) {
            hideMenuCont.style.display = 'none';
            burger.style.display = 'flex';
            cross.style.display = 'none';
        }
    }

    const showContact = () => {
        const contacts = document.getElementById('blur-back');
        if (contacts) {
            contacts.style.display = 'flex';
        }
    }

    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const totalCost = cartProducts.reduce((accumulator, product) => {
        const productCost = product.options.starting_price * (productQuantities[product.id] || product.totalQuantity);
        return accumulator + productCost;
    }, 0);

    const totalSale = cartProducts.reduce((accumulator, product) => {
        if (product.options.starting_price) {
            const productSale: number = (product.options.starting_price - product.options.sale_price) * (productQuantities[product.id] || product.totalQuantity);
            return accumulator + productSale;
        }
        return accumulator;
    }, 0);

    const orderCost = totalCost - totalSale;

    return (
        <HeaderBlock>
            <Link href={'/'}>
                <Img src={'/img/Logo/Logo.svg'} width={37} height={44.769} alt='Logo' />
            </Link>
            <NavBlock>
                <Link href={{ pathname: '/catalog' }}>
                    <NavButton text={'Каталог'} svgLink={'catalog.svg'} />
                </Link>
                <Link href={'/shipping'}>
                    <NavButton text={'Доставка'} svgLink={'contact.svg'} />
                </Link>
                <span onClick={showContact}>
                    <NavButton text={'Контакти'} svgLink={'order.svg'} />
                </span>
            </NavBlock>
            <Bar>
                <Burger src={'/img/Header/burger.svg'} width={40} height={40} alt="" onClick={showMenu} id="burger-menu" />
                <Cross src={'/img/Header/cross.svg'} width={40} height={40} alt="" onClick={hideMenu} id="cross-menu" />
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
                                {cartProducts.length}
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
                                <Img src={'/img/Header/close.svg'} width={22} height={22} alt="" onClick={toggleOpen} />
                            </CartNav>
                        </CartProducts>
                        <Product id="product-block" className="scrol">
                            {cartProducts.map((product) => (
                                <ProductCard key={product.id}>
                                    <ImageBlock>
                                        <Image src={product.image} width={114} height={114} alt="" />
                                    </ImageBlock>
                                    <ProductInfo>
                                        <ProductName>
                                            {product.title}
                                        </ProductName>
                                        <ProductID>
                                            Код товару: <Span>{product.code}</Span>
                                        </ProductID>
                                        <PriceContainer>
                                            <PriceBlock>
                                                <ProductPrice>
                                                    {(product.options.sale_price * (productQuantities[product.id] || product.totalQuantity)).toFixed(2)}₴
                                                </ProductPrice>
                                                <ProductSale>
                                                    {product.options.starting_price ? `${(product.options.starting_price * (productQuantities[product.id] || product.totalQuantity)).toFixed(2)}₴` : null}
                                                </ProductSale>
                                            </PriceBlock>
                                            <FunctionBlock>
                                                <Counter width={86} height={28} inpWidth={28} onQuantityChange={(newQuantity) =>
                                                    handleQuantityChange(product.id, newQuantity)
                                                }
                                                    totalQuantity={productQuantities[product.id] || product.totalQuantity} />
                                                <DeleteBlock onClick={() => handleRemoveFromCart(product.options.id)}>
                                                    <Image src={'/img/Header/trash.svg'} width={10} height={12} alt="" />
                                                </DeleteBlock>
                                            </FunctionBlock>
                                        </PriceContainer>
                                    </ProductInfo>
                                </ProductCard>
                            ))}
                        </Product>
                        <OrderInfo>
                            <PromoBlock>
                                <PromoInput placeholder="Введіть ваш промокод" />
                                <SubmitPromo>
                                    Активувати
                                </SubmitPromo>
                            </PromoBlock>
                            <OrderPrice>
                                <InfoPrice>
                                    <SummaryText>
                                        Сума замовлення
                                    </SummaryText>
                                    <SpanBot />
                                    <SummaryText>
                                        {(totalCost).toFixed(2)}₴
                                    </SummaryText>
                                </InfoPrice>
                                <InfoPrice>
                                    <SummaryText>
                                        Знижки
                                    </SummaryText>
                                    <SpanBot />
                                    <SummaryText>
                                        {(totalSale).toFixed(2)}₴
                                    </SummaryText>
                                </InfoPrice>
                                <InfoPrice>
                                    <TotalPrice>
                                        До сплати
                                    </TotalPrice>
                                    <SpanBot />
                                    <TotalPrice>
                                        {(orderCost.toFixed(2))}₴
                                    </TotalPrice>
                                </InfoPrice>
                                <Link href={'/order'}>
                                    <SubmitOrder>
                                        <OrderText>
                                            Оформити замовлення
                                        </OrderText>
                                    </SubmitOrder>
                                </Link>
                            </OrderPrice>
                        </OrderInfo>
                    </CartBlock>
                </CartContainer>
            </Bar>
        </HeaderBlock >
    )
}

export default Header;