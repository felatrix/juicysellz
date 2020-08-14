import React,{useState,useEffect} from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.component'
import Popup_Order from './components/poporder/popup_order.component'

//halaman
import Home from './pages/home/home.page'
import Drinks from './pages/drinks/drinks.pages'
import GetIn from './pages/getin/getin.pages'
import SignUp from './pages/signup/signup.pages'
import Contact from './pages/contact/contact.pages'

import {
BrowserRouter as Router,
Switch,
Route,
Link,
BrowserRouter,
Redirect
} from "react-router-dom";

import {auth,createdUserProfileDoc} from './utils/firebase.utils'


import {connect} from 'react-redux'

import SetUserAction  from './utils/redux/user/setUser.action'

import SandBox from './sandbox/index'

import DevEd from './sandbox/devEd'

function App({currentUser,setCurrentUser,isiState,isOrder}) {
  // const [currentUser,setCurrentUser] = useState({currentUser:null})
  useEffect(()=>{
    auth.onAuthStateChanged(
      async user =>{
        if(user){
         const userRef =  await createdUserProfileDoc(user)
         
         userRef.onSnapshot((snapshot) =>{
          setCurrentUser(snapshot)
         }
         )
        }else{
          setCurrentUser(null)
        }

      }
    )
  },[])


return (
    <BrowserRouter>
      <div className="App">
        <Navbar ></Navbar>
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
          <Route path="/drinks" component={Drinks}>
          </Route>
          <Route path="/contact" exact component={Contact}>
          </Route>
          <Route path="/getin" exact render={()=> currentUser ? (<Redirect to="/" />) : (<GetIn/>)} >
          </Route>
          <Route path="/getin/signup" exact component={SignUp}>
          </Route>
        </Switch>
        {isOrder? <Popup_Order/> : null 
        }
        {/* <SandBox/> */}
        {/* <DevEd /> */}
      </div>
    </BrowserRouter>


);
}

const mapStateToProps = (state) => ({
  currentUser:state.user.currentUser,
  isOrder:state.order.popup
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(SetUserAction(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App); 