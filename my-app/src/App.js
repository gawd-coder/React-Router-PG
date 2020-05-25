import React from 'react';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import itemDetail from "./itemDetail";
//to add the ability to handle routing in react
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path = "/" exact component = {Home} />
        <Route path = "/about" component = {About} />
        <Route path = "/shop" exact component = {Shop} />
        <Route path = "/shop/:id" component = {itemDetail}/>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
};

export default App;
