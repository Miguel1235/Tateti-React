import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from '../Components/Header/Header'

import NameSelection from '../Pages/NameSelection/NameSelection'
import Lobby from '../Pages/Lobby/Lobby'
import Waiting from '../Pages/Waiting/Waiting'
import Game from '../Pages/Game/Game'

interface Props{}
interface State{}

class App extends Component<Props,State>{
  render(){
    return(
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <NameSelection/>
          </Route>
          <Route exact path="/lobby">
            <Lobby/>
          </Route>
          <Route exact path="/waiting">
            <Waiting/>
          </Route>
          <Route exact path="/game">
            <Game/>
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App