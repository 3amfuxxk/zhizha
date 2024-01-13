'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import SinglePage from "@/modules/Blog/SinglePage/SinglePageEN";

export default function Home() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    return (
        <div>
            <Container>
                <Header />
                <SinglePage idb={id !== null ? id : ''} />
                <Footer />
            </Container>
        </div>
    )
}