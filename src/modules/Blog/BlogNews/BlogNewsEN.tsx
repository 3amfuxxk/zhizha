import React from "react";
import styled from 'styled-components';
import LinkPath from "@/components/LinkPath/LinkPath";
import Link from "next/link";
import CardBlog from "../Card/CardEN";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsContainer = styled.div`
    display: flex;
    width:  100%;
    flex-direction: column;
    margin-top: 140px;
    @media (max-width: 430px) {
        gap: 18px;
    }
`
const HeaderText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
    @media (max-width: 430px) {
        font-size: 32px;
    }
`
const TextInactive = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const Active = styled.p`
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const NewssBlock = styled.div<{ maxHeight: number }>`
    display: flex;
    width: 100%;
    gap: 11px;
    flex-wrap: wrap;
    margin-top: 18px;
    max-height: ${(props) => `${props.maxHeight}px`};
    overflow: hidden;
    justify-content: center;
    @media (max-width: 430px) {
        flex-direction: column;
        gap: 11px;
        flex-wrap: unset;
        justify-content: unset;
    }
`
const More = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 135px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    gap: 7px;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 45px;
`
const ButtonText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
interface Blog {
    id: string;
    title: string;
    category: string;
    date_posted: string;
    to_read: number;
    paragraph1: string;
    paragraph2: string;
    image: string;
}

const BlogNews = () => {

    const [blog, setBlog] = useState<Blog[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/news`);
                const blogData = response.data as Blog[];
                setBlog(blogData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setBlog(null);
            }
        };

        fetchProduct();
    }, []);

    let defaultHeight = 1754;
    let increaseHeight = 1764;
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        defaultHeight = window.innerWidth <= 430 ? 2497 : 847;
    }
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        const increaseHeight = window.innerWidth <= 430 ? 2507 : 857;
    }

    const [maxHeight, setMaxHeight] = useState<number>(defaultHeight);

    const toggleExpanded = () => {
        setMaxHeight((prevHeight) => prevHeight + increaseHeight);
    };

    return (
        <NewsContainer>
            <HeaderText>
                Our blog
            </HeaderText>
            <LinkPath>
                <Link href={"../en"} >
                    <TextInactive>
                        Home
                    </TextInactive>
                </Link>
                <Link href={"../en/blog"} >
                    <Active>
                        Blog
                    </Active>
                </Link>
            </LinkPath>
            <NewssBlock maxHeight={maxHeight}>
                {blog?.map((item, index) => (
                    <CardBlog
                        key={index}
                        id={item.id}
                        imgLink={item.image}
                        title={item.category}
                        time={item.to_read}
                        date={item.date_posted}
                        topicName={item.title}
                        topicText={item.paragraph1}
                        link={'/en/singleblog'} />
                ))}
            </NewssBlock>
            <More>
                <ButtonText onClick={toggleExpanded}>
                    More
                </ButtonText>
                <Image src={'/img/Card/svg/dots.svg'} width={16} height={4} alt="" style={{marginTop:"3px"}} />
            </More>
        </NewsContainer>
    )
}

export default BlogNews;