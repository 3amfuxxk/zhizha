import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300", "400", "500"],
    subsets: ["cyrillic", "latin"],
    style: ["normal", "italic"],
})


const ContactBlock = styled.div`
    display: flex;
    width: 448px;
    height: auto;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px;
    flex-direction: column;
    @media (max-width: 430px) {
        width: 96%;
        padding: 19px 17px;
    }
`
const HeaderBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const HeaderContact = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const Imgs = styled(Image)`
    margin-top: 8px;
    cursor: pointer;
`
const ContactBlockMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 26px;
    width: 100%;
`
const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`
const SectName = styled.p`
    color: rgba(255, 255, 255, 0.70);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-left: 9px;
`
const CopyBlock = styled.div`
    display: flex;
    width: auto;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #1F1E1F;
    position: relative;
    padding: 0px 55px 0px 14px;
    align-items: center;
    max-width: 220px;
`
const CopyText = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const CopyItem = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const ContactUs = styled.p`
    color: rgba(255, 255, 255, 0.30);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 43px;
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
    margin-left: auto;
    margin-right: auto;
    margin-top: 27px;
    cursor: pointer;
`
const TgText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`

const Contact = () => {
    const showContact = () => {
        const contacts = document.getElementById('blur-back');
        if (contacts) {
            contacts.style.display = 'none';
        }
    }
    return (
        <ContactBlock>
            <HeaderBlock>
                <HeaderContact>
                    Зв’язок з нами:
                </HeaderContact>
                <Imgs src={'/img/Header/close.svg'} width={14} height={14} alt="" onClick={showContact} />
            </HeaderBlock>
            <ContactBlockMain>
                <ContactSection>
                    <SectName>
                        Telegram:
                    </SectName>
                    <CopyBlock>
                        <CopyText className={roboto.className}>
                            @rain_site
                        </CopyText>
                        <CopyItem>
                            <Image src={'/img/Contact/copy.svg'} width={13} height={16} alt="" />
                        </CopyItem>
                    </CopyBlock>
                </ContactSection>
                <ContactSection>
                    <SectName>
                        Viber:
                    </SectName>
                    <CopyBlock>
                        <CopyText className={roboto.className}>
                            +380 (98) 289 2022
                        </CopyText>
                        <CopyItem>
                            <Image src={'/img/Contact/copy.svg'} width={13} height={16} alt="" />
                        </CopyItem>
                    </CopyBlock>
                </ContactSection>
                <ContactSection>
                    <SectName>
                        Номер телефону:
                    </SectName>
                    <CopyBlock>
                        <CopyText className={roboto.className}>
                            +380 (98) 289 2022
                        </CopyText>
                        <CopyItem>
                            <Image src={'/img/Contact/copy.svg'} width={13} height={16} alt="" />
                        </CopyItem>
                    </CopyBlock>
                </ContactSection>
                <ContactSection>
                    <SectName>
                        Електронна пошта:
                    </SectName>
                    <CopyBlock>
                        <CopyText className={roboto.className}>
                            rainzhizha@gmail.com
                        </CopyText>
                        <CopyItem>
                            <Image src={'/img/Contact/copy.svg'} width={13} height={16} alt="" />
                        </CopyItem>
                    </CopyBlock>
                </ContactSection>
                <ContactUs>
                    Зв’яжіться з нами, якщо у вас виникнуть якісь питання з приладу нашого магазину. Також у нас є телеграм канал:
                </ContactUs>
                <TgLink>
                    <Image src={'/img/Shipping/tg.svg'} width={16} height={16} alt="" />
                    <TgText>
                        Ми у Telegram
                    </TgText>
                </TgLink>
            </ContactBlockMain>
        </ContactBlock>
    )
}

export default Contact;