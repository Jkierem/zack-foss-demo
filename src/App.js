import React from 'react'
import CooldownButton from './components/CooldownButton';

const App = (props) => {
  return(
    <div>
      <CooldownButton 
        cooldown={1} 
        onClick={() => console.log("Launching missile!")}
      >
        One Second and Launch missile
      </CooldownButton>
      <CooldownButton cooldown={2}>Two Seconds</CooldownButton>
      <CooldownButton cooldown={3}>Three Seconds</CooldownButton>
      <CooldownButton cooldown={4}>Four Seconds</CooldownButton>
      <CooldownButton cooldown={5}>Five Seconds</CooldownButton>
    </div>
  )
}

export default App;