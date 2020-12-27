import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Product({disable = false, id,image,title,description,price}) {
    return (
        
        <ProductContainer>
            <Link to={`/reservation/${id}`} 
                onClick={(e) => 
                {if(disable) e.preventDefault()}}
            >
                <img src={image} alt={title}/>
                <div>
                    <span>
                        <h1>{title}</h1>
                        <p>{price}</p>
                    </span>
                    <sub>
                        {description}
                    </sub>
                </div>
            </Link>
        </ProductContainer>
        
    );
}

const ProductContainer = styled.div`
    width: 18rem;
    height: 20rem;
    margin-left:5rem;
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