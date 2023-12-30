import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import NavButton from "../../components/NavButton/NavButton";

const roboto = Roboto({
    weight: ["400"],
    style: ["normal"],
    subsets: ["cyrillic"],
})

const HomeBlock = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    margin-top: 202px;
    position: relative;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const RbBlock = styled.div`
    background-image: url('/img/Home/rb.png');
    background-size: contain;
    width: 326.829px;
    height: 326.829px;
    position: absolute;
    background-repeat: no-repeat;
    transform: rotate(18deg);
    right: 0;
    top: 0;
    opacity: 0.5;
    @media (max-width: 430px) {
        width: 159.22px;
        height: 159.22px;
        right: -70px;
        top: 150px;
    }
`

const RevoBlock = styled.div`
    background-image: url('/img/Home/revo.png');
    background-size: contain;
    width: 383.145px;
    height: 383.145px;
    position: absolute;
    background-repeat: no-repeat;
    transform: rotate(-30deg);
    left: 0;
    top: 0;
    opacity: 0.5;
    @media (max-width: 430px) {
        width: 186.655px;
        height: 186.655px;
        left: -70px;
        top: 160px;
    }
`

const StalkerBlock = styled.div`
    background-image: url('/img/Home/stalker.png');
    background-size: contain;
    width: 295.275px;
    height: 295.275px;
    position: absolute;
    background-repeat: no-repeat;
    transform: rotate(38deg);
    right: 300px;
    bottom: 0;
    opacity: 0.5;
    @media (max-width: 430px) {
        width: 143.847px;
        height: 143.847px;
        right: 0px;
        bottom: 100px;
    }
`

const WelcomeText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
    width: 685px;
    @media (max-width: 430px) {
        width: 98%;
        font-size: 32px;
    }
`

const SmallText = styled.p`
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    width: 494px;
    margin-top: 22px;
    @media (max-width: 430px) {
        width: 90%;
        margin-top: 24px;   
    }
`
const MenuMobile = styled.div`
    display: none;
    @media (max-width: 430px) {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 3;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.90);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
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
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    margin-top: 200px;
    margin-left: 10px;
`

const Button = styled.div`
    cursor: pointer;
    display: flex;
    width: 189px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 36px;
    background: #B6020D;
    justify-content: center;
    margin-top: 86px;
    @media (max-width: 430px) {
        margin-top: 123px;
    }
`
const ButtonText = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ButtonBlock = styled.div`
    display: flex;
    gap: 9px;
    align-items: center;
`

const HomeSection = () => {
    return (
        <HomeBlock>
            <MenuMobile id="menu-mobile">
                <NavCont>
                    <LikeNav>
                        <Image src={'/img/Header/like.svg'} width={18} height={16} alt="" />
                    </LikeNav>
                    <Link href={{ pathname: '/catalog' }}>
                        <NavPart>
                            <RoundBlock>
                                <Image src={`/img/Header/catalog.svg`} width={20} height={20} alt='Catalog' />
                            </RoundBlock>
                            <Text>
                                Каталог
                            </Text>
                        </NavPart>
                    </Link>
                    <NavPart>
                        <RoundBlock>
                            <Image src={`/img/Header/contact.svg`} width={20} height={20} alt='Catalog' />
                        </RoundBlock>
                        <Text>
                            Доставка
                        </Text>
                    </NavPart>
                    <NavPart>
                        <RoundBlock>
                            <Image src={`/img/Header/order.svg`} width={20} height={20} alt='Catalog' />
                        </RoundBlock>
                        <Text>
                            Контакти
                        </Text>
                    </NavPart>
                </NavCont>
            </MenuMobile>
            <RbBlock />
            <RevoBlock />
            <StalkerBlock />
            <WelcomeText>
                Відкрийте для себе світ унікальних рідин для вейпу!
            </WelcomeText>
            <SmallText className={roboto.className}>
                Та різних популярних, або гіковських девайсів та комплектуючих
            </SmallText>
            <Link href={"/catalog"} >
                <Button>
                    <ButtonBlock>
                        <ButtonText>
                            Каталог
                        </ButtonText>
                        <Image src={'/img/Home/arrow-right.svg'} width={9} height={15} alt='' />
                    </ButtonBlock>
                </Button>
            </Link>
        </HomeBlock>
    )
}

export default HomeSection;