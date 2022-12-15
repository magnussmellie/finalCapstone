import { Component, useReducer, useState } from "react";

import img1 from './state1.GIF';
import img2 from './state2.GIF'; 
import img3 from './state3.GIF'; 
import img4 from './state4.GIF'; 
import img5 from './state5.GIF'; 
import img6 from './state6.GIF'; 
import img7 from './state7.GIF'; 
import img8 from './state8.GIF'; 
import img9 from './state9.GIF'; 
import img10 from './state10.gif'; 
import img11 from './state11.GIF';  

import RandomWord from "./words"; 
import HelpButton from "./helpButton";

//This app was developed with reference to Simon Jshuh's similar game, found at https://github.com/simonjsuh/Reactjs-Hangman-Game-Source-Code. 

//Array of images of stages of  Hanging.
const imagesArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11]

class Hangman extends Component{ 
  constructor(props) { 
    super(props); 
    this.state = { 
        incorrectGuesses: 0, 
        correctGuesses: new Set([]), 
        answer: RandomWord()
    }
  }

  //Component that handles user's guess on click of button. 
  //If guess is correct, the letter is added to the correctGuesses set, 
  //if incorrect, the count of incorrect guesses increments by 1. 
  handleGuess = (e) => { 
    let letter = e.target.value; 
    this.setState(currentState => ({ 
        correctGuesses: currentState.correctGuesses.add(letter), 
        incorrectGuesses: currentState.incorrectGuesses + (currentState.answer.includes(letter) ? 0 : 1)
        
    }));
  } 

  //Compononet that displays the answer. Initially each letter is represented by a _, 
  //but when a letter is added to correctGuesses that matches one of the letters in the answer, 
  //that letter is added revealed. This is done by a .map function with conditional rendering.
  coveredWord() { 
    return this.state.answer.split("").map(letter => 
        (this.state.correctGuesses.has(letter) ? letter : '_')).join(" ")
  }

  //This component maps a button onto every letter in the alphabet and displays it. 
  //On each click, the handleGuess function is passed.
  keyPad(){ 
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, index) => (
        <button
          className='btn btn-lg btn-primary m-2'
          key={index}
          value={letter}
          onClick={this.handleGuess}
        >
          {letter}
        </button>
      ));
    }
  

   //Function that resets the state and re-calls RandomWord in order to start a new game. 
   newGame = () => { 
    this.setState({ 
        incorrectGuesses: 0, 
        correctGuesses: new Set([]), 
        answer: RandomWord()
    });
   } 



  render() {
  
  // Variables describing when the game is lost or won.  
  const gameLost = this.state.incorrectGuesses >= 10
  const gameWon = !this.coveredWord().includes('_')
  
  //Re-names the keyboard area of screen as variable.  
  // Then, re-renders that variable according to whether the game was won or lost. 
  let gamePlayZone = this.keyPad()
  
  if(gameLost) { 
    gamePlayZone = <p>You Lost</p>
  } 
  
  if (gameWon) { 
    gamePlayZone = <p>You Won!</p>
  }
  return( 
    <div> 
      <div className="title"> 
        <h1>Hangman</h1>
      </div>
      
      <div className="display"> 
        <img src={imagesArray[this.state.incorrectGuesses]} alt='Hangman'></img>
        <h1>{this.coveredWord()}</h1>
      </div> 

      <div className="gamePlay"> 
        {gamePlayZone}
      </div>
        
      <div className="result"> 
      {gameLost === 11 && <p>You Lost!</p>}
      </div>

      <button onClick={this.newGame}>New Game</button>
      
      <HelpButton />
    </div>
  )

}
  }  




export default Hangman;