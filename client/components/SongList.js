import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import fetchSongsQuery from '../queries/fetchSongs'

class SongList extends Component {

	renderSongs() {
		if (this.props.data.loading) { return <div>loading...</div> }

		return this.props.data.songs.map(song => {
			return (
				<li key={song.id} className="collection-item">
					{song.title}
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link
					className="btn-floating btn-large red right"
					to="/songs/new"
				>
					<i className="material-icons">add</i>
				</Link>
			</div>
		)
	}
}

export default graphql(fetchSongsQuery)(SongList)
