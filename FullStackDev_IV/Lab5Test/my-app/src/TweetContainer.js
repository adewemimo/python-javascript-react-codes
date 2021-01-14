import React from 'react';
import Comment from './Comment';

class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', comments: [ ] };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
  }

  handleTextChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleTextSubmit() {
    this.setState({ comments: [...this.state.comments, this.state.value] });
  }
  render() {
    return (
      <>
        <h1>{this.props.label} </h1>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleTextChange}
          />
          <button type="button" onClick={this.handleTextSubmit}>
            Post
          </button>
        </form>
        {this.state.comments && this.state.comments.map(comment => <Comment key={comment} comment={comment} />)}
      </>
    );
  }
}

export default TweetContainer;
