import React, {useState} from "react";
import styled from 'styled-components';
import Image from "next/image";
import Link from "next/link";

const LanguageBlock = styled.div`
    display: flex;
    width: 71px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    overflow: hidden;
    position: relative;
    transition: height 0.3s ease;
    position: absolute;
    left: 62px;
    top:0;
    @media (max-width: 430px) {
        left: 75px;
        display: none;
    }
`

const LanguageBar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 15px;
    top: 14px;
    left: 17px;
`

const LanguageRow = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    user-select: none;
`

const Text = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Span = styled.span`
    width: 36px;
    height: 1px;
    flex-shrink: 0;
    border-radius: 5px;
    opacity: 0.3;
    background: rgba(255, 255, 255, 0.70);
`

const Img = styled(Image)`
    cursor: pointer;
    transition: transform 0.3s ease;
    rotate: 0deg;
`

const Language = () => {
    const [expanded, setExpanded] = useState(false);

    const toggle = () => {
        setExpanded(!expanded);
    };
    return (
        <LanguageBlock style={{ height: expanded ? '103px' : '50px' }}>
            <LanguageBar>
                <Link href="">
                    <LanguageRow onClick={toggle}>
                        <Text>
                            EN
                        </Text>
                        <Img src={'/img/Header/arrow-down.svg'} width={6} height={10} alt='' style={{rotate: expanded ? '180deg' : '0deg'}} />
                    </LanguageRow>
                </Link>
                <Span />
                <Link href={"/"}>
                    <LanguageRow>
                        <Text>
                            UA
                        </Text>
                    </LanguageRow>
                </Link>
            </LanguageBar>
        </LanguageBlock>
    )
}

export default Language;