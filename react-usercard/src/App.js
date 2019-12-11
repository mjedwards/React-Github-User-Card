import React from "react";
import axios from "axios";
import "./App.css";

import Card from "./components/Card";
import Search from "./components/SearchUsers";

const user = "https://api.github.com/users/mjedwards";
const userFollowers = "https://api.github.com/users/mjedwards/followers";
const userRequest = axios.get(user);
const userFollowerRequest = axios.get(userFollowers);

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: [], followers: [] };
  }

  componentDidMount() {
    axios
      .all([userRequest, userFollowerRequest])
      .then(
        axios.spread((...res) => {
          const userResponse = res[0];
          const userFollowerResponse = res[1];

          this.setState({ user: userResponse.data });
          this.setState({ followers: userFollowerResponse.data });
        })
      )
      .catch(err => console.log(err));
  }

  componentDidUpdate(name) {
    if (name) {
      axios
        .get(`https://api.github.com/users/${name}`)
        .then(res => {
          this.setState({ user: res.data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Search update={this.componentDidUpdate} />
        <Card
          name={this.state.user.name}
          bio={this.state.user.bio}
          url={this.state.user.avatar_url}
          followers={this.state.user.followers}
          following={this.state.user.following}
          userFollowers={this.state.followers}
        />
        {console.log(this.state.followers)}
      </div>
    );
  }
}

export default App;
