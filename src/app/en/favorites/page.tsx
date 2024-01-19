'use client'
import React from "react";
import styled from 'styled-components';
import Container from "@/components/Container/ContainerEN";
import Header from "@/components/Header/HeaderEN";
import Footer from "@/components/Footer/FooterEN";
import { useRouter, useSearchParams } from "next/navigation";
import FavBlock from "@/modules/Favorites/FavBlock/FavBlockEN";

export default function Home() {
    // const cookieStore = cookies()
    // const cookes = cookieStore.getAll().map((cookie) => (
    //     <div key={cookie.name}>
    //         <p>Name: {cookie.name}</p>
    //         <p>Value: {cookie.value}</p>
    //     </div>
    // ))
    // console.log(cookes);

    return (
        <div>
            <Container>
                <Header />
                <FavBlock />
                <Footer />
            </Container>
        </div>
    )
}