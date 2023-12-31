import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { Roboto } from "next/font/google";
import ConfirmationWindow from "../ConfirmationWindow/ConfirmationWindow";
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, clearCart, selectPods, selectDetails } from "../../../store/slice";
import axios from "axios";

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
const Forms = styled(Form) <{ isVisible: boolean }>`
    display: ${(props) => props.isVisible ? "none" : "flex"};
    width: 570px;
    height: 858px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #181818;
    flex-direction: column;
    padding: 57px 29px 29px 29px;
    @media (max-width: 430px) {
        width: 100%;
        padding: 62px 17px 27px 17px;   
    }
`
const HeadText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    text-align: center;
    @media (max-width: 430px) {
        font-size: 24px;   
    }
`
const Structure = styled.div`
    display: flex;
    margin-top: 35px;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    @media (max-width: 430px) {
        margin-top: 27px;   
    }
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
    transition: all 0.5s ease;
    &.error {
        color: #B6020D;
    }
`
const UnderText = styled.p`
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-top: 21px;
    @media (max-width:430px) {
        margin-top: 22px;
    }
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
    &.error {
        background: rgba(182, 2, 13, 0.10);
        border-color: #B6020D;
    }
    @media (max-width: 430px) {
        width: 100%;   
    }
`
const Span = styled.span`
    color: rgba(255, 255, 255, 0.50);
`
const Button = styled.button<{ isValid: boolean }>`
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
    transition: all 0.5s ease;
    cursor: ${(props) => (props.isValid ? 'pointer' : 'unset')};
    @media (max-width: 430px) {
        margin-top: 38px;   
    }
`
const Error = styled(ErrorMessage)`
    position: absolute;
    display: none;
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

interface OrderData {
    data: Order;
}

interface Order {
    items: Liquid[];
    pods: Pod[];
    details: Detail[];
}
interface Liquid {
    product_id: string;
    option_id: string;
    quantity: number;
}
interface Detail {
    product_id: string;
    quantity: number;
}
interface Pod {
    product_id: string;
    color_id: string;
    quantity: number;
}

const Order = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCart);

    const cartPods = useSelector(selectPods);

    const cartDetails = useSelector(selectDetails);

    const liquid = cartProducts.map((product) => ({
        product_id: product.id,
        option_id: product.options.id,
        quantity: product.totalQuantity,
    }));
    const pods = cartPods.map((pod) => ({
        pod_id: pod.id,
        color_id: pod.chars.id,
        quantity: pod.totalQuantity,
    }))
    const details = cartDetails.map((detail) => ({
        detail_id: detail.id,
        quantity: detail.totalQuantity,
    }))
    const [isVisible, setIsVisible] = useState(false);

    const orderConfirm = async (payload: any) => {
        try {
            const response = await axios.post('http://35.180.189.210/api/v1/orders/', payload);
            console.log('POST request successful:', response.data);
            dispatch(clearCart());
        } catch (error) {
            console.error('Error sending POST request:', error);
            console.log(payload);
        }
    };

    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const payload = {
            name: values.name,
            email: values.email,
            phone: values.phoneNumber,
            telegram: values.telegramNick,
            region: values.location,
            city: values.city,
            post_number: values.post,
            items: liquid,
            pods: pods,
            details: details,
        };
        console.log('Submitted values:', values);
        setSubmitting(false);
        setIsVisible((prevVisible) => !prevVisible);
        orderConfirm(payload);
    };
    
    return (
        <OrderContainer>
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
                {({ isSubmitting, isValid, errors, touched }) => (
                    <Forms isVisible={isVisible}>
                        <HeadText>
                            Оформлення замовлення:
                        </HeadText>
                        <Structure>
                            <Block>
                                <Label htmlFor="name" className={`${errors.name && touched.name ? 'error' : ''}`}>Ваше ім&apos;я:</Label>
                                <Fields className={`${roboto.className} ${errors.name && touched.name ? 'error' : ''}`} type="text" name="name" placeholder={'П.І.Б.'} />
                                {errors.name && touched.name && (
                                    <Error name="name" component="div" className="error" />
                                )}
                            </Block>
                            <Block>
                                <Label htmlFor="email" className={`${errors.email && touched.email ? 'error' : ''}`}>Електронна пошта:</Label>
                                <Fields className={`${roboto.className} ${errors.email && touched.email ? 'error' : ''}`} type="email" name="email" placeholder={'example@gmail.com'} />
                                {errors.email && touched.email && (
                                    <Error name="email" component="div" className="error" />
                                )}
                            </Block>
                            <Block>
                                <Label htmlFor="phoneNumber" className={`${errors.phoneNumber && touched.phoneNumber ? 'error' : ''}`}>Номер телефону:</Label>
                                <Fields className={`${roboto.className} ${errors.phoneNumber && touched.phoneNumber ? 'error' : ''}`} type="tel" name="phoneNumber" placeholder={'+380 (44) 444 4444'} />
                                {errors.phoneNumber && touched.phoneNumber && (
                                    <Error name="phoneNumber" component="div" className="error" />
                                )}
                            </Block>
                            <Block>
                                <Label htmlFor="telegramNick">Ваш телеграм <Span>(не обов&apos;язково)</Span></Label>
                                <Fields className={roboto.className} type="text" name="telegramNick" placeholder={'@nickname'} />
                                <Error name="telegramNick" component="div" className="error" />
                            </Block>
                            <Block>
                                <Label htmlFor="location" className={`${errors.location && touched.location ? 'error' : ''}`}>Адреса доставки:</Label>
                                <Fields className={`${roboto.className} ${errors.location && touched.location ? 'error' : ''}`} type="text" name="location" placeholder={'Область'} />
                                {errors.location && touched.location && (
                                    <Error name="location" component="div" className="error" />
                                )}
                            </Block>
                            <Block>
                                <Fields className={`${roboto.className} ${errors.city && touched.city ? 'error' : ''}`} type="text" name="city" placeholder={'Місто / Село'} />
                                {errors.city && touched.city && (
                                    <Error name="city" component="div" className="error" />
                                )}
                            </Block>
                            <Block>
                                <Fields className={`${roboto.className} ${errors.post && touched.post ? 'error' : ''}`} type="text" name="post" placeholder={'Відділення Нової Пошти / Поштомат'} />
                                {errors.post && touched.post && (
                                    <Error name="post" component="div" className="error" />
                                )}
                            </Block>
                        </Structure>
                        <UnderText className={roboto.className}>
                            Після оформлення замовлення протягом доби з Вами зв&apos;яжеться наша команда
                        </UnderText>
                        <Button type="submit" disabled={isSubmitting || !isValid} isValid={isValid}>
                            Підтвердити
                        </Button>
                    </Forms>
                )}
            </Formik>
            <ConfirmationWindow isVisible={isVisible} />
        </OrderContainer>
    )
}

export default Order;