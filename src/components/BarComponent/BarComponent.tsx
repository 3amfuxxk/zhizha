import React from "react";
import styled from 'styled-components';
import Image from "next/image";

const BarBlock = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`
interface Props {
    svgLink: string;
    width?: number;
    height?: number;
}

const BarComponent = ({svgLink, width, height}: Props) => {
    return (
        <BarBlock>
            <Image src={`/img/Header/${svgLink}`} alt={'Search'} width={width} height={height} />
        </BarBlock>
    )
}

export default BarComponent;