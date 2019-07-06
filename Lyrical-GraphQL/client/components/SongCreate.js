import React, { Component } from 'react';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();

    
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


export default SongCreate;