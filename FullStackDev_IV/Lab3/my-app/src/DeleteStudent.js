import axios from 'axios';
import React from 'react';

class DeleteStudent extends React.Component {
  state = {
    id: '',
  };
  handleChange = event => {
    console.log(event.target.value)
    this.setState({ id: event.target.value });
  };

  handleDelete = async (event) => {
    event.preventDefault();
    // axios
    //   .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
    //   .then((res) => {
           // console.log(res)
    //     console.log(`Successfully deleted ${this.state.id}.`);
    //   })
    //   .catch(err => console.log(err));
    const result = await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
    console.log(result);
};
  render() {
    return (
      <div>
        <form onSubmit={this.handleDelete}>
          <label>
            Person Id:
            <input type="text" value={this.state.id} onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div> 
    );
  }
}

export default DeleteStudent;
