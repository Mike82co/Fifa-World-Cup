import React, {Component} from 'react'

var apiURL = 'https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/10160495461070405/'
var charArr = []

class Players extends Component{

    constructor (props) {
        super(props)
            this.state = {
            data:[],
            playerNumber:0
            }
    }
    getPlayer = event =>{
        event.preventDefault()
        fetch(apiURL + this.state.playerNumber + "/image")
            .then(response => response.json())
            .then(response => {
            this.setState({ data: response });
            }).catch(error => {console.log(error)})
    }

    updatePlayerNumber = event =>{
        this.setState({
            playerNumber: event.target.value
        })
    }

    render(){
        return(
            <div className='player'>
                <form onSubmit={this.getPlayer}>
                    <label>What player number would you like to see?</label>
                    <input type='number' min = '1' max ='731' onChange ={this.updatePlayerNumber}></input>
                    <button type ='submit'>Get Player</button>
                </form>
                <p id='playerName'>{this.state.data.name}</p>
                <img src={this.state.data.url} className="playerImg"></img>           
            </div>
        )
    }    
}

export default Players
