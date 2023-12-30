import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const roboto = Roboto({
    weight: ["100", "300", "400", "500"],
    subsets: ["cyrillic", "latin"],
    style: ["normal", "italic"],
})
const ConfirmationContainer = styled.div<Confirm>`
    display: ${(props) => props.isVisible ? "flex" : "none"};
    flex-direction: column;
    width: 570px;
    height: 633px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #181818;
    padding: 29px;
    align-items: center;
    @media (max-width:430px) {
        width: 100%;
        height: 650px;
        padding: 15px;
    }
`
const TickBlock = styled.div`
    display: flex;
    margin-top: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    background: #9BE400;
    border-radius: 50%;
`
const OrderText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-top: 31px;
    @media (max-width:430px) {
        font-size: 24px;   
    }
`
const SmallText = styled.p`
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
    width: 401px;
    @media (max-width:430px) {
        font-size: 14px;   
        width: 98%;
    }
`
const OpsText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-top: 31px;
`
const OpsBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    margin-top: 10px;
`
const ContactText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
`
const TelegramLink = styled.div`
    margin-top: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 145px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 36px;
    border: 1px solid #292929;
    background: #141414;
`
const Span = styled.span`
    color: rgba(255, 255, 255, 0.70);
    font-weight: 400;
`
const TgText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`
const HomeLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 192px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #B6020D;
    margin-top: 53px;
`
const HomeText = styled.p`
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`
interface Confirm {
    isVisible: boolean;
}

const ConfirmationWindow = ({isVisible}: Confirm) => {
    return (
        <ConfirmationContainer isVisible={isVisible}>
            <TickBlock>
                <Image src={'/img/Order/tick.svg'} width={41} height={35} alt="" />
            </TickBlock>
            <OrderText>
                Ваше замовлення оформлене
            </OrderText>
            <SmallText className={roboto.className}>
                Ваше замовлення прийнято, очікуйте повідомлення від оператора
            </SmallText>
            <OpsText>
                Наші оператори:
            </OpsText>
            <OpsBlock>
                <ContactText className={roboto.className}>
                    Viber: <Span>+380 (44) 444 4444</Span>
                </ContactText>
                <ContactText className={roboto.className}>
                    Telegram: <Span>@nickname</Span>
                </ContactText>
            </OpsBlock>
            <Link href="/">
                <TelegramLink>
                    <Image src={'/img/Order/tg.svg'} width={16} height={16} alt="" />
                    <TgText>
                        Наш телеграм
                    </TgText>
                </TelegramLink>
            </Link>
            <Link href="/">
                <HomeLink>
                    <HomeText>
                        На головну
                    </HomeText>
                </HomeLink>
            </Link>
        </ConfirmationContainer>
    )
}

export default ConfirmationWindow;