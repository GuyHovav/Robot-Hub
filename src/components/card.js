import React from 'react'

export default ({data}) => {
    return(
        <div className="robot_card">
            <img className="avatar" src={data.avatar}/>
            <div className = "info">
                <h3>{data.first_name} from {data.country}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    )
}