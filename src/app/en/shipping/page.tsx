'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import Shipping from "@/components/Shipping/ShippingEN";

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