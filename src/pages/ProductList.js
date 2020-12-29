import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { API } from "aws-amplify";
import { reservationContext } from "../contexts/reservationContext";
import Product from "../components/Product";
import Loading from "../components/Loading";

export default function ProductList() {    
    const { productsArr, setProductsArr } = useContext(reservationContext);
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

    useEffect(() => listProducts(),[]);    

    return (
        <ListContainer>
            {isLoading ? (
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
