import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Image from "next/image";
import { Roboto } from "next/font/google";
import axios from "axios";

const roboto = Roboto ({
    weight: ["300", "400", "500"],
    subsets: ["cyrillic", "latin"],

});

const PageBlock = styled.div`
    display: flex;
    margin-top: 140px;
    width: 100%;
    flex-direction: column;
    height: auto;
`
const WideImage = styled.div`
    display: flex;
    width: 100%;
    height: 710px;
    border-radius: 14px;
    background: #181818;
    overflow: hidden;
    @media (max-width: 430px) {
        height: 230px;   
    }
`
const Img = styled(Image)`
    display: flex;
    flex-shrink: 1;
    @media (max-width: 430px) {
        width: 410px;
        height: 230px;
    }
`
const Date = styled.div`
    display: flex;
    margin-top: 21px;
    width: auto;
    padding: 0px 13px;
    height: 33px;
    border-radius: 8px;
    background: #141414;
    align-items: center;
    max-width: 190px;
    gap: 7px;
    justify-content: center;
`
const DateText = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const Header = styled.p`
    color: #FFF;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
    margin-top: 37px;
    margin-left: 4px;
    @media (max-width: 430px) {
        font-size: 32px;   
    }
`
const TextBlock = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px;
    height: auto;
    flex-direction: column;
    gap: 18px;
    margin-top: 29px;
    @media (max-width: 430px) {
        margin-top: 22px;   
    }
`
const Paragraph = styled.p`
    color: rgba(255, 255, 255, 0.80);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
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

interface BlogId {
    idb: string;
}

const SinglePage = ({idb}: BlogId) => {
    const [blog, setProduct] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/news/${idb}/?lang=en`);
                const blogData = response.data as Blog;
                setProduct(blogData);
            } catch (error) {
                setProduct(null);
            }
        };

        fetchProduct();
    }, [idb]);
    return (
        <PageBlock>
            <WideImage>
                <Img src={blog?.image ? `${blog.image}` : '/img/Card/rb.jpg'} width={1262} height={710} alt="" />
            </WideImage>
            <Date>
                <Image src={'/img/Blog/svg/date.svg'} width={12} height={14} alt="" />
                <DateText>
                    {blog?.date_posted}
                </DateText>
            </Date>
            <Header>
                {blog?.title}
            </Header>
            <TextBlock>
                <Paragraph className={roboto.className}>
                    {blog?.paragraph1}
                </Paragraph>
                <Paragraph className={roboto.className}>
                    {blog?.paragraph2}
                </Paragraph>
            </TextBlock>
        </PageBlock>
    )
}

export default SinglePage;