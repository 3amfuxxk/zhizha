import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Image from "next/image";
import NavButton from "../NavButton/NavButton";
import Language from "../Language/LanguageEN";
import Link from "next/link";
import Counter from "../Counter/Counter";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slice';
import { selectCart, selectPods, selectDetails } from "../../store/slice";
import { removeFromCart, removePodFromCart, removeDetailFromCart } from '../../store/slice';
import Searchbar from "@/modules/Searchbar/SearchbarEN";
import Searchsvg from '../../../public/img/Header/search.svg';
import Closesvg from '../../../public/img/Header/close.svg';
import Logo from '../../../public/img/Logo/logo_ng.svg';

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
        gap: 10px;
    }
`
const NavBlock = styled.div`
    display: flex;
    gap: 12px;
    padding: 0px 180px;
    position: relative;
    @media (max-width: 430px) {
        padding: 0px;
        position: absolute;
        width: 78%;
    }
`
const Bar = styled.div`
    display: flex;
    position: relative;
    width: 297px;
    align-items: center;
    @media (max-width: 430px) {
        width: 100%;
    }
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
    user-select: none;
    transition: all 0.1s ease;
    @media (max-width: 430px) {
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
        left: -273%;
        width: 375px;
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
    cursor: pointer;
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
    @media (max-width: 430px) {
        gap:5px;
    }
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

const MenuMobile = styled.div`
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.90);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
`
const LikeNav = styled.div`
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

const Text = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFF;
    margin: 0px 27px 0px 60px;
`
const NavCont = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    margin-top: 200px;
    margin-left: 10px;
`
const RoundBlock = styled.div`
    display: flex;
    height: 100%;
    width: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 36px;
    background: #FFF;
    flex-shrink: 0;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.3s ease;
`
const CloseSvg = styled(Closesvg)`
    display: none;
`
const SearchSvg = styled(Searchsvg)`
    display: flex;
`

const NavPart = styled.div`
    width: auto;
    max-width: 160px;
    height: 50px;
    position: relative;
    display: flex;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 36px;
    border: 1px solid #292929;
    background: #141414;
    align-items: center;
    cursor: pointer;

    &:hover ${RoundBlock} {
        width: 100%;
    }
`

const EmptyCart = styled.div`
    display: flex;
    width: 100%;
    height: 330px;
    justify-content: center;
    align-items: center;
`
const EmptyText = styled.p`
    color: rgba(255, 255, 255, 0.30);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const BlurHeader = styled.div`
    display: none;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
`

const Header = () => {
    const cartProducts = useSelector(selectCart);

    const cartPods = useSelector(selectPods);

    const cartDetails = useSelector(selectDetails);

    const [cartOpen, setCart] = useState<boolean>(false);

    const toggleOpen = () => {
        setCart(!cartOpen);
        const blurHeader = document.getElementById('blur-header');
        if (blurHeader) {
            blurHeader.style.display = cartOpen ? 'none' : 'flex';
          }
    }


    const [productQuantities, setProductQuantities] = useState<{ [key: string]: number }>({});

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: newQuantity,
        }));
    };

    const handlePodQuantityChange = (charsId: number, newQuantity: number) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [charsId]: newQuantity,
        }));
    };

    const handleDetailQuantityChange = (detailId: string, newQuantity: number) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [detailId]: newQuantity,
        }));
    }

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

    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

    const [windowWidth, setWindowWidth] = useState<number>(0);

    if (typeof window !== 'undefined') {
        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            handleResize();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);
    }
    const showSearch = () => {
        if (typeof document !== 'undefined') {
            const searchBar = document.getElementById('search-bar');
            const searchSvg = document.getElementById('search-svg');
            const closeSvg = document.getElementById('close-svg');
            const searchButton = document.getElementById('search-button');
            const cartButton = document.getElementById('cart-button');
            const burger = document.getElementById('burger-menu');
            const cross = document.getElementById('cross-menu');
            if (searchBar && searchSvg && closeSvg && searchButton && cartButton && burger && cross) {
                if (!isSearchVisible) {
                    searchBar.style.top = '0px';
                    searchSvg.style.display = 'none';
                    closeSvg.style.display = 'flex';
                    if (windowWidth <= 430) {
                        searchBar.style.top = '-25px';
                        searchButton.style.marginLeft = 'auto';
                        cartButton.style.display = 'none';
                        burger.style.display = 'none';
                        cross.style.display = 'none';
                    }
                } else {
                    searchBar.style.top = '-100px';
                    searchSvg.style.display = 'flex';
                    closeSvg.style.display = 'none';
                    if (windowWidth <= 430) {
                        searchButton.style.marginLeft = '0';
                        cartButton.style.display = 'flex';
                        cross.style.display = 'flex';
                    }
                }
                setIsSearchVisible(prevState => !prevState);
            }
        }
    };

    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleRemovePod = (id: number) => {
        dispatch(removePodFromCart(id));
    }

    const handleRemoveDetail = (id: string) => {
        dispatch(removeDetailFromCart(id));
    }
    //detailfuncs
    const totalDetailCost = cartDetails.reduce((accumulator, detail) => {
        const detailCost = detail.starting_price * (productQuantities[detail.id] || detail.totalQuantity);
        return accumulator + detailCost;
    }, 0);

    const totalDetailSale = cartPods.reduce((accumulator, detail) => {
        if (detail.starting_price) {
            const detailSale: number = (detail.starting_price - detail.sale_price) * (productQuantities[detail.id] || detail.totalQuantity);
            return accumulator + detailSale;
        }
        return accumulator;
    }, 0);

    const totalCost = cartProducts.reduce((accumulator, product) => {
        const productCost = product.options.starting_price * (productQuantities[product.options.id] || product.totalQuantity);
        return accumulator + productCost;
    }, 0);

    const totalPodCost = cartPods.reduce((accumulator, pod) => {
        const podCost = pod.starting_price * (productQuantities[pod.chars.id] || pod.totalQuantity);
        return accumulator + podCost;
    }, 0);

    const totalPodSale = cartPods.reduce((accumulator, pod) => {
        if (pod.starting_price) {
            const productSale: number = (pod.starting_price - pod.sale_price) * (productQuantities[pod.chars.id] || pod.totalQuantity);
            return accumulator + productSale;
        }
        return accumulator;
    }, 0);

    const totalSale = cartProducts.reduce((accumulator, product) => {
        if (product.options.starting_price) {
            const productSale: number = (product.options.starting_price - product.options.sale_price) * (productQuantities[product.options.id] || product.totalQuantity);
            return accumulator + productSale;
        }
        return accumulator;
    }, 0);

    const orderCost = totalCost + totalPodCost - totalSale - totalPodSale + totalDetailCost - totalDetailSale;

    const [searchTerm, setSearchTerm] = useState('');

    const clearInput = () => {
        setSearchTerm('');
    };

    const isCartEmpty = !cartProducts.length && !cartPods.length && !cartDetails.length;

    return (
        <HeaderBlock>
            <BlurHeader id="blur-header" />
            <Link href={'/en'}>
                <Logo />
            </Link>
            <NavBlock>
                <Link href={{ pathname: '/en/catalog' }}>
                    <NavButton text={'Catalogue'} svgLink={'catalog.svg'} />
                </Link>
                <Link href={'/en/shipping'}>
                    <NavButton text={'Shipping'} svgLink={'shipping.svg'} />
                </Link>
                <span onClick={showContact}>
                    <NavButton text={'Contacts'} svgLink={'contact.svg'} />
                </span>
                <Searchbar />
            </NavBlock>
            <Bar>
                <Burger src={'/img/Header/burger.svg'} width={40} height={40} alt="" onClick={showMenu} id="burger-menu" />
                <Cross src={'/img/Header/cross.svg'} width={40} height={40} alt="" onClick={hideMenu} id="cross-menu" />
                <Search onClick={showSearch} id="search-button">
                    <SearchSvg id="search-svg" />
                    <CloseSvg id="close-svg" />
                </Search>
                <Language />
                {/* <Link href="/favorites"> */}
                <Link href="/">
                    <Like>
                        <Image src={'/img/Header/like.svg'} width={18} height={16} alt="" />
                    </Like>
                </Link>
                <CartContainer>
                    <Cart onClick={toggleOpen} id="cart-button">
                        <RoundCount>
                            <ItemsCount>
                                {cartProducts.length + cartPods.length + cartDetails.length}
                            </ItemsCount>
                        </RoundCount>
                        <Image src={'/img/Header/shop-bag.svg'} alt={''} width={18} height={21} />
                    </Cart>
                    <CartBlock cartOpen={cartOpen}>
                        <CartProducts>
                            <CartNav>
                                <CartHeader>
                                    Your Сart
                                </CartHeader>
                                <Img src={'/img/Header/close.svg'} width={22} height={22} alt="" onClick={toggleOpen} />
                            </CartNav>
                        </CartProducts>
                        {isCartEmpty ? (
                            <EmptyCart>
                                <EmptyText>
                                    Cart is empty
                                </EmptyText>
                            </EmptyCart>
                        ) : (
                            <Product id="product-block" className="scrol">
                                {cartProducts.map((product, index) => (
                                    <ProductCard key={index}>
                                        <ImageBlock>
                                            <Image src={product.image} width={114} height={114} alt="" />
                                        </ImageBlock>
                                        <ProductInfo>
                                            <ProductName>
                                                {product.title}
                                            </ProductName>
                                            <ProductID>
                                                Product code: <Span>{product.code}</Span>
                                            </ProductID>
                                            <PriceContainer>
                                                <PriceBlock>
                                                    <ProductPrice>
                                                        {(product.options.sale_price * (productQuantities[product.options.id] || product.totalQuantity)).toFixed(2)}₴
                                                    </ProductPrice>
                                                    <ProductSale>
                                                        {product.options.starting_price ? `${(product.options.starting_price * (productQuantities[product.options.id] || product.totalQuantity)).toFixed(2)}₴` : null}
                                                    </ProductSale>
                                                </PriceBlock>
                                                <FunctionBlock>
                                                    <Counter width={86} height={28} inpWidth={28} onQuantityChange={(newQuantity) =>
                                                        handleQuantityChange(product.options.id, newQuantity)
                                                    }
                                                        totalQuantity={productQuantities[product.options.id] || product.totalQuantity} />
                                                    <DeleteBlock onClick={() => handleRemoveFromCart(product.options.id)}>
                                                        <Image src={'/img/Header/trash.svg'} width={10} height={12} alt="" />
                                                    </DeleteBlock>
                                                </FunctionBlock>
                                            </PriceContainer>
                                        </ProductInfo>
                                    </ProductCard>
                                ))}
                                {cartPods.map((pod, index) => (
                                    <ProductCard key={index}>
                                        <ImageBlock>
                                            <Image src={pod.image} width={114} height={114} alt="" />
                                        </ImageBlock>
                                        <ProductInfo>
                                            <ProductName>
                                                {pod.title}
                                            </ProductName>
                                            <ProductID>
                                                Product code: <Span>{pod.code}</Span>
                                            </ProductID>
                                            <PriceContainer>
                                                <PriceBlock>
                                                    <ProductPrice>
                                                        {(pod.sale_price * (productQuantities[pod.chars.id] || pod.totalQuantity)).toFixed(2)}₴
                                                    </ProductPrice>
                                                    <ProductSale>
                                                        {pod.starting_price ? `${(pod.starting_price * (productQuantities[pod.chars.id] || pod.totalQuantity)).toFixed(2)}₴` : null}
                                                    </ProductSale>
                                                </PriceBlock>
                                                <FunctionBlock>
                                                    <Counter width={86} height={28} inpWidth={28} onQuantityChange={(newQuantity) =>
                                                        handlePodQuantityChange(pod.chars.id, newQuantity)
                                                    }
                                                        totalQuantity={productQuantities[pod.chars.id] || pod.totalQuantity} />
                                                    <DeleteBlock onClick={() => handleRemovePod(pod.chars.id)}>
                                                        <Image src={'/img/Header/trash.svg'} width={10} height={12} alt="" />
                                                    </DeleteBlock>
                                                </FunctionBlock>
                                            </PriceContainer>
                                        </ProductInfo>
                                    </ProductCard>
                                ))}
                                {cartDetails.map((detail, index) => (
                                    <ProductCard key={index}>
                                        <ImageBlock>
                                            <Image src={detail.image} width={114} height={114} alt="" />
                                        </ImageBlock>
                                        <ProductInfo>
                                            <ProductName>
                                                {detail.title}
                                            </ProductName>
                                            <ProductID>
                                                Product code: <Span>{detail.code}</Span>
                                            </ProductID>
                                            <PriceContainer>
                                                <PriceBlock>
                                                    <ProductPrice>
                                                        {(detail.sale_price * (productQuantities[detail.id] || detail.totalQuantity)).toFixed(2)}₴
                                                    </ProductPrice>
                                                    <ProductSale>
                                                        {detail.starting_price ? `${(detail.starting_price * (productQuantities[detail.id] || detail.totalQuantity)).toFixed(2)}₴` : null}
                                                    </ProductSale>
                                                </PriceBlock>
                                                <FunctionBlock>
                                                    <Counter width={86} height={28} inpWidth={28} onQuantityChange={(newQuantity) =>
                                                        handleDetailQuantityChange(detail.id, newQuantity)
                                                    }
                                                        totalQuantity={productQuantities[detail.id] || detail.totalQuantity} />
                                                    <DeleteBlock onClick={() => handleRemoveDetail(detail.id)}>
                                                        <Image src={'/img/Header/trash.svg'} width={10} height={12} alt="" />
                                                    </DeleteBlock>
                                                </FunctionBlock>
                                            </PriceContainer>
                                        </ProductInfo>
                                    </ProductCard>
                                ))}
                            </Product>
                        )}
                        <OrderInfo>
                            <PromoBlock>
                                <PromoInput placeholder="Enter your promo code" />
                                <SubmitPromo>
                                    Activate
                                </SubmitPromo>
                            </PromoBlock>
                            <OrderPrice>
                                <InfoPrice>
                                    <SummaryText>
                                        Order amount
                                    </SummaryText>
                                    <SpanBot />
                                    <SummaryText>
                                        {(totalCost + totalPodCost).toFixed(2)}₴
                                    </SummaryText>
                                </InfoPrice>
                                <InfoPrice>
                                    <SummaryText>
                                        Discounts
                                    </SummaryText>
                                    <SpanBot />
                                    <SummaryText>
                                        {(totalSale + totalPodSale).toFixed(2)}₴
                                    </SummaryText>
                                </InfoPrice>
                                <InfoPrice>
                                    <TotalPrice>
                                        To be paid
                                    </TotalPrice>
                                    <SpanBot />
                                    <TotalPrice>
                                        {(orderCost.toFixed(2))}₴
                                    </TotalPrice>
                                </InfoPrice>
                                {isCartEmpty ? (
                                    <SubmitOrder style={{ opacity: '0.5', cursor: 'default' }}>
                                        <OrderText>
                                            Place an order
                                        </OrderText>
                                    </SubmitOrder>
                                ) : (
                                    <Link href={'../en/order'}>
                                        <SubmitOrder>
                                            <OrderText>
                                                Place an order
                                            </OrderText>
                                        </SubmitOrder>
                                    </Link>
                                )}
                            </OrderPrice>
                        </OrderInfo>
                    </CartBlock>
                </CartContainer>
            </Bar>
        </HeaderBlock >
    )
}

export default Header;