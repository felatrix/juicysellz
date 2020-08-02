import React,{useEffect,useState} from 'react'
import './home.styles.scss'
import Home_OBJ from './home'
import ProductList from '../../components/home/productList.component'

import {gsap} from 'gsap'

const Home = ()=>{
    const {product_home_select} = Home_OBJ    
    const [homeObj,setHomeObj] = useState([...product_home_select])
    const [expand,setExpand] = useState(null)


    useEffect(()=>{
        if(expand !== null){
            let tl = gsap.timeline(); //create the timeline
            tl.to(".item-false", {opacity: 0, duration: 1}).to(".item-true", {scale:2,y:100,ease: "elastic", duration: 1});
        }
    })


    const productListClickedHandler = (e)=>{
        let tagName = e.target.tagName
        let componentId
        if(tagName == "IMG"){
            componentId = e.target.parentElement.id
            changeCLickedState(componentId,homeObj)
        }else{
            componentId =  e.target.id
            changeCLickedState(componentId,homeObj)
        }
        setExpand(true)
    }
    
    const changeCLickedState = (index,object) =>{
        let newItemObject = object[index-1]
        newItemObject.clicked = !newItemObject.clicked 
        let newArrHome = [...object]
        newArrHome[index-1] = newItemObject
        setHomeObj([...newArrHome])
    }

    return(
        <div className="home--pages">
            <div className="home--pages--title">
                <h2>Choose Your Bev</h2>
            </div>
            <div className="product--lists">
                {homeObj.map((data,index) => {
                    return(
                        <ProductList key={data.id} {...data}/>
                    )
                })}
                {/* <div className="product--lists-item">
                    <img src="https://res.cloudinary.com/ddzftordf/image/upload/v1596103218/image-home/Asset_20_np8fjk.png" alt=""  />
                </div>
                <div className="product--lists-item">
                    <img src="https://res.cloudinary.com/ddzftordf/image/upload/v1596103217/image-home/Asset_15_ztstnh.png" alt=""  />
                </div>
                <div className="product--lists-item">
                    <img src="https://res.cloudinary.com/ddzftordf/image/upload/v1596103215/image-home/Asset_7_kjanta.png" alt=""  />
                </div>
                <div className="product--lists-item">
                    <img src="https://res.cloudinary.com/ddzftordf/image/upload/v1596103215/image-home/Asset_8_s6iaem.png" alt=""  />
                </div>
                <div className="product--lists-item">
                    <img src="https://res.cloudinary.com/ddzftordf/image/upload/v1596103215/image-home/Asset_6_sqac4d.png" alt=""  />
                </div>
                <div className="product--lists-item">
                    <img src="https://res.cloudinary.com/ddzftordf/image/upload/v1596103217/image-home/Asset_14_tdo7xp.png" alt=""  />
                </div> */}
            </div>
        </div>
    )
}

export default Home