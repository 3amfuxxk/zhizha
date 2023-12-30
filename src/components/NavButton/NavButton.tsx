import React from "react";
import styled from 'styled-components';
import Image from "next/image";

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

const ButtonBlock = styled.div`
    width: auto;
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

    @media (max-width: 430px) {
        display: none;
    }
`

const Text = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFF;
    margin: 0px 27px 0px 60px;
`
interface Props {
    svgLink: string;
    text: string;
}

const NavButton = ({text, svgLink}: Props) => {
    return (
        <ButtonBlock>
            <RoundBlock>
                <Image src={`/img/Header/${svgLink}`} width={20} height={20} alt='Catalog'/>
            </RoundBlock>
            <Text>
                {text}
            </Text>
        </ButtonBlock>
    )
}

export default NavButton;