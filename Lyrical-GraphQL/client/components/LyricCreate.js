import React, { Component } from 'react';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }
  onSubmit(e) {
    e.preventDefault();


  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          onChange={e => this.setState({ content: e.target.value })}
          value={this.state.content}
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyric {
        content
      }
    }
  }
`

export default LyricCreate;