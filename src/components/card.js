import React from 'react'

export default ({data}) => {
    return(
        <div className="robot_card">
            <img src={data.avatar}/>
            <div>
                <h3>{data.first_name} from {data.country}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    )
}