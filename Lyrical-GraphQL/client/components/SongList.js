import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <div key={song.id} className='collection-item'>
          {song.title}
        </div>
      )
    })
  }

  render() {
    if(this.props.data.loading) return <div>Loading...</div>
    return (
      <div>
        <ul className='collection'>
          {this.renderSongs()}
        </ul>
        <Link to='/new-song' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(query)(SongList);