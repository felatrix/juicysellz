import React,{useState} from 'react'
import {withRouter,Switch,Route,Redirect} from "react-router-dom";
import DRINK_DATA from './Drink'

import DrinkDetail from '../../components/drinks/drinkDetail.component'

import './drinks.style.scss'



const Drinks = ({match,location,history})=>{
    const [dataDrink,setDataDrink] = useState(DRINK_DATA)
    const {product_home_select} = dataDrink
    return(
        <React.Fragment>
            <Switch>
        {
            product_home_select.map((data)=>{
                return(
                    <Route key={`${data.path_url}`} exact path={`${match.url}/${data.path_url}`} >
                        <DrinkDetail {...data}/>
                    </Route>
                )
            })
        }
        {/* <Route exact path={`${match.url}/milk`}><h1>hhwhwhwh</h1></Route>
        <Route exact path={`${match.url}/ice_drink`}><h1>ice drink</h1></Route> */}

      </Switch>
        </React.Fragment>
    )
}




export default withRouter(Drinks)