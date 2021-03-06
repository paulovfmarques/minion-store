import React, { useContext } from "react";
import { useHistory } from "react-router";
import { userContext } from "../contexts/userContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { reservationContext } from "../contexts/reservationContext";
import ShoppingGif from "../assets/giphy.gif"

export default function SuccessPage() {
    const { reservationDone } = useContext(reservationContext);
    const { user } = useContext(userContext);

    const history = useHistory();
    if(!user) history.push("/sign-in");

    return (
        <Container>
            <Success>
                {reservationDone ? (
                    <>
                        <h1>CONGRATULATIONS!</h1>
                        <img src={ShoppingGif} alt="shopping"/>
                        <h2>Now just wait patiently as
                        we set things up for you to buy your minion!
                        </h2>
                    </>
                ) : (
                    <h2>Ooops! You did not make a reservation mate! Go back..</h2>
                )}
                <Link to="/">
                    <ReturnButton>
                        Return to main page
                    </ReturnButton>
                </Link>
            </Success>
        </Container>
    );
}

const Container = styled.div`
    margin-top: calc(50vh - 23.4rem);
    width:100%;
    height:auto;    
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 12rem 5rem 5rem 5rem;    
`;

const Success = styled.div`
    width: 80rem;
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    padding:2rem;
    margin-left:2rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    border: 1px solid black;
    background-color:#FCE029;

    img{
        width: 15rem;
        height: auto;
        margin:1rem;
    }

    h1{
        font-family: var(--titleFont);
        color:#0A75BC;
        font-size: 5rem;
    }

    h2{
        font-family: var(--titleFont);
        color:#A87A51;
        font-size:3rem;
        text-align:center;
    }
`;

const ReturnButton = styled.button`
    width: 14rem;
    height: 2rem;
    margin-top: 4rem;
    background-color: #231F20;
    color: white;
    padding: 0.2rem;
    border:none;
    outline:none;
    border-radius: 0.5rem;
    cursor: pointer;
`;