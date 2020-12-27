import React from "react";
import styled from "styled-components";
import LogoMinion from "../assets/logo-minion.png";

export default function Header() {
    return (
        <Container>
            <TiltedHeader/>
            <h1>MINION STORE</h1>
            <Logo src={LogoMinion}/>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    top:-4rem;
    left:-0.5rem;
    width: calc(100vw + 3rem);
    height:16rem;   
    overflow: hidden;    
    transform: rotate(4.13deg);
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.63);
    

    h1{
        position: absolute;
        top:4.5rem;
        left: calc(33vw);
        width:100%;
        color: #A87A51;
        font-family: var(--titleFont);
        font-size: 5rem;
        text-shadow: 2px 2px 6px #000000;
        transform: rotate(-4.13deg);        
    }
`;

const TiltedHeader = styled.header`
    position: absolute;
    width: calc(100vw + 2rem);
    height: 25rem;    
    top: -7.5rem;
    filter: blur(1px);
    background: linear-gradient(269.69deg, #0A75BC 0.8%, #0B99F7 20.89%, rgba(10, 117, 188, 0.87) 22.15%, #FCE029 22.16%, #FCE029 99.5%);
    
    /* transform: rotate(4.13deg);    */
`;

const Logo = styled.img`
    position: absolute;
    right: 6.5rem;
    bottom:-0.6rem;
    transform: rotate(-3.3deg); 
`;