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
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #fff;
    }
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
                Оплата і доставка
            </HeaderText>
            <ShippingBlock>
                <Section>
                    <SectName>
                        Ми відправляємо замовлення:
                    </SectName>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                Новою Поштою;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                УкрПоштою;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Самовивіз (м. Запоріжжя);
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Відправка:
                    </SectName>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                За передоплати відправка в день замовлення Накладною - 1-3 робочі дні (пн-сб);
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Відправка Новою поштою відбувається без передоплати, якщо замовлення від 150 грн - передоплата 50 грн;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Відправка УкрПоштою - тільки за умови повної передоплати
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Вартість доставки:
                    </SectName>
                    <UnText>
                        Нова Пошта (1-3 дні):
                    </UnText>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                70 грн - доставка в місто;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                95 грн - доставка в село;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Text>
                                Вартість післяоплати (тобто комісія пошти) 20грн +2%
                            </Text>
                        </OptPart>
                    </OptList>
                    <UnText className={roboto.className}>
                        УкрПошта (3-4 дні):
                    </UnText>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                50 грн - універсальна ціна
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Данні для оформлення замовлення:
                    </SectName>
                    <OptList className={roboto.className}>
                        <OptPart>
                            <Dot />
                            <Text>
                                П.І.Б.;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Адрес електронної пошти;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Номер телефону;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Телеграм нікнейм;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Адреса доставки (область, місто/село, відділення пошти/поштомат)
                            </Text>
                        </OptPart>
                    </OptList>
                </Section>
                <Section>
                    <SectName>
                        Безкоштовна доставка:
                    </SectName>
                    <OptList>
                        <OptPart>
                            <Dot />
                            <Text>
                                Від 1000грн, при замовленні через Нову Пошту;
                            </Text>
                        </OptPart>
                        <OptPart>
                            <Dot />
                            <Text>
                                Від 500грн, при замовленні через УкрПошту
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
                                <TgText>Відгуки R@!N жижа</TgText>
                            </TgLink>
                        </a>
                        <a href="/">
                            <TgLink>
                                <Image src={'/img/Shipping/tg.svg'} width={16} height={16} alt="" />
                                <TgText>Чат “Парогенератор”</TgText>
                            </TgLink>
                        </a>
                    </TgBlock>
                </Section>
            </ShippingBlock>
        </ShippingContainer>
    )
}

export default Shipping;