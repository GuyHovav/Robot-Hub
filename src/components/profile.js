import React from 'react'

export default (props) => {
    const {data, id} = props
    const current_card = data[id-1];
    return (
        <div className="profile">
            {current_card  ?
                <div>
                    <img src={current_card.avatar}/>
                    <div>
                        <h2>{current_card.first_name} {current_card.last_name}</h2>
                        <h5>country: {current_card.country}</h5>
                        <p>{current_card.description}</p>
                    </div>
                </div>
                : null
            }
        </div>
    )
}