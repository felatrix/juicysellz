import React from 'react';
import logo from './logo.svg';
import './App.css';

import './assets/fonts/stylesheet.css'
import './assets/fonts/stylesheet2.css'

import Navbar from './components/navbar/navbar.component'

//halaman
import Home from './pages/home/home.page'
import Drinks from './pages/drinks/drinks.pages'

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
    <Switch>
      <Route path="/" exact component={Home}>
      </Route>
      <Route path="/drinks" component={Drinks}>
      </Route>
      <Route path="/contact" exact>
        Contact
      </Route>
      <Route path="/getin" exact>
        Get In
      </Route>
    </Switch>
  </div>
</BrowserRouter>

);
}

export default App;