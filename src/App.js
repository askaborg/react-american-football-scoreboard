import React, { useState } from "react"
import "./App.css"
import BottomRow from "./BottomRow"


function App() {
  const initialState = 32
  const [lionsScore, setLions] = useState(initialState)
  const [tigersScore, setTigers] = useState(initialState)
  
  return (
    <div className="container">
      <section className="scoreboard">
        <Top lionsScore={lionsScore} tigersScore={tigersScore} />
        <BottomRow />
      </section>
      <Buttons lionsScore={lionsScore} tigersScore={tigersScore} setLions={setLions} setTigers={setTigers} />
    </div>
  )
}

function Top(props) {
  const { lionsScore, tigersScore } = props

  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{ lionsScore }</div>
      </div>
        <div className="timer">00:03</div>
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ tigersScore }</div>
        </div>
    </div>
  )
}

function Buttons(props) {
  const { lionsScore, tigersScore, setLions, setTigers } = props

  return (
    <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={ () => setLions(lionsScore + 7) }>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={ () => setLions(lionsScore + 3) }>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={ () => setTigers(tigersScore + 7) }>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={ () => setTigers(tigersScore + 3) }>Away Field Goal</button>
      </div>
      </section>
  )
}

export default App
