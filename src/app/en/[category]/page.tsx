'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import CategoryBlock from "@/components/category/CategoryBlock/CategoryBlockEN";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {

    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    const title = searchParams.get('title');

    return (
        <div>
            <Container>
                <Header />
                <CategoryBlock id={id || 'null'} title={title || 'null'} />
                <Footer />
            </Container>
        </div>
    )
}