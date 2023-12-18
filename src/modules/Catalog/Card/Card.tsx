import React from "react";
import styled from 'styled-components';
import Image from "next/image";

const CardBlock = styled.div`
    display: flex;
    padding: 15px;
    justify-content: center;
    flex-direction: column;
    gap: 17px;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #141414;
`
const ImgBlock = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 298px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
`
const TextBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const Text = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`

interface Props {
    imgLink: string;
    text: string;
}

const Card = ({imgLink, text}: Props) => {
    return (
        <CardBlock>
            <ImgBlock>
                <Image src={`/img/CardChoice/${imgLink}`} width={298} height={298} alt="" />
            </ImgBlock>
            <TextBlock>
                <Text>
                    {text}
                </Text>
            </TextBlock>
        </CardBlock>
    )
}

export default Card;