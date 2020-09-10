import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
