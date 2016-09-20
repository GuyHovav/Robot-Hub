import React, { Component } from 'react';

export default (props) => {
	const {onInputChange} = props
	return (
		<input type="text" className="form-control" value={props.value}
			onChange={onInputChange}/>
	);

}