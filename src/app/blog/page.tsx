'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import BlogNews from "../../modules/Blog/BlogNews/BlogNews";

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
