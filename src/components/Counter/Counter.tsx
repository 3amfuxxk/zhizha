import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const CounterBlock = styled.div<Props>`
    display: flex;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #181818;
    justify-content: space-between;
`
const FuncBlock = styled.div`
    display: flex;
    height: 100%;
    aspect-ratio: 1 / 1;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #292929;
    background: #181818;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #FFF;
    user-select: none;
`
const Input = styled.input<{inpWidth: number}>`
    width: ${(props) => props.inpWidth}px;
    display: flex;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    &::placeholder {
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 800;
        line-height: 100%;
    }
    text-align: center;
`

interface Props {
    width: number;
    height: number;
    inpWidth: number;
    onQuantityChange: (newQuantity: number) => void;
    totalQuantity: number;
}

const Counter = ({width, height, inpWidth, onQuantityChange, totalQuantity}: Props) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    // useEffect(() => {
    //     const decrementChange = document.getElementById('decrementChange');
    //     if (decrementChange) {
    //         if (quantity === 1) {
    //             decrementChange.style.opacity = '0.3';
    //         } else {
    //             decrementChange.style.opacity = '1';
    //         }
    //     }
    // }, [quantity]);

    useEffect(() => {
        setQuantity(totalQuantity);
      });

    

    return (
        <CounterBlock width={width} height={height} inpWidth={inpWidth} onQuantityChange={onQuantityChange} totalQuantity={totalQuantity} >
            <FuncBlock onClick={handleDecrement} id={'decrementChange'}>
                -
            </FuncBlock>
            <Input type={'number'} placeholder={'1'} inpWidth={inpWidth} value={quantity} maxLength={3} max={999} readOnly />
            <FuncBlock onClick={handleIncrement}>
                +
            </FuncBlock>
        </CounterBlock>
    )
}

export default Counter;