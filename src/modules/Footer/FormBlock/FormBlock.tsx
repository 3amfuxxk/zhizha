import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { Roboto } from "next/font/google";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../../app/globals.css'
import axios from 'axios';

const roboto = Roboto({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
})

const FormContainer = styled.div`
    display: flex;
    width: 568px;
    height: 270px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #181818;
    padding: 24px 28px;
    flex-direction: column;
    @media (max-width: 430px) {
        width: 100%;
        height: 249px;
        padding: 22px 17px 17px 17px;
        order: -1;
    }
`
const HeadText = styled.p`
    color: rgba(255, 255, 255, 0.30);
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    @media (max-width: 430px) {
        font-size: 24px;
    }
`
const White = styled.span`
    color: rgba(255, 255, 255, 1);
`
const AdvBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 17px;
`
const TickBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    flex-shrink: 0;
    background: #282828;
`
const TickRow = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const TickText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const FormStyled = styled(Form)`
    position: relative;
    display: flex;
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #292929;
    background: #141414;
    align-items: center;
    margin-top: 35px;
`
const InputEmail = styled(Field)`
    display: flex;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 300px;

    &:-webkit-autofill,
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: rgba(255, 255, 255, 1);
    }
    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
    &:focus {
        color: rgba(255, 255, 255, 1);
    }
`
const ButtonText = styled.p`
    color: rgba(255,255,255,1);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 430px) {
        font-size: 14px;   
    }
`
const Button = styled.button`
    width: 159px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    background-color: #B6020D;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    border: none;

    :focus {
        outline: none;
    }
    @media (max-width: 430px) {
        width: 126px;
    }
`

const FormBlock = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Введите корректный email').required('Обязательное поле'),
    });

    const handleSubmit = async (values: { email: string }, { resetForm }: { resetForm: () => void }) => {
        try {
            const response = await axios.post('http://18.132.12.234/api/v1/emails/', { email: values.email });
            console.log('POST request successful:', response.data);
            resetForm();
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
        console.log(values.email);
    };

    return (
        <FormContainer style={{ gridArea: 'div4' }}>
            <HeadText>
                Не пропустіть <White>розпродажі</White> та інші <White>чудові пропозиції!</White>
            </HeadText>
            <AdvBlock>
                <TickRow>
                    <TickBlock>
                        <Image src={'/img/Footer/svg/tick.svg'} width={9.8} height={7} alt="" />
                    </TickBlock>
                    <TickText className={roboto.className}>
                        Без спаму
                    </TickText>
                </TickRow>
                <TickRow>
                    <TickBlock>
                        <Image src={'/img/Footer/svg/tick.svg'} width={9.8} height={7} alt="" />
                    </TickBlock>
                    <TickText className={roboto.className}>
                        Моментальні сповіщення
                    </TickText>
                </TickRow>
            </AdvBlock>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <FormStyled>
                        <InputEmail
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className={roboto.className}
                            autoComplete="off"
                        />
                        {/* className={touched.email && errors.email ? 'error' : ''} */}
                        {/* {touched.email && errors.email ? (
                                <div className="error-message">{errors.email}</div>
                            ) : null} */}
                        <Button type="submit">
                            <ButtonText>
                                Підписатися
                            </ButtonText>
                        </Button>
                    </FormStyled>
                )}
            </Formik>
        </FormContainer>
    )
}

export default FormBlock;