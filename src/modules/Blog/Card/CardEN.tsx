import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/ButtonEN";

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const Card = styled.div<{width?: number, height?: number}>`
    display: flex;
    width: ${(props) => props.width ? props.width : 394}px;
    height: ${(props) => props.height ? props.height : 418}px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #1F1E1F;
    flex-direction: column;
    padding: 14px;
    gap: 11px;
    @media (max-width: 430px) {
        width: 100%;
        height: 407px;
    }
`
const Img = styled(Image)`
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
    @media (max-width: 430px) {
        width: 430px;
        max-width: 100%;
        height: 197px;
    }
`
const TextInfo = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    opacity: 0.7;
`
const InfoBlock = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    gap: 5px;
    flex-wrap: wrap;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
const Dot = styled.span`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TopicName = styled.p`
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
const PreviewBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
`
const TopicText = styled.p`
    color: rgba(255, 255, 255, 0.80);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
const Nav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: auto;
`
const Date = styled.div`
    display: flex;
    width: auto;
    height: 32px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: #141414;
    padding: 0px 13px;
`
const DateText = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const DateContainer = styled.div`
    display: flex;
    gap: 7px;
    align-items: center;
`

interface Props {
    id: string;
    imgLink: string;
    title: string;
    time: number;
    topicName: string;
    topicText: string;
    link: string;
    date: string;
    width?: number;
    height?: number;
}

const CardBlog = ({imgLink,title,time, topicName, topicText, link, date, width, height, id}: Props) => {
    return (
        <Card width={width} height={height}>
            <Img src={imgLink} alt='' width={366} height={206} />
            <InfoBlock>
                <TextInfo>
                    {title}
                </TextInfo>
                <Dot>
                    <Image src={'/img/Blog/svg/dot.svg'} width={4} height={4} alt="" />
                </Dot>
                <TextInfo>
                    {time} min. reading time
                </TextInfo>
            </InfoBlock>
            <PreviewBlock>
                <TopicName>
                    {topicName}
                </TopicName>
                <TopicText className={roboto.className}>
                    {topicText}
                </TopicText>
            </PreviewBlock>
            <Nav>
                <Link href={{pathname: `${link}`, query: {id: id}}}>
                    <Button />
                </Link>
                <Date>
                    <DateContainer>
                        <Image src={'/img/Blog/svg/date.svg'} width={12} height={14} alt="" />
                        <DateText>
                            {date}
                        </DateText>
                    </DateContainer>
                </Date>
            </Nav>
        </Card>
    )
}

export default CardBlog;