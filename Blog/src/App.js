import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Articles from './Components/Articles';
import ArticlesPage from './Components/ArticlesPage';
import About from './Components/About';
import AddArticle from './Components/AddArticle';
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends Component {
  state = {
    Data: [],
    counter: 0,

  }
  componentWillMount() {
    setInterval(() => {
      fetch('http://localhost:5000/article/')
        .then(Response => Response.json())
        .then(resJson => {
          let tab = [];
          let cnt = resJson.length;
          for (let index = 0; index < cnt; index++) {
            tab.push(
              {
                id: resJson[index]._id,
                Name: resJson[index].Name,
                URL: resJson[index].URL,
                description: resJson[index].description,
                vote: resJson[index].vote
              }
            )
          }

          this.setState({ Data: tab, counter: cnt })

        })
    }, 1000);
  }

  render() {
    return (
      <Router>
        <Navbar counter={this.state.counter} />
        <Route path="/" component={Home} exact />
        <Route path="/Articles" render={(props) => <Articles data={this.state.Data} />} exact />
        <Route path="/About" component={About} />
        <Route path="/ArticlePage/:id" render={(props) => <ArticlesPage data={this.state.Data} />} />
        <Route path="/AddArticle" component={AddArticle} />
      </Router>

    )
  }
}
