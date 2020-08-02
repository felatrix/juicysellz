import React from 'react'

const DrinkDetail = ({title,data_detail})=>{
    // console.log(data_detail)
            //  ada data detail
    if(data_detail !== undefined ){
        if(data_detail.length > 0 ){
            return (
                <div className="drink--pages">
                    <div className="drink--pages--title">
                        <h1>{title}</h1>
                    </div>
                    <div className="drink--pages--detail-list">
                    {
                        data_detail.map(({title,price,id,image_url})=>{
                            return (
                                <div key={`${id}`} className="drink--pages--detail-list--content">
                                    <div className="content--image">
                                        <img src={image_url} alt="" srcset="" className=""/>
                                    </div>
                                    <div className="content--description">
                                        <p>{title}</p>
                                        <p>Rp.{price}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
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
    
}

export default DrinkDetail