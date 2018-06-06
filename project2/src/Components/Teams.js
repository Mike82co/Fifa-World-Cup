import React, {Component} from "react"
import Players from './Players'

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [],
        showPlayers:false
        };
    }
    wasClicked = event =>{
        this.setState({
            showPlayers: !this.state.showPlayers
        })
    }
    render(){
        return(
            <React.Fragment>  
                <li>
                    <img className = "teamFlag" src = {this.props.flag}></img>  
                    {this.props.name}
                    <button id='showPlayers' onClick ={this.wasClicked} > Show Players </button>
                    {this.state.showPlayers?<Players />: null}
                </li>
            </React.Fragment>
        )
    }
}


export default Teams