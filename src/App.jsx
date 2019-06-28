import React from "react";
import "./index.css";

import Board from "./components/Board";
import Axios from "axios";

const SERVER_ADDR = "http://localhost:5000";

class App extends React.Component {
  componentDidMount() {
    Axios.get("http://localhost:5000/express_backend")
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <Board
        game={() => Axios.get(SERVER_ADDR + "/api/game-state")}
        turn={loc => {
          return Axios.post(SERVER_ADDR + "/api/turn", {
            location: loc
          });
        }}
      />
    );
  }
}

export default App;
