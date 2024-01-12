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
                    Navigation
                </HeadText>
                <ListHolder>
                    <LinkBlock className={roboto.className}>
                        <Link href="/catalog">
                            <ListText>
                                Catalogue
                            </ListText>
                        </Link>
                        <ListText>
                            Reviews
                        </ListText>
                        <Link href="/accessories">
                            <ListText>
                                Components
                            </ListText>
                        </Link>
                    </LinkBlock>
                    <LinkBlock className={roboto.className}>
                        <Link href="/pods">
                            <ListText>
                                Pod systems
                            </ListText>
                        </Link>
                        <Link href="/liquid">
                            <ListText>
                                Kits
                            </ListText>
                        </Link>
                    </LinkBlock>
                </ListHolder>
            </NavBlockRow>
            <NavBlockRow>
                <HeadText fontSize="28px">
                    Company
                </HeadText>
                <ListHolder>
                    <LinkBlock className={roboto.className}>
                        <ListText>
                            About us
                        </ListText>
                        <ListText>
                            Our shop
                        </ListText>
                    </LinkBlock>
                </ListHolder>
            </NavBlockRow>
            <NavBlockRow>
                <HeadText fontSize="28px">
                    Help
                </HeadText>
                <ListHolder>
                    <LinkBlock className={roboto.className}>
                        <Link href="/shipping">
                            <ListText>
                                Payment and delivery
                            </ListText>
                        </Link>
                        <ListText>
                            Security policy
                        </ListText>
                        <ListText>
                            Terms of the contract
                        </ListText>
                    </LinkBlock>
                </ListHolder>
            </NavBlockRow>
        </NavBlock>
    )
}

export default ListBlock;