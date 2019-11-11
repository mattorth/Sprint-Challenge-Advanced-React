import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {

  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
  
}

export default App;
