import React from 'react';
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Link from 'next/link';

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const HeadText = styled.div<{ fontSize?: string; color?: string }>`
    color: ${(props) => (props.color === 'rgba(255, 255, 255, 0.3)' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 1)')};
    font-size: ${(props) => (props.fontSize === '28px' ? '28px' : '24px')};
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`;

const NavBlock = styled.div`
    display: flex;
    padding: 24px 28px;
    flex-direction: column;
    gap: 25px;
    width: 424px;
    height: 462px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #181818;
    overflow: hidden;
    @media (max-width: 430px) {
        width: 100%;
        height: auto;
        padding: 23px 20px;
    }
`
const NavBlockRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`
const ListText = styled.p`
    color: rgba(255, 255, 255, 0.70);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`
const ListHolder = styled.div`
    display: flex;
    width: 100%;
    gap: 90px;
    height: auto;
`
const LinkBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ListBlock = () => {
    return (
        <NavBlock style={{ gridArea: 'div3' }}>
                <NavBlockRow>
                    <HeadText fontSize="28px">
                        Навігація
                    </HeadText>
                    <ListHolder>
                        <LinkBlock className={roboto.className}>
                            <Link href="/catalog">
                                <ListText>
                                    Каталог
                                </ListText>
                            </Link>
                            <ListText>
                                Відгуки
                            </ListText>
                            <Link href="/accessories">
                                <ListText>
                                    Компоненти
                                </ListText>
                            </Link>
                        </LinkBlock>
                        <LinkBlock className={roboto.className}>
                            <Link href="/pods">
                                <ListText>
                                    Под системи
                                </ListText>
                            </Link>
                            <Link href="/liquid">
                                <ListText>
                                    Набори
                                </ListText>
                            </Link>
                        </LinkBlock>
                    </ListHolder>
                </NavBlockRow>
                <NavBlockRow>
                    <HeadText fontSize="28px">
                        Компанія
                    </HeadText>
                    <ListHolder>
                        <LinkBlock className={roboto.className}>
                            <ListText>
                                Про нас
                            </ListText>
                            <ListText>
                                Наш магазин
                            </ListText>
                        </LinkBlock>
                    </ListHolder>
                </NavBlockRow>
                <NavBlockRow>
                    <HeadText fontSize="28px">
                        Допомога
                    </HeadText>
                    <ListHolder>
                        <LinkBlock className={roboto.className}>
                            <ListText>
                                Оплата та доставка
                            </ListText>
                            <ListText>
                                Політика безпеки
                            </ListText>
                            <ListText>
                                Умови договору
                            </ListText>
                        </LinkBlock>
                    </ListHolder>
                </NavBlockRow>
            </NavBlock>
    )
}

export default ListBlock;