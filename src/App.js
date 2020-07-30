import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/fonts/stylesheet.css'
import Navbar from './components/navbar/navbar.component'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
return (
  <BrowserRouter>
      <div className="App">
      <Navbar></Navbar>
    </div>
    <Switch>
      <Route path="/" exact >
        Home
      </Route>
      <Route path="/drinks" exact >
        Drinks
      </Route>
      <Route path="/contact" exact >
        Contact
      </Route>
      <Route path="/getin" exact >
        Get In
      </Route>
    </Switch>
  </BrowserRouter>

);
}

export default App;