import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Manrope } from "next/font/google";
import Image from "next/image";


const manrope = Manrope({
    weight: ["500", "600", "700"],
    subsets: ["cyrillic", "latin"],
})

interface Block {
    id: number;
    title: string;
    photo: string;
}

interface Story {
    id: string;
    block: Block;
    title: string;
    start_date: string;
    end_date: string;
    content: string;
    image: string;
}

const StoryVideo = ({ id, block, title, start_date, end_date, content, image }: Story) => {

    const play = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>`;
    const pause = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`;

    const timeline = document.querySelector(`.timeline${id}`) as HTMLInputElement;
    const videoContainer = document.querySelector('.video-player');
    const video = document.querySelector(`.video${id}`) as HTMLVideoElement;
    const playButton = document.querySelector(`.play-button${id}`);

    const [isPlaying, setPlaying] = useState(false);

    const Play = "/img/Story/play.png";
    const Pause = "/img/Story/pause.png";

    const handlePlayPause = () => {
        if (playButton) {
            setPlaying(!isPlaying);
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
        }
    };

    if (video) {
        video.onended = function () {
            setPlaying(false);
        };

        video.addEventListener("pause", function () {
            setPlaying(false);
        })

        video.addEventListener("playing", function () {
            setPlaying(true);
        })

        video.ontimeupdate = function () {
            const percentagePosition = (100 * video.currentTime) / video.duration;
            timeline.style.backgroundSize = `${percentagePosition}% 100%`;
            timeline.value = percentagePosition.toString();
        };

        timeline.addEventListener('change', function () {
            const time = (parseFloat(timeline.value) * video.duration) / 100;
            video.currentTime = time;
        });
    }

    return (
        <Wrapper className="video-player">
            <ControlPanel>
                <input type="range" min="0" max="100" defaultValue="0" className={`timeline${id}`} />
                <InfoBlock>
                    <ImageBlock>
                        <Image src={image} width={34} height={34} alt="" />
                    </ImageBlock>
                    <Title className={manrope.className}>
                        {title}
                    </Title>
                    <StyledButton className={`play-button${id}`} onClick={handlePlayPause}>
                        <Image src={isPlaying ? Pause : Play} width={24} height={24} alt="" />
                    </StyledButton>
                </InfoBlock>
            </ControlPanel>
            <video className={`video${id}`}>
                <source src={content} />
            </video>
        </Wrapper>
    )
}

const ControlPanel = styled.div`
    display: flex;
    padding: 23px 18px 0px 18px;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    position: absolute;
    z-index: 5;
    

    input {
        -webkit-appearance: none;
        width: 100%;
        height: 3px;
        background-color: #555555;
        border-radius: 10px;
        background-size: 0% 100%;
        background-image: linear-gradient(#B6020D, #B6020D);
        background-repeat: no-repeat;
    }

    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: all .1s;
        background-color: #fff;
    }

    input::-webkit-slider-thumb:hover {
        background-color: #fff;
    }

    input:hover::-webkit-slider-thumb {
        opacity: 1;
    }

    input::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
    
`

const InfoBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 7px;
`

const Wrapper = styled.div`
    flex-shrink: 0;
    display: flex;
    border-radius: 14px;
    background: #181818;
    overflow: hidden;
    position: relative;

    video::-webkit-media-controls-timeline,
    video::-webkit-media-controls-current-time-display,
    video::-webkit-media-controls-time-remaining-display,
    video::-webkit-media-controls-play-button {
        display: none;
    }

    video {
        width: 100%;
        height: 100%;
        cursor: pointer;
        object-fit: fill;
    }
`

const Title = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`

const ImageBlock = styled.div`
    background: #1F1E1F;
    display: flex;
    width: 34px;
    height: 34px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
`

const StyledButton = styled.button`
    display: flex;
    margin-left: auto;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    transition: all .2s;
    width: 24px;
    height: 24px;
`


export default StoryVideo;