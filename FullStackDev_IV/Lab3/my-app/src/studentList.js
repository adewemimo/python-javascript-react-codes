import axios from 'axios';
import React from 'react';
import DeleteStudentChild from './DeleteStudentChild';
import AddUser from './AddUser';

class UserList extends React.Component {
  state = {
    users: [],
    name: ' ',
  };

  getUser() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      const users = res.data;
      console.log('fetch new users', users);
      this.setState({ users });
    });
  }

  updateUser(user) {
    this.setState({ users: [...this.state.users, user] });
  }

  deleteUser(userId) {
    this.setState({
      users: this.state.users.filter(user => user.id !== userId),
    });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <>
        <AddUser newUserAdded={() => this.getUser()} />
        {/* <AddUser newUserAdded={user => this.updateUser(user)} /> */}
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <p>{user.name}</p>
              <DeleteStudentChild
                id={user.id}
                userDeleted={() => this.getUser()}
              />
              {/* <DeleteStudentChild
                id={user.id}
                userDeleted={userId => this.deleteUser(userId)}
              /> */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default UserList;
