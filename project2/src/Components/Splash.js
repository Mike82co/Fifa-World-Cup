import React from 'react';

const Splash = (props) => {
    return (
        <div className='splashContainer'>
            <h1 className ='splashTitle' >Welcome Football Fans!</h1>
            <img id = 'splashImg'src ='https://toppng.com/public/uploads/preview/2018-fifa-world-cup-download-11527059428nn06owlzo8.png'></img>
            <p id ='descriptionOfPage'> Here you will find some basic information about the 2018 FIFA World cup.  Use the navagation buttons above to get information about the stadiums that games will be played in and the 32 teams.</p>
        </div>
    )
}

export default Splash;