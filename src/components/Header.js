import React, { useContext } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { userContext } from "../contexts/userContext";
import styled from "styled-components";
import LogoMinion from "../assets/logo-minion.png";

export default function Header() {
    const { isLogged, setIsLogged } = useContext(userContext);
    const history = useHistory();

    const logoutHandler = async () => {
        try{
            await Auth.signOut();
            setIsLogged(false);
            history.push("/")
        }catch(err){
            console.log(err.message)
        }    
    };    

    return (
        <Container>
            <TiltedHeader/>
            <h1 onClick={() => history.push("/")}>
                MINION STORE
            </h1>
            {isLogged ? (
                <>
                    <Button onClick={() => logoutHandler()}>
                        Logout
                    </Button>

                    <ReservationButton 
                    onClick={() => history.push("/my-reservations")}
                    >
                        My Reservations
                    </ReservationButton>
                </>
            ) : (
                <Button onClick={() => history.push("sign-in")}>
                    Sign In
                </Button>
            )}
            
            <Logo src={LogoMinion}/>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    z-index: 9999;
    top:-4rem;
    left:-0.5rem;
    width: calc(100vw + 3rem);
    height:16rem;   
    overflow: hidden;    
    transform: rotate(4.13deg);
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.63);
    

    h1{
        position: absolute;
        top:7.5rem;
        left: calc(33vw);        
        color: #A87A51;
        font-family: var(--titleFont);
        font-size: 5rem;
        text-shadow: 2px 2px 6px #000000;
        transform: rotate(-4.13deg);
        cursor: pointer;
    }
`;

const TiltedHeader = styled.header`
    position: absolute;
    width: calc(100vw + 2rem);
    height: 25rem;    
    top: -7.5rem;
    filter: blur(1px);
    background: linear-gradient(269.69deg, #0A75BC 0.8%, #0B99F7 20.89%, rgba(10, 117, 188, 0.87) 22.15%, #FCE029 22.16%, #FCE029 99.5%);
`;

const Logo = styled.img`
    position: absolute;
    right: 6.5rem;
    bottom:-0.6rem;
    transform: rotate(-3.3deg); 
`;

const Button = styled.button`
    position: absolute;
    top:5rem;
    left: calc(3vw);
    min-width: 6rem;
    height: 2rem;
    margin-top: 4rem;
    background-color: #231F20;
    color: white;
    padding: 0.2rem;
    border:none;
    outline:none;
    border-radius: 0.5rem;
    cursor: pointer;
    transform: rotate(-4.13deg);
`;

const ReservationButton = styled.button`
    position: absolute;
    top:8rem;
    left: calc(2.5vw);
    min-width: 6rem;
    height: 2rem;
    margin-top: 4rem;
    background-color: #231F20;
    color: white;
    padding: 0.2rem;
    border:none;
    outline:none;
    border-radius: 0.5rem;
    cursor: pointer;
    transform: rotate(-4.13deg);
`;
