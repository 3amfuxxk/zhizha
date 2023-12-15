import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const FormContainer = styled.div`
    display: flex;
    width: 568px;
    height: 270px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #181818;
    padding: 24px 28px;
    flex-direction: column;
`
const HeadText = styled.p`
    color: rgba(255, 255, 255, 0.30);
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const White = styled.span`
    color: rgba(255, 255, 255, 1);
`
const AdvBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 17px;
`
const TickBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    flex-shrink: 0;
    background: #282828;
`
const TickRow = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const TickText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const FormBlock = () => {
    return (
        <FormContainer  style={{ gridArea: 'div4' }}>
            <HeadText>
                Не пропустіть <White>розпродажі</White> та інші <White>чудові пропозиції!</White>
            </HeadText>
            <AdvBlock>
                <TickRow>
                    <TickBlock>
                        <Image src={'/img/Footer/svg/tick.svg'} width={9.8} height={7} alt="" />
                    </TickBlock>
                    <TickText className={roboto.className}>
                        Без спаму
                    </TickText>
                </TickRow>
                <TickRow>
                    <TickBlock>
                        <Image src={'/img/Footer/svg/tick.svg'} width={9.8} height={7} alt="" />
                    </TickBlock>
                    <TickText className={roboto.className}>
                        Моментальні сповіщення
                    </TickText>
                </TickRow>
            </AdvBlock>
        </FormContainer>
    )
}

export default FormBlock;