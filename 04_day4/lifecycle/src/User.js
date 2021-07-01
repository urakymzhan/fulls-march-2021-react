import React, { Component } from "react";

export default class User extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    // fetch api and store users inside state. fetch or axios
  }
  render() {
    return (
      <div>
        <h1>Users List</h1>
        {/* loop users from state and show name and email. Hint: map() */}
      </div>
    );
  }
}

