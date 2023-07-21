import { useState } from 'react';
import User from './User';
import { Component } from 'react';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  constructor(){ //The constructor is used to create state and set an initial value to it
    super();
    this.state = {
      showUsers:true,
    };
  }
  toggleUsersHandler(){
    this.setState((currState) => { 
      return { //Returning an updated version of out state
        showUsers: !currState.showUsers
      };
    });
  }
  render(){

    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return(
      <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}> 
      {// We need to bind 'this' to toggleUsersHandler to our class
      }
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>
    )
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
