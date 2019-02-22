import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

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

const query = gql`
	{
		songs {
			id
			title
		}
	}
`

export default graphql(query)(SongList)
