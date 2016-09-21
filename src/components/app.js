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
			profile_index: 0,
		}
	}
	handleNameFilterChange(event) {
		const filteredItems = this.namesFilter();
		this.setState({ 
			name_filter: event.target.value,			
		})
	}
	namesFilter() {
		const {name_filter} = this.state;
		const names = data.filter((item => (item.first_name.indexOf(name_filter) != -1)));
		return names;
	}
	handleItemClick(i) {
		this.setState({ profile_index: i })
	}
	render() {
		const {name_filter, profile_index} = this.state;
		const cards = data.filter(((item, index, array) => item.first_name.indexOf(name_filter) != -1));
		console.log("cards:", cards.length)
		return (
			<div className="app">
				<div>
					<h1 className="title">Robots Hub</h1>
					<h3 className="filter">
						Filtered by First name: {cards.length}
						<Name_input onInputChange = {this.handleNameFilterChange.bind(this) }
							value={name_filter}
							/>
					</h3>
				</div>
				<div style={{ display: 'flex' }}>
					<Profile data = {data} id={profile_index}/>
					<List data = {cards } onItemClick = {this.handleItemClick.bind(this) }/>
				</div>
			</div>
		);
	}
}

/*




*/