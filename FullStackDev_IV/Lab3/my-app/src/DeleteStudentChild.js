import axios from 'axios';
import React from 'react';

class DeleteStudentChild extends React.Component {
  handleDelete = async () => {
    const result = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${this.props.id}`
    );
    this.props.userDeleted(this.props.id);
    console.log(result);
  };
  render() {
    return (
      <button type="button" onClick={this.handleDelete}>
        Delete
      </button>
    );
  }
}

export default DeleteStudentChild;
