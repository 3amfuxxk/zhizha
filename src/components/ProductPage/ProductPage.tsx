import React from "react";
import styled from 'styled-components';
import LinkPath from "../LinkPath/LinkPath";
import Link from "next/link";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 140px;
    gap: 12px;
    width: 100%;
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

interface ProductData {
    id: string;
    sale: number;
    discount: number;
    imgLink: string;
    ice: boolean;
    desc: string;
    price: number;
    name: string;
    categories: string[];
    strength: string[];
    size: string[];
  }

interface Product {
    selectedProduct: ProductData[];
}


const ProductPage = ({selectedProduct}: Product) => {
    const product = selectedProduct[0];
    return (
        <ProductContainer>
            <LinkPath>
                <Link href={"../"} >
                    <TextInactive>
                        Головна
                    </TextInactive>
                </Link>
                <Link href={"/catalog"} >
                    <TextInactive>
                        Каталог
                    </TextInactive>
                </Link>
                <Link href={"/liquid"} >
                    <TextInactive>
                        Набори
                    </TextInactive>
                </Link>
                <Link href={'/'}>
                    <Active>
                        {selectedProduct.name}
                    </Active>
                </Link>
            </LinkPath>
        </ProductContainer>
    )
}

export default ProductPage;