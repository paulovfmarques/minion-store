import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { productData } from "../data/product-data";
import Product from "../components/Product";
import { reservationContext } from "../contexts/reservationContext";
import { formatPhone, cpfMask } from "../utils/masks";


export default function FormPage() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const { setReservationDone } = useContext(reservationContext);

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => setReservationDone(false),[]);

    const submitHandler = (e) => {
        e.preventDefault();
        setReservationDone(true);
        history.push("/success")
    }

   

    const { image,
            title,
            description,
            price } = productData.filter(prod => prod.id.toString() === id)[0];
    
    return (
        <ReservationContainer>
            <Product
            disable={true}
            image={image}
            title={title}
            description={description}
            price={price}
            />
            <FormContainer>
                <span>
                    <h2>
                        Fill out the form below to complete your reservation                    
                    </h2>
                    <ReturnButton onClick={() => history.push("/")}>
                        Cancel
                    </ReturnButton>
                </span>
                <Form onSubmit={e => submitHandler(e)}>
                    <div>
                        <span>
                            <label htmlFor="name">Name</label>
                            <input
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="text" 
                            required 
                            id="name" 
                            name="name" 
                            placeholder="Enter your name..."/>
                        </span>
                        <span>
                            <label htmlFor="cpf">SSN/CPF</label>
                            <input
                            onChange={e => cpfMask(e.target.value, setCpf)}
                            maxLength="14"
                            value={cpf}
                            type="text" 
                            required 
                            id="cpf" 
                            name="cpf" 
                            placeholder="Enter your SSN/CPF..."/>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="phone">Phone</label>
                            <input
                            onChange={(e) => formatPhone(e.target.value, setPhone)}
                            maxLength="11"
                            value={phone}
                            type="tel" 
                            required 
                            id="phone" 
                            name="phone" 
                            placeholder="Enter your phone..."/>
                        </span>
                        <span>
                            <label htmlFor="email">E-Mail</label>
                            <input
                            onChange={e => setEmail(e.target.value)}
                            value={email} 
                            type="email" 
                            required id="email" 
                            name="email" 
                            placeholder="Enter your E-Mail..."/>
                        </span>
                    </div>
                    <CompleteButton type="submit">Complete</CompleteButton>
                </Form>
            </FormContainer>
        </ReservationContainer>
    );
}

const ReservationContainer = styled.div`
    margin-top: calc(50vh - 20.4rem);
    width:100%;
    height:auto;    
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 12rem 5rem 5rem 5rem;
`;

const FormContainer = styled.div`
    width: 50rem;
    height: 20rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-left:2rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    border: 1px solid black;

    & > span{
        display:flex;
        width:100%;
        justify-content:space-between;
        align-items:center;
        margin-top:1rem;
        padding: 0 4.6rem;

        h2{
            width:100%;
            font-size:1.5rem;
            color:#A87A51;       
        }
    }

   
`;

const Form = styled.form`
    width:100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;  
    color: #949699;

    & > div{
        width:100%;
        display:flex;
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

        input[type="tel"]::placeholder{
            font-style:italic;
            text-align:center;            
        }

        input[type="email"]::placeholder{
            font-style:italic;
            text-align:center;            
        }

        input{
            width:18rem;
            height: 2rem;
            border-radius:0.5rem;
        }
    }
`;

const ReturnButton = styled.button`
    width:4rem;
    height: 1.2rem;
    background-color: #231F20;
    font-size: 0.8rem;
    color:white;
    border:none;
    outline:none;
    border-radius:0.5rem;
    cursor: pointer;
`;

const CompleteButton = styled.button`
    width:8rem;
    background-color:#0A75BC;
    color: white;
    height: 2rem;
    border:none;
    outline:none;
    border-radius:0.75rem;
    cursor: pointer;
`;