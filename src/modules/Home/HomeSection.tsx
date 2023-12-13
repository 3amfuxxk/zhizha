import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

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
`

const WelcomeText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
    width: 685px;
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
            <RbBlock />
            <RevoBlock />
            <StalkerBlock />
            <WelcomeText>
                Відкрийте для себе світ унікальних рідин для вейпу!
            </WelcomeText>
            <SmallText className={roboto.className}>
                Та різних популярних, або гіковських девайсів та комплектуючих
            </SmallText>
            <Button>
                <ButtonBlock>
                    <ButtonText>
                        Каталог
                    </ButtonText>
                    <Image src={'/img/Home/arrow-right.svg'} width={9} height={15} alt='' />
                </ButtonBlock>
            </Button>
        </HomeBlock>
    )
}

export default HomeSection;