import React from "react";
import styled from 'styled-components';
import Slider from "../../modules/Advertising/Slider/Slider";
import Chat from "../../modules/Advertising/Chat/Chat";

const AdvertisingContainer = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    gap: 12px;
    margin-top: 12px;
`

const Advertising = () => {
    return (
        <AdvertisingContainer>
            <Slider />
            <Chat />
        </AdvertisingContainer>
    )
}

export default Advertising;