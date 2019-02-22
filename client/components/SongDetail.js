import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchSong from './../queries/fetchSong'

class SongDetail extends Component {

	constructor(props) {
		super(props)

	}

	render() {
		console.log(this.props)
		return (
			<div>				
				<h3>Song detail</h3>

				{this.props.data.song && ( this.props.data.song.title
				)}
			</div>
		)
	}
}

export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail)
