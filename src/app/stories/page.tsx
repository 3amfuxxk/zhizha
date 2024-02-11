'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import StoryBlock from "@/components/Story/StoryBlock";

export default function Home() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    console.log(id);
    return (
        <div>
            <Container>
                <Header />
                <StoryBlock idb={id !== null ? id : 1} />
            </Container>
        </div>
    )
}