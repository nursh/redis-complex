import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

const Header = () => (
  <header style={{ marginBottom: 30 }}>
    <Link to="/" style={{ marginRight: 20 }}>
      Home
    </Link>
    <Link to="/otherpage">Other Page</Link>
  </header>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </Router>
    );
  }
}

export default App;
