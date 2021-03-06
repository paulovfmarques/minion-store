import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Amplify, Auth } from "aws-amplify";
import config from "./utils/config";
import ReservationProvider from "./contexts/reservationContext";
import UserProvider from "./contexts/userContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignInPage";
import Register from "./pages/RegisterPage";
import ProductList from "./pages/ProductList";
import FormPage from "./pages/FormPage";
import SuccessPage from "./pages/SuccessPage";
import ReservationsPage from "./pages/ReservationsPage";
import VerifyPage from "./pages/VerifyPage";


//The mandatorySignIn flag for Auth is set to true because we want our users to be signed
//in before they can interact with our app.
Amplify.configure({ 
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "reservation",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
      {
        name: "list",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
      {
        name: "confirmation",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  async function persistentSignIn() {
    setIsAuthenticating(true);
    try {
        const persistentUser = await Auth.currentSession();
        setIsLogged(true);
        setUser(persistentUser.accessToken.payload.username);
    }
    catch(err) {
        console.log(err)
    }
    setIsAuthenticating(false);
  }

  useEffect(() => {
    persistentSignIn();
  },[]);    


  return (
    <UserProvider
      isLogged={isLogged}
      setIsLogged={setIsLogged}
      isAuthenticating={isAuthenticating}
      setIsAuthenticating={setIsAuthenticating}
      user={user}
      setUser={setUser}
    >
      <ReservationProvider>
        <GlobalStyle/>
          <Router>
            <Header/>
            {isAuthenticating ? (
              ""
            ) : (
              <Switch>
                <Route path="/" exact component={ProductList}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/register" component={Register}/>
                <Route path="/reservation/:id" component={FormPage}/>
                <Route path="/success" component={SuccessPage}/>
                <Route path="/my-reservations" component={ReservationsPage}/>
                <Route path="/verify-email" component={VerifyPage}/>
              </Switch>
            )}
          </Router>
          <Footer/>
      </ReservationProvider>
    </UserProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
:root {

  --headerGradient: linear-gradient(269.69deg,
    #0A75BC 0.8%, #0B99F7 30.89%,
    rgba(10, 117, 188, 0.87) 32.15%,
    #FCE029 32.16%, #FCE029 99.5%);

  --generalFont: 'Roboto', sans-serif;
  --titleFont: 'Bangers', cursive;
}

body {
  font-family: var(--generalFont);
  color: white;
}

/* #root {
  min-height: 100vh;
  width: 100%;  
} */
`;
