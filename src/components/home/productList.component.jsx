import React,{useEffect} from 'react'
import { withRouter } from "react-router";


const ProductList = ({id,image_url,path_url,title,clicked,onclick,history,match,location})=>{


    // if(clicked === true){
    //     return(
    //         <div className={`product--lists-item item-${clicked}`} id={id} onClick={onclick}>
    //             <img src={image_url} alt={title} />
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div className={`product--lists-item item-${title}`} id={id} onClick={onclick}>
    //             <img src={image_url} alt={title} />
    //         </div>
    //     )
    // }
    return(
        <div className={`product--lists-item item-${clicked}`} id={id} onClick={()=>history.push(`/drinks/${path_url}`)}>
            <img src={image_url} alt={title} />
        </div>
    )
}

export default withRouter(ProductList)