import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import fetchSong from './../queries/fetchSong'
import LyricCreate from './../components/LyricCreate'

class SongDetail extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { song } = this.props.data

		if (!song) { return <div>loading..</div> }
		return (
			<div>
				<Link to="/">Back</Link>			
				<h3>Song detail</h3>

				{ song.title }
				<LyricCreate songId={this.props.params.id} />
			</div>
		)
	}
}

export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail)
