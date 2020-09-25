// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Bring in the Dice component from the file Dice.js so that we can use it in this file
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2) Define the state for this Board component.  It includes rollImages which will be an array of images, currentPic which is the image representing the current dice roll, and diceLog which will be an array containing a log of all the dice roll values
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) Deconstruct the state so that we can use it here directly
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) assign the image representing the current roll from rollImages to the newRoll variable
    let newRoll = rollImages[randomNum]
    // 5) update the state element currentPic with the picture representing the current roll, and update the diceLog with the latest roll value
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 6) Call the Dice component and give it the latest roll and currentPic information.  Call the Log component and give it the current diceLog information
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7) Update the DOM
  render(){
    // 8) Deconstruct currentPic and roll from the properties passed to this component, so we can use them directly
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9) Specify an alternate text for this image titled "images of dice"
          alt="images of dice"
          // 10) Set currentPic as the path to our image
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
