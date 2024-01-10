'use client'
import React from "react";
import styled from 'styled-components';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchResults from "../../modules/Search/SearchResults/SearchResults";

export default function Home() {

    return (
        <div>
            <Container>
                <Header />
                <SearchResults />
                <Footer />
            </Container>
        </div>
    )
}