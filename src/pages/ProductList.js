import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { userContext } from "../contexts/userContext";
import { reservationContext } from "../contexts/reservationContext";
import Product from "../components/Product";
import Loading from "../components/Loading";

export default function ProductList() {    
    const { listProducts, productsArr, isLoading } = useContext(reservationContext);
    const { isLogged, isAuthenticating} = useContext(userContext);

    useEffect(()=>{
        listProducts()
    },[])
    
    return (
        <ListContainer>
            {isLoading || isAuthenticating ? (
                <Loading />
            ) : (
                <div>
                    {isLogged? "" : <p>You are not logged in</p>}
                    {productsArr &&
                        productsArr.map(prod => {
                            return (
                                <Product
                                key={prod.minionId}
                                id={prod.minionId}
                                imageKey={prod.attachment}
                                title={prod.content.title}
                                description={prod.content.description}
                                price={prod.content.price}
                                />
                            );
                        })
                    }
                </div>
            )}
        </ListContainer>
    );
}

const ListContainer = styled.div`
    margin-top: calc(50vh - 20.4rem);
    width:100%;
    height:auto;    
    display:flex;
    align-items:center;
    justify-content:center;
    
    & > div{
        position:relative;        
        display: flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        padding: 10rem 0rem 5rem 0rem;

        > p{
            position: absolute;
            top:7rem;
            color: black;
        }
    }
`;
