import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Roboto } from "next/font/google";
import css from "styled-jsx/css";

const roboto = Roboto({
    weight: ["100", "300", "400", "500"],
    subsets: ["cyrillic", "latin"],
    style: ["normal", "italic"],
})

const OrderContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 140px;
    height: 858px;
    position: relative;
    justify-content: center;
`
const Forms = styled(Form)`
    display: flex;
    width: 570px;
    height: 858px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #181818;
    flex-direction: column;
    padding: 57px 29px 29px 29px;
`
const HeadText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    text-align: center;
`
const Structure = styled.div`
    display: flex;
    margin-top: 35px;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    position: relative;
`
const Label = styled.label`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-left: 13px;
`
const Fields = styled(Field)`
    display: flex;
    width: 512px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #292929;
    background: #141414;
    padding: 0px 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-items: center;
    transition: all 0.5s ease;
    outline: none;
    &:focus {
        border: 1px solid rgba(255,255,255,1);
    }

    &::placeholder {
        vertical-align: middle;
        color: rgba(255, 255, 255, 0.30);
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`
const Span = styled.span`
    color: rgba(255, 255, 255, 0.50);
`
const Button = styled.button<{isValid: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 192px;
    height: 50px;
    flex-shrink: 0;
    opacity: ${(props) => (props.isValid ? '1' : '0.3')};
    border-radius: 12px;
    background: #B6020D;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: auto;
    margin-right: auto;
    margin-top: 47px;
    border: none;
    cursor: ${(props) => (props.isValid ? 'pointer' : 'unset')};
`
const Error = styled(ErrorMessage)`
    position: absolute;
    left: 0;
    top: 23px;
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #B6020D;
    background: rgba(182, 2, 13, 0.10);
    z-index: 1;
`

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.number().required('Required'),
    location: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    post: Yup.string().required('Required'),
    telegramNick: Yup.string(),
});

const Order = () => {
    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log('Submitted values:', values);
        setSubmitting(false);
    };
    return (
        <OrderContainer>
            <div>
                <h1>Order Confirmation Form</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phoneNumber: '',
                        location: '',
                        city: '',
                        post: '',
                        telegramNick: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, isValid }) => (
                        <Forms>
                            <HeadText>
                                Оформлення замовлення:
                            </HeadText>
                            <Structure>
                                <Block>
                                    <Label htmlFor="name">Ваше ім’я:</Label>
                                    <Fields className={roboto.className} type="text" name="name" placeholder={'П.І.Б.'} />
                                    <ErrorMessage name="name" component="div" className="error" />
                                </Block>
                                <Block>
                                    <Label htmlFor="email">Електронна пошта:</Label>
                                    <Fields className={roboto.className} type="email" name="email" placeholder={'example@gmail.com'} />
                                    <ErrorMessage name="email" component="div" className="error" />
                                </Block>
                                <Block>
                                    <Label htmlFor="phoneNumber">Номер телефону:</Label>
                                    <Fields className={roboto.className} type="tel" name="phoneNumber" placeholder={'+380 (44) 444 4444'} />
                                    <ErrorMessage name="phoneNumber" component="div" className="error" />
                                </Block>
                                <Block>
                                    <Label htmlFor="telegramNick">Ваш телеграм <Span>(не обов'язково)</Span></Label>
                                    <Fields className={roboto.className} type="text" name="telegramNick" placeholder={'@nickname'} />
                                    <ErrorMessage name="telegramNick" component="div" className="error" />
                                </Block>
                                <Block>
                                    <Label htmlFor="location">Адреса доставки:</Label>
                                    <Fields className={roboto.className} type="text" name="location" placeholder={'Область'} />
                                    <ErrorMessage name="location" component="div" className="error" />
                                </Block>
                                <Block>
                                    <Fields className={roboto.className} type="text" name="city" placeholder={'Місто / Село'} />
                                    <ErrorMessage name="city" component="div" className="error" />
                                </Block>
                                <Block>
                                    <Fields className={roboto.className} type="text" name="post" placeholder={'Відділення Нової Пошти / Поштомат'} />
                                    <ErrorMessage name="post" component="div" className="error" />
                                </Block>
                            </Structure>

                            <Button type="submit" disabled={isSubmitting || !isValid} isValid={isValid}>
                                Підтвердити
                            </Button>
                        </Forms>
                    )}
                </Formik>
            </div>
        </OrderContainer>
    )
}

export default Order;