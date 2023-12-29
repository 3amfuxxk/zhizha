import React from "react";
import styled from 'styled-components';
import ProsComponent from "../../modules/Pros/ProsComponent/ProsComponent";

const ProsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 44px;
    width: 100%;
    height: 196px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 34px 29px;
    margin-top: 12px;
    @media (max-width: 430px) {
        height: 304px;
        width: 100%;
        flex-direction: column;
        padding: 22px 17px;
        gap: 40px;
    }
`
const HeaderText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    @media (max-width: 430px) {
        font-size: 24px;
    }
`
const ProsBlock = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 15px;
    justify-content: space-between;
    @media (max-width: 430px) {
        flex-direction: column;
        flex: 1;
    }
`


const Pros = () => {
    return (
        <ProsContainer>
            <HeaderText>
                Чому обирають саме нас:
            </HeaderText>
            <ProsBlock>
                <ProsComponent prosName="Швидка доставка" width={52} height={38} link={'shipping.svg'} text={'Протягом 1-3 робочих днів'} />
                <ProsComponent prosName="Великий Асортимент" width={31} height={39} link={'size.svg'} text={'Знайдіть пристрій або рідину на свій смак'} />
                <ProsComponent prosName="Гарантована якість" width={31} height={41} link={'garant.svg'} text={'Будьте впевнені, що всі продукти високої якості'} />
            </ProsBlock>
        </ProsContainer>
    )
}

export default Pros;