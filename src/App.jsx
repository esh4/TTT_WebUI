import React from "react";
import "./index.css";

import Board from "./components/Board";
import Axios from "axios";
import Login from './components/Login'
import GameClient from './services/GameClient'

const SERVER_ADDR = "http://192.168.1.24:5000";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.gameClient = new GameClient(SERVER_ADDR, this.player)
  }

  componentDidMount() {
    Axios.get(SERVER_ADDR + "/express_backend")
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.gameClient.player = e.target.value}></input>
      <Board
        game={() => this.gameClient.gameState}
        takeTurn={loc => this.gameClient.turn(loc)}
        update={(callback) => {
          this.gameClient.onEvent('game-update', callback)
        }}
      />
      </div>
    );
  }
}

export default App;
