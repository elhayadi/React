import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Input from './Input';
import Output from './Output';
import './bootstrap.min.css';


class App extends Component {
  state = {
    text: ''
  }

  changeHandel(e) {

    const text = (e.target.value);

    this.setState({ text: text })

  }


  render() {

    return (
      <div className=" container">
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <Input onChangeHandler={(e) => this.changeHandel(e)} />
          <Output text={this.state.text} />
        </div>


      </div>
    );
  }
}
export default App;
