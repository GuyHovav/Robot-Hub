import React, { Component } from 'react';
import Name_input from './Name_input';
import Card from './card'

export default class List extends Component {
    constructor(props) {
        super(props)        
    }
    render() {
        const {data, onItemClick} = this.props
        return (
            <div className="list">
            {data?
                <ul>
                    {                        
                        data.map((item, index)=><li key={index} onMouseUp={onItemClick.bind(null, index)}><Card data={item}/></li>)
                    }
                </ul>
            :null}
            </div>
        );
    }
}
