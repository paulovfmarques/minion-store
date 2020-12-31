import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [invalid, setInvalid] = useState(false);
    const [hasToVerify, setHasToVerify] = useState(false);

    const history = useHistory();

    useEffect(() => {
        let invalidPwdAlert;
        clearTimeout(invalidPwdAlert);

        invalidPwdAlert = setTimeout(() => {
            if(pwd !== confirmPwd) setInvalid(true)
            else setInvalid(false)
        },800);

    },[confirmPwd]);    

    const signUpHandler = async (e) => {
        e.preventDefault();
        
        try{
            await Auth.signUp({
                username: email,
                password: pwd,
                attributes: {
                    email
                }
            });
            setHasToVerify(true);
            history.push("/sign-in");
        }catch(err){
            console.log(err.message)
            alert("An error occured! Try again in a few moments");
        }
    };

    return (
        <Container>
            <RegisterContainer>
                {hasToVerify ? (
                    <h2>
                        Please, check your email to verify it!
                    </h2>
                ) : (
                    <>
                    <h1>Create an account</h1>
                    <Form onSubmit={e => signUpHandler(e)}>
                        <div>
                            <span>
                                <label htmlFor="name">Name</label>
                                <input
                                autoFocus
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
                            <p>Password must contain at least one symbol</p>
                            {invalid ? <strong>Passwords do not match!</strong> : ""}
                        </div>
                        <ConfirmButton disabled={invalid} type="submit">
                            {invalid ? "Check your password" : "Confirm"}
                        </ConfirmButton>
                    </Form>
                    </>
                )}
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
    height:auto;
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

    h2,h1{
        text-align:center;
        font-family: var(--titleFont);
        color:#0A75BC;
        font-size: 2.5rem;
        text-shadow: 2px 2px 2px #000000;
        margin-bottom: 1rem;
    }

    h2{
        font-size: 2rem;
    }
`;

const Form = styled.form`
    position:relative;
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

    strong{        
        position:absolute;
        bottom: 4rem;
        font-style: italic;
        color: red;
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
    min-width: 8rem;
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