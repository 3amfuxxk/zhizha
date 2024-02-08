import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { selectAllLiquid, selectAllPods, selectAllDetails, selectAllAbstracts } from "@/store/search";
import Card from "@/components/Card/Card";
import DetailCard from "../../../components/DetailCard/DetailCard";
import PodCard from "../../../components/PodCard/PodCard";
import Link from "next/link";
import Dots from "../../../../public/img/Card/svg/dots.svg";

const roboto = Roboto({
    weight: ["300", "400"],
    subsets: ["cyrillic", "latin"],
})

const SearchContainer = styled.div`
    display: flex;
    margin-top: 140px;
    flex-direction: column;
    width: 100%;
    height: auto;
`
const Header = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
`
const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-left: auto;
    margin-right: auto;
`
const UnderHeader = styled.p`
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`
const SearchBlock = styled.div<{ maxHeight: number }>`
    display: grid;
    overflow: hidden;
    max-height: ${(props) => `${props.maxHeight}px`};
    transition: max-height 0.3s ease;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 10px 10px; 
    grid-template-areas: 
        ". . . ."
        ". . . .";
    margin-top: 58px;
    @media (max-width:430px) {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr; 
        grid-template-areas: 
        ". ."
        ". ."
        ". ."
        ". .";
       gap: 10px;
    }
`
const ButtonRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
`
const ButtonMore = styled.div`
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
`
const ButtonText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const SearchResults = () => {
    let defaultHeight = 1754;
    let increaseHeight = 1764;
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        defaultHeight = window.innerWidth <= 430 ? 1342 : 1754;
    }
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        const increaseHeight = window.innerWidth <= 430 ? 1352 : 1764;
    }

    const [maxHeight, setMaxHeight] = useState<number>(defaultHeight);

    const toggleExpanded = () => {
        setMaxHeight((prevHeight) => prevHeight + increaseHeight);
    };

    const liquids = useSelector(selectAllLiquid);
    const pods = useSelector(selectAllPods);
    const details = useSelector(selectAllDetails);
    const abstracts = useSelector(selectAllAbstracts);

    return (
        <SearchContainer>
            <HeadContainer>
                <Header>
                    Пошук
                </Header>
                <UnderHeader className={roboto.className}>
                    Список усіх результатів, за вашим пошуком:
                </UnderHeader>
            </HeadContainer>
            <SearchBlock maxHeight={maxHeight}>
                {liquids?.map((liquid, index) => (
                    <Link key={index} href={{ pathname: '/product', query: { id: liquid.id } }} >
                        <Card
                            code={liquid.code}
                            desc={liquid.desc}
                            ice={liquid.ice}
                            categories={liquid.categories}
                            image={liquid.image}
                            title={liquid.title}
                            id={liquid.id}
                            options={liquid.options}
                        />
                    </Link>
                ))}
                {pods?.map((pod, index) => (
                    <Link key={index} href={{ pathname: '/podsproduct', query: { id: pod.id } }}>
                        <PodCard
                            id={pod.id}
                            code={pod.code}
                            title={pod.title}
                            desc={pod.desc}
                            short_desc={pod.short_desc}
                            starting_price={pod.starting_price}
                            sale_price={pod.sale_price}
                            discount={pod.discount}
                            in_stock={pod.in_stock}
                            image={pod.image}
                            wide_image={pod.wide_image}
                            categories={pod.categories}
                            chars={pod.chars}
                        />
                    </Link>
                ))}
                {details?.map((detail, index) => (
                    <Link key={index} href={{ pathname: '/detailsproduct', query: { id: detail.id } }}>
                        <DetailCard
                            id={detail.id}
                            code={detail.code}
                            title={detail.title}
                            desc={detail.desc}
                            short_desc={detail.short_desc}
                            starting_price={detail.starting_price}
                            sale_price={detail.sale_price}
                            discount={detail.discount}
                            in_stock={detail.in_stock}
                            image={detail.image}
                            wide_image={detail.wide_image}
                            categories={detail.categories}
                            chars={detail.chars}
                        />
                    </Link>
                ))}
                {abstracts?.map((abstract, index) => (
                    <Link key={index} href={{ pathname: '/goods', query: { id: abstract.id } }}>
                        <DetailCard
                            id={abstract.id}
                            code={abstract.code}
                            title={abstract.title}
                            desc={abstract.desc}
                            short_desc={abstract.short_desc}
                            starting_price={abstract.starting_price}
                            sale_price={abstract.sale_price}
                            discount={abstract.discount}
                            in_stock={abstract.in_stock}
                            image={abstract.image}
                            wide_image={abstract.wide_image}
                            categories={abstract.categories}
                            chars={abstract.chars}
                        />
                    </Link>
                ))}
            </SearchBlock>
            <ButtonRow>
                <ButtonMore onClick={toggleExpanded}>
                    <ButtonText>
                        Більше
                    </ButtonText>
                    <Dots />
                </ButtonMore>
            </ButtonRow>
        </SearchContainer>
    )
}

export default SearchResults;