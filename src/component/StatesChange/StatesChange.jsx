import { Component } from "react";

class StatesChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      subscription: " you are a guest",
    };
  }

  onStateChange() {
    this.setState({
      isLoggedIn: true,
      subscription: " You now have a subscription"
    });
  }

  render() {
    return (
      <div>
        <h1>
          your login status is {this.state.isLoggedIn.toString()} and
          {this.state.subscription}
        </h1>
        <button onClick={this.onStateChange.bind(this)}>logIn</button>
      </div>
    );
  }
}

export default StatesChange;
