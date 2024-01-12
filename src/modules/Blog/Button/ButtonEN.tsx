import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const ButtonBlock = styled.div`
    display: flex;
    width: 86px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
`

const Button = () => {
    return (
        <ButtonBlock>
            <Text>
                Read
            </Text>
        </ButtonBlock>
    )
}

export default Button;