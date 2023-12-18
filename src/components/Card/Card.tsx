import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const CardContainer = styled.div`
    display: flex;
    width: 308px;
    height: 431px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #1F1E1F;
    padding: 15px 14px;
    flex-direction: column;
`
const ImgBlock = styled.div`
    display: flex;
    width: 280px;
    flex-shrink: 0;
    height: 280px;
    border-radius: 6px;
    overflow: hidden;
`
const NameBlock = styled.div`
    display: -webkit-box;
    width: 100%;
`
const NameText = styled.p`
    
`

interface Props {
    name: string;
    price: string;
    sale?: string;
    imgLink: string;
    id: string;
}

const Card = ({name, price, sale, imgLink}: Props) => {
    return (
        <CardContainer>
            <ImgBlock>
                <Image src={`/img/Card/${imgLink}`} width={280} height={280} alt="" />
            </ImgBlock>
        </CardContainer>
    )
}

export default Card;