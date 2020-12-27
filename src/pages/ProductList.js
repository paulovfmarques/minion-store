import React from "react";
import styled from "styled-components";
import { productData } from "../data/product-data";
import Product from "../components/Product";

export default function ProductList() {
    return (
        <ListContainer>
            <div>
                {
                    productData.map(product => {
                        return (
                            <Product
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            />
                        );
                    })
                }
            </div>
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
