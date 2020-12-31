import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../contexts/userContext";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import Spinner from "../assets/spinner.gif";
import WhatGif from "../assets/what-gif.gif";

export default function SignIn() {
    const { isLogged, setIsLogged, setUser, setSessionEmail } = useContext(userContext);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [wrongLogin, setWrongLogin] = useState(false);

    const history = useHistory();

    if(isLogged) history.push("/");

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        let user;

        try {
            user = await Auth.signIn(email, pwd);
            setUser(user.username);
            setSessionEmail(email);
            setIsLogged(true);
            history.push("/");
        } catch (e) {
            if(e.message === "Incorrect username or password."){
                setWrongLogin(true);
                setTimeout(() => {
                    setWrongLogin(false);
                },3000);
            }  
            if(e.message === "User is not confirmed.") 
                history.push("/verify-email");
        }
        setIsLoading(false);
    };

    return (
        <Container>
            <SignInContainer>
                <h1>WELCOME!</h1>
                {isLoading ? (
                    <img src={Spinner} alt="loading" />
                ) : wrongLogin ? (
                    <>
                        <h2>Wrong e-mail or password!</h2>
                        <img src={WhatGif} alt="wrong-login" />
                    </>
                ) : (
                    <Form onSubmit={e => handleSignIn(e)}>
                        <div>
                            <span>
                                <label htmlFor="email">E-mail</label>
                                <input
                                autoFocus
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email" 
                                required 
                                id="email" 
                                name="email" 
                                placeholder="Enter your e-mail..."/>
                            </span>
                            <span>
                                <label htmlFor="pwd">Password</label>
                                <input
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                                minLength="6"
                                type="password" 
                                required 
                                id="pwd" 
                                name="pwd" 
                                placeholder="Enter your password..."/>
                            </span>
                        </div>
                        <SignInButton type="submit">
                            Sign-In
                        </SignInButton>
                        <p onClick={() => history.push("/register")}>
                            Register now
                        </p>
                    </Form>
                )}
            </SignInContainer>
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
const SignInContainer = styled.div`
    width: 40rem;
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    padding:2rem;
    margin-left:2rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    background-color:#FCE029;
    box-shadow: 6px 7px 14px rgba(0, 0, 0, 0.63);

    h1{
        font-family: var(--titleFont);
        color:#0A75BC;
        font-size: 2.5rem;
        text-shadow: 2px 2px 2px #000000;
    }

    h2{
        width:100%;
        text-align:center;
        color:#231F20;
        font-size: 1.5rem;
        margin: 1rem;
    }
`;

const Form = styled.form`
    width:100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;  
    color: #949699;

    p{
        margin-top: 0.5rem;
        color: #0A75BC;
        cursor: pointer;
    }

    & > div{
        width:100%;
        height: 60%;
        display:flex;
        margin-top: 2rem;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
    }

    span{        
        display:flex;
        flex-direction:column;

        input[type="password"]::placeholder{
            font-style:italic;
            text-align:center;            
        }        

        input[type="email"]::placeholder{
            font-style:italic;
            text-align:center;            
        }

        input{
            outline:none;
            border:none;
            border-bottom: 1px solid slategray;
            margin-bottom:1rem;
            width:18rem;
            height: 2rem;
            border-radius:0.5rem;
        }
    }
`;

const SignInButton = styled.button`
    width: 8rem;
    height: 2rem;
    margin-top: 2rem;
    background-color: #231F20;
    color: white;
    padding: 0.2rem;
    border:none;
    outline:none;
    border-radius: 0.5rem;
    cursor: pointer;
`;