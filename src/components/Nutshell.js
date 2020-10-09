import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationView"
import { Login } from "./Auth/Login"
import { Register } from "./Auth/Register"
import { NavBar } from "./Navbar/Navbar"

export const Nutshell = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("nutshell_customer")) {
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );