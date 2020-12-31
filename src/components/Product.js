import React, { useState, useEffect, useContext } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/userContext";
import styled from "styled-components";
import LoadingGif2 from "../assets/loading2.gif";


export default function Product(
    {disable = false, 
    id,
    imageKey,
    title,
    description,
    price,
    createdAt = false}) {

    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState("");
    const { isLogged } = useContext(userContext);

    const fetchImage = async () => {
        setIsLoading(true);
        try{
            const url = await API.get('list', `/image/${imageKey}`);
            setImage(url);
        }catch(err){
            console.error(err.message);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchImage();

        if(createdAt){
            const aux = new Date(parseInt(createdAt));
            let d = aux.toDateString();
            setDate(d);
        }
    },[date]);   
    
    
    
    

    return (
        
        <ProductContainer>
            <Link to={isLogged ? `/reservation/${id}` : "/sign-in"} 
                onClick={(e) => 
                {if(disable || isLoading) e.preventDefault()}}
            >
                <img src={isLoading ? LoadingGif2 : image} alt={title}/>
                <div>
                    <span>
                        <h1>{isLoading ? "loading" : title}</h1>
                        <p>{isLoading ? "loading" : price}</p>
                    </span>

                    <sub>
                        {isLoading ? "loading" : description}
                        <br/>
                        <br/>
                        {createdAt ?
                            isLoading ? 
                            "loading" :
                            `Purchased on ${date}` :
                            ""
                        }
                    </sub>
                </div>
            </Link>
        </ProductContainer>
        
    );
}

const ProductContainer = styled.div`
    width: 18rem;
    height: 20rem;
    margin-left:2rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    border: 1px solid black;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;    

    img{
        width:12rem;
        height: 12rem;
        cursor: pointer;
        margin: 0 3.5rem;        
    }    

    div{
        padding:0.5rem;
        display:flex;
        width:100%;
        height:10rem;
        flex-direction:column;        
        background-color: gray;
        box-shadow: inset 0px 0px 14px rgba(0, 0, 0, 0.6);
        cursor: pointer;

        & > span{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding: 0 1rem;

            h1{
            font-family: var(--titleFont);
            font-size:1.5rem;
            }

            p{
                color:#FCE029;
            }
        }

        sub{
            height: 100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding: 0 1rem 2rem 1rem;
            margin-top:1rem;
        }
    }
`;