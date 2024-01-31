'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CategoryBlock from "@/components/category/CategoryBlock/CategoryBlock";
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