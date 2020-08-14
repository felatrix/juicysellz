import React from 'react'

import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/components/navigation/navigation.scss';
import '../../../node_modules/swiper/components/pagination/pagination.scss';
import '../../../node_modules/swiper/components/scrollbar/scrollbar.scss';

import setPopupOrder from '../../utils/redux/order/order.action'

const DrinkDetail = ({title,data_detail,currentUser,setPopup})=>{
    // console.log(data_detail)
            //  ada data detail
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    // if(currentUser){
        if(data_detail !== undefined ){
            if(data_detail.length > 0 ){
                return (
                    <div className="drink--pages">
                        <div className="drink--pages--title">
                            <h1>{title}</h1>
                        </div>

                        <div className="drink--pages--detail-list">
                        <Swiper spaceBetween={50} slidesPerView={2} speed={300}>
                        {
                            data_detail.map(({title,price,id,image_url})=>{
                                return (
                                    <SwiperSlide key={`${id}`} >
                                    <div key={`${id}`} className="drink--pages--detail-list--content">
                                        <div className="content--image">
                                            <img src={image_url} alt="" srcSet="" className=""/>
                                            <div className="content--description">
                                            <p>{title}</p>
                                            <p>Rp. {price}</p>
                                            <div className="buttonOrder" onClick={()=>{setPopup()}}>
                                                Order
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        </Swiper>

                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="drink--pages">
                        <div className="drink--pages--title">
                        <h1>{title}</h1>
                        </div>
                        <h2>There is no data detail</h2>
                    </div>
                )
            }
        }else{
                    // gaada ada data detail
            return (
                <div className="drink--pages">
                    <div className="drink--pages--title">
                    <h1>{title}</h1>
                    </div>
                    <h2>There is no data detail</h2>
                </div>
            )
        }
    // }
    // else{
    //     return (
    //         <div className="drink--pages">
    //             <div className="drink--pages--title">
    //             <h2>You have to login first <Link to={`/getin`}>here</Link></h2>
    //             <p>You dont have an account ? lets get that in <Link to={`/getin/signup`}>here</Link></p>
    //             </div>

    //         </div>
    //     )
    // }

    
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setPopup:()=>dispatch(setPopupOrder())
    }
}

const mapStateToProps = (state) =>{
    return{
        currentUser:state.user.currentUser,
        isOrder:state.order.popup
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DrinkDetail)