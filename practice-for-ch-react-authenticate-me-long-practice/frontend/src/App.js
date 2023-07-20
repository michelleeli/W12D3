import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import BenchIndexPage from "./components/BenchIndexPage";
import BenchShowPage from "./components/BenchShowPage";
import BenchForm from "./components/BenchFormPage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
        <Route exact path="/">
          <BenchIndexPage />
        </Route>
        <Route exact path="/benches/new">
          <BenchForm />
        </Route>
        <Route path="/benches/:benchId">
          <BenchShowPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;