'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Shipping from "../../components/Shipping/Shipping";

export default function Home() {
    return (
        <div>
            <Container>
                <Header />
                <Shipping />
                <Footer />
            </Container>
        </div>
    )
}