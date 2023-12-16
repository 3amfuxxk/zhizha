import React from "react";
import styled from 'styled-components';
import { Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const Card = styled.div`
    display: flex;
    width: 394px;
    height: 418px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #1F1E1F;
    flex-direction: column;
    padding: 14px;
    gap: 11px;
`
const Img = styled(Image)`
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
`

const CardBlog = () => {
    return (
        <Card>
            <Img src={'/img/Blog/1.jpg'} alt='' width={366} height={206} />
        </Card>
    )
}

export default CardBlog;