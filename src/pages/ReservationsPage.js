import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "aws-amplify";
import { useHistory } from "react-router";
import { userContext } from "../contexts/userContext";
import Product from "../components/Product";
import Loading from "../components/Loading";

export default function ReservationsPage() {
    const { user } = useContext(userContext);
    const [reservationsArr, setReservationsArr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    if(!user) history.push("/sign-in");

    const fetchReservations = async () => {
        let result;
        setIsLoading(true);
        try{
            result = await API.get("reservation",`/product-per-user/${user}`);
            setReservationsArr(result);
        }catch(err){
            console.log(err);
        }
        setIsLoading(false);
    };

    useState(() => {
        fetchReservations()
    },[])

    return (
        <Container>
            <ReservationsBox>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h3>My Purchase Reservations</h3>  
                        {reservationsArr &&
                            reservationsArr.map(prod => {
                                return (
                                    <Product
                                    key={prod.registrationId}
                                    id={prod.minionId}
                                    imageKey={prod.attachment}
                                    title={prod.content.title}
                                    description={prod.content.description}
                                    price={prod.content.price}
                                    createdAt={prod.createdAt}
                                    disable={true}
                                    />
                                );
                            })
                        }
                </>
            )}
            </ReservationsBox>
        </Container>
    );
}


const Container = styled.div`
    margin-top: calc(50vh - 23.4rem);
    width:100%;
    height:auto;    
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    h3{
        color:#0A75BC;
        width:100%;
        font-size:1.5rem;
        text-align:center;
        margin-bottom: 2rem;
    }
    
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

const ReservationsBox = styled.div`

`;