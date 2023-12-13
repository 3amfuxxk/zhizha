import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import NavButton from "../NavButton/NavButton";
import BarComponent from "../BarComponent/BarComponent";
import Language from "../Language/Language";

const HeaderBlock = styled.div`
    position: fixed;
    border-bottom: 1px solid #1A1A1A;
    background: rgba(6, 6, 6, 0.70);
    backdrop-filter: blur(30px);
    width: 100%;
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 96px;
`

const NavBlock = styled.div`
    display: flex;
    gap: 12px;
    padding: 0px 180px;
`

const Bar = styled.div`
    display: flex;
    gap: 12px;
`

const Img = styled(Image)`
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

const Header = () => {
    return (
        <HeaderBlock>
            <Img src={'/img/Logo/Logo.svg'} width={37} height={44.769} alt='Logo' />
            <NavBlock>
                <NavButton text={'Каталог'} svgLink={'catalog.svg'} />
                <NavButton text={'Доставка'} svgLink={'contact.svg'} />
                <NavButton text={'Контакти'} svgLink={'order.svg'} />
            </NavBlock>
            <Bar>
                <BarComponent svgLink="search.svg" width={16} height={16} />
                <Language />
                <BarComponent svgLink="like.svg" width={18} height={16} />
                <Cart>
                    <RoundCount>
                        <ItemsCount>
                            0
                        </ItemsCount>
                    </RoundCount>
                    <Image src={'/img/Header/shop-bag.svg'} alt={''} width={18} height={21} />
                </Cart>
            </Bar>
        </HeaderBlock>
    )
}

export default Header;