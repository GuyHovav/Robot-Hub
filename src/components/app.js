import React, { Component } from 'react';
import Name_input from './Name_input';
import List from './List'
import data from '../data/MOCK_DATA.json'
import Profile from '../components/profile'
export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name_filter: "",
			profile_index: 0
		}
	}
	handleNameFilterChange(event) {
		let filteredItems = this.namesFilter();
		this.setState({
			name_filter: event.target.value
		})
	}
	namesFilter() {
		const {name_filter} = this.state;
		return data.filter((item => item.first_name.indexOf(name_filter) != -1));
	}
	handleItemClick(i) {
		this.setState({profile_index: i})
	}
	render() {
		const {name_filter, profile_index} = this.state;
		const filtered_data = this.namesFilter();
		return (
			<div className="app">
				<div>
					<h1 className="title">Robots Hub</h1>
					<h3 className="filter">
						Filtered by First name: {filtered_data.length}
						<Name_input onInputChange = {this.handleNameFilterChange.bind(this) }
							value={name_filter}
							/>
					</h3>
				</div>
				<div style={{display:'flex'}}>
					<Profile data = {filtered_data[profile_index]}/>
					<List data = {filtered_data } onItemClick = {this.handleItemClick.bind(this)}/>
				</div>

			</div>
		);
	}
}

/*
<h1 className="title">Robots Hub</h1>
					<button type="button" className="btn btn-success" 
							onClick={this.book_item.bind(this)}>Book Item!</button>
					<h3>Items booked: {this.state.booked_items}</h3>
					<br/>
					<br/>
					<Name_input/>	
*/