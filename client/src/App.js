import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerCard from "./Components/PlayerCard";
import DarkModeBtn from "./Components/DarkModeBtn";
import axios from 'axios';
class App extends React.Component {

  state = {
    players: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      // .then(res => {
      //   res.json();
      // })
      .then(res => {
        console.log(res)
        this.setState({players: res.data}, () => console.log(this.state.players)
        );
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <DarkModeBtn />
        {this.state.players.map((player) => (
          <PlayerCard key={player.id} info={player} />
      ))}
      </div>
    );
  }
  
}

export default App;
