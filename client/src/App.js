import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      console.log("result", res)
      this.setState({ players: res.data})
      console.log("players array", this.state.players)
    })
    .catch(err => console.log("api error", err))
  }

  render(){
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        {/* <NavBar />
        <PlayerList /> */}
      </div>
    );
  }
}

export default App;
