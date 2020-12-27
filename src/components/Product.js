import React from "react";
import styled from "styled-components";

export default function Product({image,title,description,price}) {
    return (
        
        <ProductContainer>
            <img src={image}/>
            <div>
                <span>
                    <h1>{title}</h1>
                    <p>{price}</p>
                </span>
                <sub>
                    {description}
                </sub>
            </div>
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
    cursor: pointer;

    img{
        width:12rem;
        height: auto;
    }    

    & > div{
        padding:0.5rem;
        display:flex;
        width:100%;
        height:100%;
        flex-direction:column;        
        background-color: gray;
        box-shadow: inset 0px 0px 14px rgba(0, 0, 0, 0.6);

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
            padding: 0 1rem;
            margin-top:1rem;
        }
    }
`;