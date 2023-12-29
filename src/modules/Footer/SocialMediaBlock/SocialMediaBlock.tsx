import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Block = styled.div`
    display: flex;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    border-radius: 18px;
    border: 1px solid #292929;
    background: #181818;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media (max-width: 430px) {
        width: 130px;
        height: 130px;   
    }
`
const BlockContainer = styled.div`
    display: flex;
    gap: 14px;
`
interface Props {
    imgLink: string;
}

const SocialMediaBlock = ({imgLink}: Props) => {
    return (
        <Block>
            <Image src={imgLink} width={49} height={49} alt="" />
        </Block>
    )
}

export default SocialMediaBlock;

