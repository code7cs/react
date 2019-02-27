import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

const User = params => {
  return <h1>Welcome User {params.username}</h1>;
};

class App extends Component {
  state = {
    loggedIn: false
  };

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith("/user")
                ? "Are you sure?"
                : true;
            }}
          />
          <input
            type="button"
            value={this.state.loggedIn ? "log out" : "log in"}
            onClick={this.loginHandle.bind(this)}
          />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

            <Route
              path="/user/:username"
              exact
              strict
              render={({ match }) =>
                this.state.loggedIn ? (
                  <User username={match.params.username} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />

            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
