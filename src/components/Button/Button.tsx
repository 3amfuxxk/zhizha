import React from 'react';
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Image from "next/image";

interface Props {
    text: string;
    children?: React.ReactNode;
    onClick?: () => void;
    width: number;
    height: number;
}

const ButtonContainer = styled.div<Props>`
    display: flex;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Text = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ButtonBlock = styled.div`
    display: flex;
    gap: 7px;

`

const Button = ({text, children, onClick, width, height}: Props) => {
    return (
        <ButtonContainer onClick={onClick} width={width} height={height} text={text}>
            <ButtonBlock>
                {children}
                <Text>
                    {text}
                </Text>
            </ButtonBlock>
        </ButtonContainer>
    )
}

export default Button;