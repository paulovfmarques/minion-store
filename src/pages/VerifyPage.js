import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import Spinner from "../assets/spinner.gif";

export default function VerifyPage() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [wrongCode, setWrongCode] = useState(false);

    const history = useHistory();

    const handleVerify = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try{
            await Auth.confirmSignUp(email,code);
            alert("Your e-mail is now verified!");
            history.push("/sign-in");
        }catch(err){
            setWrongCode(true);
            setTimeout(() => {
                setWrongCode(false);
            },2000);
        }
        setIsLoading(false);        
    };

    return (
        <Container>
            <VerifyContainer>
                <h1>Verify your e-mail</h1>
                {isLoading ? (
                    <img src={Spinner} alt="loading" />
                ) : wrongCode ? (
                        <h2>Wrong code!</h2>
                ) : (
                    <Form onSubmit={e => handleVerify(e)}>
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
                                <label htmlFor="code">Verification Code</label>
                                <input
                                value={code}
                                onChange={e => setCode(e.target.value)}
                                minLength="6"
                                type="text" 
                                required 
                                id="code" 
                                name="code" 
                                placeholder="Enter your code..."/>
                            </span>
                        </div>
                        <SignInButton type="submit">
                            Verify
                        </SignInButton>
                        <p onClick={()=>history.push("/sign-in")}>
                            Return to Sign In
                        </p>
                    </Form>
                )}
            </VerifyContainer>
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
const VerifyContainer = styled.div`
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
        text-shadow: 1px 1px 1px #000000;
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

        input[type="text"]::placeholder{
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