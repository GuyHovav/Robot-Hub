import React from 'react'

export default (props) => {
    const {data, id} = props
    const current_card = data[id - 1];
    return (
        current_card ?
            <div className="profile">
                <div className="avatar_container">
                    <img className="avatar" src={current_card.avatar.replace("size=80x80", "size=320x320") }/>
                </div>
                <div className="info">
                    <h2>{current_card.first_name} {current_card.last_name}</h2>
                    <h5>country: {current_card.country}</h5>
                    <p>{current_card.description}</p>
                </div>
            </div >
            :
            <div className="profile" />

    )
}