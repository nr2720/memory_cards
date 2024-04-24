import { useState } from 'react'
import { Header , CardGame } from './components/DomRel'
import './styles/App.css'

function App() {
  
  return (
    <>
      < Header 
        className='intro'
        title='Memory Game'
        desc='Get points by clicking on an image but don&#39;t click on any more than once!'
      />
      < CardGame />
      
      
    </>
  )
}

export default App
