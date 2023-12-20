import React, { useState } from "react";
import styled from 'styled-components';
import Image from "next/image";
import NavButton from "../NavButton/NavButton";
import Language from "../Language/Language";
import Link from "next/link";

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
const CartBlock = styled.div`
    width: 459px;
    height: 648px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    display: ${props => props.cartOpen ? 'flex' : 'none'};
    flex-direction: column;
`
const CartProducts = styled.div`
    display: flex;
    padding: 29px;
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

const Header = () => {
    const [cartOpen, setCart] = useState(false);

    const toggleOpen = () => {
        setCart(!cartOpen);
    }

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
                    </CartBlock>
                </CartContainer>
            </Bar>
        </HeaderBlock>
    )
}

export default Header;