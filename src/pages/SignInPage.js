import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../contexts/userContext";
import styled from "styled-components";
import { Auth } from "aws-amplify";

export default function SignIn() {
    const { setIsLogged } = useContext(userContext);    

    const [email, setEmail] = useState("admin@example.com");
    const [pwd, setPwd] = useState("JN4t24..");

    const history = useHistory();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            await Auth.signIn(email, pwd);
            setIsLogged(true);
            history.push("/")
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <Container>
            <SignInContainer>
                <h1>WELCOME!</h1>
                <Form onSubmit={e => handleSignIn(e)}>
                    <div>
                        <span>
                            <label htmlFor="name">E-mail</label>
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
                            <label htmlFor="cpf">Password</label>
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
                    <SignInButton type="submit">Sign-In</SignInButton>
                    <p>Register now</p>
                </Form>
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
    height: 20rem;
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