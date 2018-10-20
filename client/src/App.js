import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/otherpage">Other Page</Link>
  </header>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact to="/" component={Fib} />
            <Route to="/otherpage" component={OtherPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
