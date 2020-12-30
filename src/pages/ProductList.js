import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { API, Auth } from "aws-amplify";
import { userContext } from "../contexts/userContext";
import { reservationContext } from "../contexts/reservationContext";
import Product from "../components/Product";
import Loading from "../components/Loading";

export default function ProductList() {    
    const { productsArr, setProductsArr } = useContext(reservationContext);
    const { setIsLogged } = useContext(userContext);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const listProducts = async () => {
        setIsLoading(true);
        try{
            const result = await API.get("list","/list");
            setProductsArr(result);
        }catch(err){
            console.log(err)
        }
        setIsLoading(false);
    };

    async function persistSignIn() {
        setIsAuthenticating(true);
        try {
            await Auth.currentSession();
            setIsLogged(true);
        }
        catch(err) {
            console.log(err)
        }
        setIsAuthenticating(false);
    }

    useEffect(() => {
        persistSignIn();
        listProducts();
    },[]);    

    return (
        <ListContainer>
            {isLoading || isAuthenticating ? (
                <Loading />
            ) : (
                <div>
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
        display: flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        padding: 10rem 5rem 5rem 5rem;
    }
`;
