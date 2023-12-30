import React from "react";
import styled from 'styled-components';
import Link from "next/link";
import Image from "next/image";
import CardBlog from "../../modules/Blog/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";


const BlogContainer = styled.div`
    display: flex;
    width: 1262px;
    height: 534px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    flex-direction: column;
    padding: 34px 29px 29px 29px;
    margin-top: 111px;
    gap: 17px;
    overflow: hidden;
    @media (max-width: 430px) {
        width: 100%;
        flex-direction: column;
        height: 1336px;
        padding: 22px 17px 17px 17px;
        margin-top: 85px;
    }
`
const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
interface TextSize {
    fontSize?: string;
    fontWeight?: number;
}
const Text = styled.p<TextSize>`
    color: #FFF;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
    font-style: normal;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '800')};
    line-height: 130%;
`
const HeaderText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    @media (max-width: 430px) {
        font-size: 22px;
    }
`
const SmallText = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    @media (max-width: 430px) {
        font-size: 16px;
    }
`
const BlogLink = styled.div`
    display: flex;
    gap: 8px;
    @media (max-width: 430px) {
       margin-top: 4px; 
    }
`
const Img = styled(Image)`
    margin-top: 6px;
`
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: auto;
    overflow: hidden;
    @media (max-width: 430px) {
        flex-direction: column;
        flex-wrap: unset;
        justify-content: unset;
        gap: 11px;
    }
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

const Blog = () => {

    const [blog, setBlog] = useState<Blog[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://35.180.189.210/api/v1/news`);
                const blogData = response.data as Blog[];
                setBlog(blogData);
            } catch (error) {
                console.error('Ошибка при запросе продукта:', error);
                setBlog(null);
            }
        };

        fetchProduct();
    }, []);

    return (
        <BlogContainer>
            <Header>
                <HeaderText>
                    Останні новини:
                </HeaderText>
                <Link href={'/blog'}>
                    <BlogLink>
                        <SmallText>
                            Наш блог
                        </SmallText>
                        <Img src={'/img/Blog/svg/arrow-right.svg'} width={14} height={10} alt="" />
                    </BlogLink>
                </Link>
            </Header>
            <CardContainer>
                {blog && Array.isArray(blog) && blog.slice(0, 3).map((item, index) => (
                    <CardBlog
                        key={index}
                        id={item.id}
                        imgLink={item.image}
                        title={item.category}
                        time={item.to_read}
                        date={item.date_posted}
                        topicName={item.title}
                        topicText={item.paragraph1}
                        link={'/singleblog'} />
                ))}
            </CardContainer>
        </BlogContainer>
    )
}

export default Blog;