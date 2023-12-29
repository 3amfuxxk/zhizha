import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const Pros = styled.div`
    display: flex;
    gap: 14px;
    width: auto;
    height: auto;
    align-items: center;
    @media (max-width: 430px) {
        
    }
`
const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const ProsName = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`
const ProsText = styled.p`
    color: rgba(255, 255, 255, 0.70);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
interface Props {
    prosName: string;
    text: string;
    link: string;
    height: number;
    width: number;
}

const ProsComponent = ({prosName, text, link, height, width}: Props) => {
    return (
        <Pros>
            <Image src={`/img/Pros/svg/${link}`} height={height} width={width} alt="" />
            <TextBlock>
                <ProsName>
                    {prosName}
                </ProsName>
                <ProsText>
                    {text}
                </ProsText>
            </TextBlock>
        </Pros>
    )
}

export default ProsComponent;