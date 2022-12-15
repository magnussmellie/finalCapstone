import { useState } from 'react'
import Button from 'react-bootstrap/Button' 
import Collapse from 'react-bootstrap/Collapse'


//Collapsable help button, initiated with react hook and Bootstrap Collapse. 
export default function HelpButton() { 
 
const [open, setOpen] = useState(false)
 
    return(
    <div>
        <Button  
        onClick={() => setOpen(!open)}
        aria-controls="help-info" 
        aria-expanded={open} 
        className="m-5"
        >
          Help 
        </Button>
        <Collapse in={open}> 
          <div id="help-info"> 
          The aim of Hangman is to guess the word above. In order to guess the word, click on a letter to see if it is in the word. 
          If it is not in the word, the gallows will get one step closer to being completed. 
          You have 11 guesses. 
          </div>
        </Collapse>
 </div> 
 )
}