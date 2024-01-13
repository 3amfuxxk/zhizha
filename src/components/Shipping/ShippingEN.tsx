import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    weight: ["100", "300", "400"],
    subsets: ["cyrillic", "latin"],
    style: ["normal", "italic"],
})

const ShippingContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 44px;
    margin-top: 140px;
    align-items: center;
    @media (max-width: 430px) {
        gap: 22px;  
    }
`
const HeaderText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
    @media (max-width: 430px) {
        font-size: 32px;
    }
`
const ShippingBlock = styled.div`
    display: flex;
    width: 745px;
    height: auto;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px 26px;
    flex-direction: column;
    gap: 22px;
    @media (max-width: 430px) {
        width: 100%;
        padding: 18px;
    }
`
const SectName = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const OptList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-left: 5px;
`
const OptPart = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`
const Dot = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FFF;
    opacity: 0.8;
`
const Text = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    max-width: 86%;
    opacity: 0.8;
    @media (max-width: 430px) {
        max-width: 96%;   
    }
`
const UnText = styled.p`
    margin-left: 4px;
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    opacity: 0.9;
`
const TgBlock = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
    margin-top: 7px;
    @media (max-width: 430px) {
        flex-wrap: wrap;
    }
`
const TgLink = styled.div`
    width: auto;
    height: 34px;
    flex-shrink: 0;
    border-radius: 36px;
    border: 1px solid #292929;
    padding: 0px 14px;
    background: #141414;
    display: flex;
    gap: 4px;
    align-items: center;
`
const TgText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`

const Shipping = () => {
    return (
        <ShippingContainer>
            <HeaderText>
                Payment and delivery
            </HeaderText>
            <ShippingBlock>
                <Section>
                    <SectName>
                        We send the order:
                    </SectName>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                By Nova Poshta;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                By UkrPoshta;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Pickup (Zaporizhzhia);
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Shipping:
                    </SectName>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                In case of prepayment, dispatch on the day of order by way of invoice - 1-3 business days (Mon-Sat);
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Orders over UAH 150 are shipped by Nova Poshta without prepayment, while orders over UAH 50 are sent by prepayment;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Sending by UkrPoshta - only on condition of full prepayment
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Delivery cost:
                    </SectName>
                    <UnText>
                        Nova Poshta (1-3 days):
                    </UnText>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                70 UAH - delivery to the city;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                95 UAH - delivery to the village;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Text>
                                The cost of cash on delivery (i.e. postage) 20 UAH +2%
                            </Text>
                        </OptPart>
                    </OptList>
                    <UnText className={roboto.className}>
                        UkrPoshta (3-4 days):
                    </UnText>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                50 UAH - universal price
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Data for placing an order:
                    </SectName>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                FULL NAME;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Email address;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Phone number;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                            Telegram nickname;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                            Delivery address (region, city/village, post office/post office)
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                    Free delivery:
                    </SectName>
                    <OptList>
                        <OptPart>
                            <Dot />
                            <Text>
                            From 1000 UAH, when ordering through Nova Poshta;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                            From 500 UAH, when ordering via UkrPoshta
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Відгуки:
                    </SectName>
                    <TgBlock>
                        <a href="/">
                            <TgLink>
                                <Image src={'/img/Shipping/tg.svg'} width={16} height={16} alt="" />
                                <TgText>Reviews R@!N жижа</TgText>
                            </TgLink>
                        </a>
                        <a href="/">
                            <TgLink>
                                <Image src={'/img/Shipping/tg.svg'} width={16} height={16} alt="" />
                                <TgText>Chat “Парогенератор”</TgText>
                            </TgLink>
                        </a>
                    </TgBlock>
                </Section>
            </ShippingBlock>
        </ShippingContainer>
    )
}

export default Shipping;