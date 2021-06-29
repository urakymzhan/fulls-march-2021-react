import React from "react";

class Greeting extends React.Component {
  state = {
    isLoggedIn: true,
    unreadMessages: ["call me", "text me", "get back to me"],
    unreadMessagesObj: [
      { text: "hey there", id: 1 },
      { text: "from india calling", id: 2 },
      { text: "some spam email", id: 3 },
    ],
  };

  render() {
    const { isLoggedIn, unreadMessages, unreadMessagesObj } = this.state;

    console.log(unreadMessages.length > 0);
    // if-else and logical && operator example
    if (isLoggedIn) {
      return (
        <div>
          <h1>Welcome User</h1>
          {unreadMessages.length > 0 && (
            <h2>You have {unreadMessages.length} messages! </h2>
          )}
          <ol>
            {unreadMessages &&
              unreadMessages.map((message, index) => {
                return <li key={index}>{message}</li>;
              })}
          </ol>

          <ol>
            {unreadMessagesObj &&
              unreadMessagesObj.map((message) => {
                return <li key={message.id}>{message.text}</li>;
              })}
          </ol>

        </div>
      );
    } else {
      return <h1>Welcome Guest. Please Login!</h1>;
    }
  }
}

export default Greeting;
