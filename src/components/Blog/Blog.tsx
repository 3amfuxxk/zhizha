import React from "react";
import styled from 'styled-components';
import Link from "next/link";
import Image from "next/image";
import CardBlog from "../../modules/Blog/Card/Card";

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

const Blog = () => {
    return (
        <BlogContainer>
            <Header>
                <Text>
                    Останні новини:
                </Text>
                <Link href={'/'}>
                    <BlogLink>
                        <Text fontSize="16px" fontWeight={500}>
                            Наш блог
                        </Text>
                        <Img src={'/img/Blog/svg/arrow-right.svg'} width={14} height={10} alt="" />
                    </BlogLink>
                </Link>
            </Header>
            <CardContainer>
                <CardBlog imgLink="1.jpg" title="Вейпшоп" time={10} link="/" date="9 квітня, 2023" topicName="Ми запускаємо роботу нашого особистого вебсайту" topicText="Раді презентувати вам наш новий онлайн магазин, і тепер точно можна сказати що ми виходмо на новий рівень" />
                <CardBlog imgLink="1.jpg" title="Вейпшоп" time={10} link="/" date="9 квітня, 2023" topicName="Ми запускаємо роботу нашого особистого вебсайту" topicText="Раді презентувати вам наш новий онлайн магазин, і тепер точно можна сказати що ми виходмо на новий рівень" />
                <CardBlog imgLink="1.jpg" title="Вейпшоп" time={10} link="/" date="9 квітня, 2023" topicName="Ми запускаємо роботу нашого особистого вебсайту" topicText="Раді презентувати вам наш новий онлайн магазин, і тепер точно можна сказати що ми виходмо на новий рівень" />
            </CardContainer>
        </BlogContainer>
    )
}

export default Blog;