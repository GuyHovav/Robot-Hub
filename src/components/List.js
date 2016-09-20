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
                <ul>
                    {                        
                        data.map((item, iter)=><li key={iter} onMouseUp={onItemClick.bind(null, iter)}><Card data={item}/></li>)
                    }
                </ul>

            </div>
        );
    }
}

/*



*/