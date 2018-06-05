import React, {Component} from "react"

class Stadiums extends Component {

    render(){
        return(
            <div className = "stadiumContainer">
                {this.props.updateStadiums.map(stadium => {                   
                    return ( 
                        <div className = 'stadium'>
                            <h3 className='stadiumName'>{stadium.name} </h3>
                                <img className ='stadiumImages' src={stadium.image} alt ="stadium"></img>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Stadiums