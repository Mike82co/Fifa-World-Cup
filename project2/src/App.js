import React, { Component } from 'react';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer"
import Stadiums from "./Components/Stadiums"
import Teams from "./Components/Teams"
import Players from './Components/Players'
import Splash from './Components/Splash'
import './App.css';

const apiURL = "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/f2ce643e853e12feca888cce580c01cf656ad2f3/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataIsLoaded: false,
      displayStadiums: false,
      displayTeams: false,
      displayPlayers: false,
      displaySPlash: true,
    };
  }

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
        this.setState({
          dataIsLoaded: true,
        })
      })
  }

  toggleStadium = event => {
    this.setState({
      displayStadiums: !this.state.displayStadiums,
      displaySPlash: false,
      displayTeams: false
    })
  }

  toggleTeams = event =>{
    this.setState({
      displayTeams: !this.state.displayTeams,
      displaySPlash: false,
      displayStadiums: false
    })
  }

  togglePlayers = event =>{
    this.setState({
      displayPlayers: !this.state.displayPlayers
    })
  }
  render() {     
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className ='displayButtonContainer'>
            <button id='showStadiums' onClick = {this.toggleStadium}>Show/Hide Stadiums</button>
            <button id='showTeam' onClick ={this.toggleTeams}>Show/Hide Teams</button>
          </div>
          {this.state.displaySPlash? <Splash />:null}
          {this.state.dataIsLoaded && this.state.displayStadiums? <Stadiums updateStadiums = {this.state.data.stadiums}/> : null}
          <ul>
          {this.state.dataIsLoaded && this.state.displayTeams?this.state.data.teams.map((team , index) => {
            return <Teams flag= {team.flag} name= {team.name} />
          }):null}
          </ul>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

//mapquest key 0GWvXgIBz4p32KrdiPF689PP47IWIXBK

//marvel key dc15820cb2068a1073e1b89e219c207375e51332

//wsuperheroapi.com key 10160495461070405