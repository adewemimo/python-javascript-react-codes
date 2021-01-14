import axios from 'axios';
import React from 'react';

class AddUser extends React.Component {
  state = {
    name: '',
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/users/', {
        name: this.state.name,
      })
      .then(res => {
        const user = res.data;
        console.log(user);
        this.props.newUserAdded(user);
        this.setState({ name: '' });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
