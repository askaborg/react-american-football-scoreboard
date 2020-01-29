//TODO: STEP 1 - Import the useState hook.
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
        <Top />
        <BottomRow />
      </section>
      <Buttons />
    </div>
  )
}

function Top() {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{ 32 }</div>
      </div>
        <div className="timer">00:03</div>
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ 32 }</div>
        </div>
    </div>
  )
}

function Buttons() {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown">Home Touchdown</button>
        <button className="homeButtons__fieldGoal">Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown">Away Touchdown</button>
        <button className="awayButtons__fieldGoal">Away Field Goal</button>
      </div>
      </section>
  )
}

export default App
