import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Counter from '../Counter/Counter';

const AddContainer = styled.div`
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.40);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 4;
`
const AddCard = styled.div`
    display: flex;
    width: 448px;
    height: 464px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px;
    flex-direction: column;
    gap: 14px;
`
const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const HeadText = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const Close = styled.div`
    display: flex;
    cursor: pointer;
`
const ProductRow = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    height: 134px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #1F1E1F;
    gap: 8px;
`
const ImageBlock = styled.div`
    display: flex;
    border-radius: 6px;
    overflow: hidden;
`
const InfoBlock = styled.div`
    display: flex;
    padding: 3px 10px 3px 0px;
    flex-direction: column;
    flex: 1;
`
const Name = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const IDBlock = styled.p`
    color: rgba(255,255,255,1);
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-top: 4px;
`
const PriceBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`
const Span = styled.span`
    color: rgba(255, 255, 255, 0.60);
`
const Price = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1px;
`
const SpecsBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`
const Specs = styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    width: 100%;
`
const BlockProps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 32px;
    padding: 0px 13px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.isSelected ? 'rgba(255, 255, 255, 0.70)' : '#292929')};
    background-color: ${(props) => (props.isSelected ? '#272727' : '#141414')};
    cursor: pointer;
    transition: all 0.3s ease;
`
const SectName = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    margin-left: 3px;
`
const Text = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
`
const NavBlock = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: auto;
`
const Leave = styled.div`
    display: flex;
    width: 184px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #292929;
    background: #141414;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Add = styled.div`
    display: flex;
    width: 196px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    opacity: 0.7;
    background: #B6020D;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: 7px;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
interface SelectedProduct {
    name: string;
    price: number;
    sale?: number;
    imgLink: string;
    id: string;
    strength: string[];
    size: string[];
    totalQuantity: number;
    selectedStrengthIndex: number;
    selectedSizeIndex: number;
}

interface Props {
    selectedProduct: SelectedProduct;
    onDataUpdate: (data: SelectedProduct) => void;
}


const AddToCart = ({ selectedProduct, onDataUpdate}: Props) => {

    const [SelecteStrength, setSelecteStrength] = useState(0);
    const [SelectedSize, setSelectedSize] = useState(0);

    const handleStrengthClick = (index: number) => {
        setSelecteStrength(index);
    };
    const handleSizeClick = (index: number) => {
        setSelectedSize(index);
    };

    const [totalQuantity, setTotalQuantity] = useState<number>(1);

    const handleQuantityChange = (newQuantity: number) => {
        setTotalQuantity(newQuantity);
    };

    const handleClose = () => {
        const addContainer = document.getElementById('add-container');
        if (addContainer) {
            setTotalQuantity(1);
            setSelecteStrength(0);
            setSelectedSize(0);
            addContainer.style.display = 'none';
        }
    };

    const handleAddToCart = () => {
        const selectedStrength = selectedProduct.strength[SelecteStrength];
        const selectedSize = selectedProduct.size[SelectedSize];

        const updatedProductData = {
            ...selectedProduct,
            totalQuantity: totalQuantity,
            selectedStrength: selectedStrength,
            selectedSize: selectedSize,
        };

        onDataUpdate(updatedProductData);
        console.log(updatedProductData);
    };

    // const handleCart = () => {
    //     handleAddToCart();
    //     handleClose();
    //   };

    return (
        <AddContainer id='add-container'>
            {selectedProduct && (
                <AddCard>
                    <Header>
                        <HeadText>
                            Оберіть параметри:
                        </HeadText>
                        <Close onClick={handleClose}>
                            <Image src={'/img/Card/svg/close.svg'} width={18} height={18} alt="" />
                        </Close>
                    </Header>
                    <ProductRow>
                        <ImageBlock>
                            <Image src={`/img/Card/${selectedProduct.imgLink}`} width={114} height={114} alt="" />
                        </ImageBlock>
                        <InfoBlock>
                            <Name>
                                {selectedProduct.name}
                            </Name>
                            <IDBlock>
                                Код товару: <Span>{selectedProduct.id}</Span>
                            </IDBlock>
                            <PriceBlock>
                                <Price>
                                    {selectedProduct.price * totalQuantity}₴
                                </Price>
                                <Counter width={86} height={28} inpWidth={28} onQuantityChange={handleQuantityChange} totalQuantity={totalQuantity} />
                            </PriceBlock>
                        </InfoBlock>
                    </ProductRow>
                    <SpecsBlock>
                        <SectName>
                            Міцність:
                        </SectName>
                        <Specs>
                            {selectedProduct.strength.map((item, index) => (
                                <BlockProps
                                    key={index}
                                    isSelected={SelecteStrength === index}
                                    onClick={() => handleStrengthClick(index)}>
                                    <Text>{item}</Text>
                                </BlockProps>
                            ))}
                        </Specs>
                    </SpecsBlock>
                    <SpecsBlock>
                        <SectName>
                            Об’єм:
                        </SectName>
                        <Specs>
                            {selectedProduct.size.map((item, index) => (
                                <BlockProps
                                    key={index}
                                    isSelected={SelectedSize === index}
                                    onClick={() => handleSizeClick(index)}>
                                    <Text>{item}</Text>
                                </BlockProps>
                            ))}
                        </Specs>
                    </SpecsBlock>
                    <NavBlock>
                        <Leave onClick={handleClose}>
                            <p>
                                Назад до магазину
                            </p>
                        </Leave>
                        <Add onClick={handleAddToCart}>
                            <Image src={'/img/Card/svg/cart.svg'} width="13" height={16} alt="" />
                            <p>
                                Додати в кошик
                            </p>
                        </Add>
                    </NavBlock>
                </AddCard>
            )}
        </AddContainer>
    )
}

export default AddToCart;