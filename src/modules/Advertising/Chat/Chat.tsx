import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300", "400"],
    subsets: ["cyrillic", "latin"],
    style: ["normal", "italic"],
})

const ChatContainer = styled.div`
    display: flex;
    width: 479px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px;
    flex-direction: column;
    justify-content: space-between;
`
const MessageOne = styled.div`
    display: flex;
    width: 262px;
    height: 62px;
    flex-shrink: 0;
    border-radius: 12px 12px 1px 12px;
    background: #1F1E1F;
    padding: 10px 13px 5px 13px;
    margin-left: auto;
    flex-direction: column;
    gap: 0px;
`
const MessageText = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`
const MessageInfo = styled.div`
    display: flex;
    gap: 5px;
    margin-left: auto;
    align-items: center;
`
const Time = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const ImageBlock = styled.div`
    display: flex;
    width: 316px;
    height: 316px;
    flex-shrink: 0;
    border-radius: 12px 12px 12px 1px;
    border: 1px solid #B6020D;
    overflow: hidden;
    position: relative;
`
const ImageTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 9px;
    right: 9px;
    width: 40px;
    height: 17px;
    flex-shrink: 0;
    border-radius: 9.5px;
    background: #B6020D;
`
const ImageText = styled.p`
    color: rgba(255, 255, 255, 0.70);
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`
const MessageTwo = styled.div`
    display: flex;
    margin-left: auto;
    width: 237px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 12px 12px 1px 12px;
    background: #1F1E1F;
    padding: 10px 13px 5px 13px;
    flex-direction: column;
    gap: 1px;
`

const Chat = () => {
    return (
        <ChatContainer>
            <MessageOne>
                <MessageText className={roboto.className}>
                    Не знаю, вже всі смаки скуштував, все якесь однакове і нудне...
                </MessageText>
                <MessageInfo>
                    <Time>
                        19:02
                    </Time>
                    <Image src={'/img/Advertising/Chat/tick-r.svg'} width={13} height={7} alt="" />
                </MessageInfo>
            </MessageOne>
            <ImageBlock>
                <Image src={"/img/Card/rb.jpg"} width={315} height={315} alt="" />
                <ImageTime>
                    <ImageText>
                        19:03
                    </ImageText>
                </ImageTime>
            </ImageBlock>
            <MessageTwo>
                <MessageText className={roboto.className}>
                    Добре, схоже що не всі)
                </MessageText>
                <MessageInfo>
                    <Time>
                        19:06
                    </Time>
                    <Image src={'/img/Advertising/Chat/tick-r.svg'} width={13} height={7} alt="" />
                </MessageInfo>
            </MessageTwo>
        </ChatContainer>
    )
}

export default Chat;