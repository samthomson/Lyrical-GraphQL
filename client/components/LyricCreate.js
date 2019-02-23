import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'

import fetchSongsQuery from '../queries/fetchSongs'

class LyricCreate extends Component {

	constructor(props) {
		super(props)

		this.state = {
			content: ''
		}
	}

	onSubmit(event) {
		event.preventDefault()
		
		this.props.mutate({
			variables: {
				content: this.state.content,
				songId: this.props.songId
			}
		})
		this.setState({content: ''})
	}


	render() {
		return (
			<form
				onSubmit={this.onSubmit.bind(this)}
			>
				<label>Add a lyric</label>
				<input
					onChange={event => this.setState({
						content: event.target.value
					})}
					value={this.state.content}
				/>
			</form>
		)
	}
}

const mutation = gql`
	mutation AddLyricToSong($content:String, $songId:ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id,
			title,
			lyrics {
				id
				content
			}
		}
	}
`

export default graphql(mutation)(LyricCreate)
