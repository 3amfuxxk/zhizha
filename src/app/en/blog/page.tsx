'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import BlogNews from "@/modules/Blog/BlogNews/BlogNewsEN";

export default function Home() {

    return (
        <div>
            <Container>
                <Header />
                <BlogNews />
                <Footer />
            </Container>
        </div>
    )
}
