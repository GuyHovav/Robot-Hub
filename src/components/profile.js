import React from 'react'

export default (props) => {
    const {data, id} = props
    const current_card = data[id];
    return (
        <div className="profile">
            {current_card  ?
                <div>
                    <img src={current_card.avatar}/>
                    <div>
                        <h3>{current_card.first_name} from {current_card.country}</h3>
                        <p>{current_card.description}</p>

                    </div>
                </div>
                : null
            }
        </div>
    )
}