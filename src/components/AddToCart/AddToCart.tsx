import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Counter from '../Counter/Counter';
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/slice';

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
interface BlockProps {
    isSelected: boolean;
}
const BlockProps = styled.div<BlockProps>`
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
interface AddToCartProduct {
    id: string;
    title: string;
    code: number;
    desc: string;
    ice: boolean;
    image: string;
    categories: string[];
    options: ProductOption;
    totalQuantity: number;
}


interface Product {
    id: string;
    title: string;
    code: number;
    desc: string;
    ice: boolean;
    image: string;
    categories: string[];
    options: ProductOption[];
}
interface ProductOption {
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    nico: number;
    volume: number;
}

interface Props {
    product: Product;
}


const AddToCart = ({ product }: Props) => {



    const [selectedNico, setSelectedNico] = useState(0);
    const [selectedVolume, setSelectedVolume] = useState(0);

    const [totalQuantity, setTotalQuantity] = useState<number>(1);

    const handleQuantityChange = (newQuantity: number) => {
        setTotalQuantity(newQuantity);
    };

    const handleClose = () => {
        const addContainer = document.getElementById('add-container');
        if (addContainer) {
            setTotalQuantity(1);
            addContainer.style.display = 'none';
        }
    };

    const dispatch = useDispatch();
    const handleCart = (product: Product, quantity: number) => {
        const selectedOptions: ProductOption = product.options[selectedNico];
        const selectedProduct: AddToCartProduct = {
          ...product,
          totalQuantity: quantity,
          options: selectedOptions,
        };
        handleClose();
        dispatch(addToCart(selectedProduct));
        console.log(selectedProduct);
      };

    return (
        <AddContainer id='add-container'>
            {product && (
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
                            <Image src={product.image} width={114} height={114} alt="" />
                        </ImageBlock>
                        <InfoBlock>
                            <Name>
                                {product.title}
                            </Name>
                            <IDBlock>
                                Код товару: <Span>{product.code}</Span>
                            </IDBlock>
                            <PriceBlock>
                                <Price>
                                    {product.options[selectedNico]?.sale_price * totalQuantity}₴
                                </Price>
                                <Counter width={86} height={28} inpWidth={28} radius={5} onQuantityChange={handleQuantityChange} totalQuantity={totalQuantity} />
                            </PriceBlock>
                        </InfoBlock>
                    </ProductRow>
                    <SpecsBlock>
                        <SectName>
                            Міцність:
                        </SectName>
                        <Specs>
                            {product.options.map((option, index) => (
                                <BlockProps
                                    key={index}
                                    isSelected={selectedNico === index}
                                    onClick={() => {
                                        setSelectedNico(index);
                                        setSelectedVolume(index);
                                    }}
                                >
                                    <Text>{option.nico}</Text>
                                </BlockProps>
                            ))}
                        </Specs>
                    </SpecsBlock>
                    <SpecsBlock>
                        <SectName>
                            Об’єм:
                        </SectName>
                        <Specs>
                            {product.options.map((option, index) => (
                                <BlockProps
                                    key={index}
                                    isSelected={selectedVolume === index}
                                    onClick={() => {
                                        setSelectedVolume(index);
                                        setSelectedNico(index);
                                    }}
                                >
                                    <Text>{option.volume}</Text>
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
                        <Add onClick={() => handleCart(product, totalQuantity)}>
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