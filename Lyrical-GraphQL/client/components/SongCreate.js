import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { title } = this.state;

    this.props.mutate({
      variables: {
        title
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title</label>
          <input
            value={this.state.title}  
            onChange={e => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    )
  }
}


const mutation = gql`
  mutation addSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);