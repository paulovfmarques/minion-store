import React from "react";
import styled from "styled-components";
import AlertMinion from "../assets/alert-minion.png";

export default function Footer() {
    return (
        <FooterContainer>
            <div>
            <img src={AlertMinion} alt="alert"/>
            <h2>MAKE YOUR purchase RESERVATION now or regret forever!</h2>
           </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    position: fixed;
    bottom:0rem;
    left:0rem;
    display:flex;
    justify-content:center;
    background-color: #231F20;
    width: 100vw;
    height:6rem;

    & > div{
        display: flex;
        align-items:center;
    }

    h2{
        font-family: var(--titleFont);
        font-size:2.5rem;
        color:white;
    }
`;