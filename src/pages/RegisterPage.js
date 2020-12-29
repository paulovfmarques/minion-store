import React, { useState } from "react";
import styled from "styled-components";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    return (
        <Container>
            <RegisterContainer>
                <h1>Create an account</h1>
                <Form onSubmit={e => e.preventDefault()}>
                    <div>
                        <span>
                            <label htmlFor="name">Name</label>
                            <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" 
                            required 
                            id="name" 
                            name="name" 
                            placeholder="Enter your name..."/>
                        </span>
                        <span>
                            <label htmlFor="email">E-mail</label>
                            <input
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
                        <span>
                            <label htmlFor="confirm-pwd">Password confirmation</label>
                            <input
                            value={confirmPwd}
                            onChange={e => setConfirmPwd(e.target.value)}
                            minLength="6"
                            type="password" 
                            required 
                            id="confirm-pwd" 
                            name="confirm-pwd" 
                            placeholder="Enter your password again..."/>
                        </span>
                    </div>
                    <ConfirmButton type="submit">Confirm</ConfirmButton>
                </Form>
            </RegisterContainer>
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
const RegisterContainer = styled.div`
    width: 30rem;
    height: 30rem;
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
        margin-bottom: 1rem;
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
    
    label{
        margin-bottom: 0.2rem;
    }

    span{        
        display:flex;
        flex-direction:column;

        input[type="password"]::placeholder{
            font-style:italic;
            text-align:center;            
        }

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

const ConfirmButton = styled.button`
    width: 8rem;
    height: 2rem;
    margin-top: 3rem;
    background-color: #231F20;
    color: white;
    padding: 0.2rem;
    border:none;
    outline:none;
    border-radius: 0.5rem;
    cursor: pointer;
`;