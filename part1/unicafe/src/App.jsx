import { useState } from 'react'

const Statistic = ({name, calculation}) => {
  return (<div>{name} {calculation}</div>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () =>{
    setGood(good+1)
    setScore(score+1)
    setTotal(total+1)
  }

  const handleNeutralClick = () =>{
    setNeutral(neutral+1)
    setTotal(total+1)
  }

  const handleBadClick = () =>{
    setBad(bad+1)
    setScore(score-1)
    setTotal(total+1)
  }
if(total>0){
  return (<>
    <h1>give feedback</h1>
    <div>
    <button onClick = {handleGoodClick}>good</button>
    <button onClick = {handleNeutralClick}>neutral</button>
    <button onClick = {handleBadClick}>bad</button>
    </div>
    <h1>statistics</h1>
    <div>
      <Statistic name="good" calculation={good} />
      <Statistic name="neutral" calculation={neutral} />
      <Statistic name="bad" calculation={bad} />
      <Statistic name="all" calculation={total} />
      <Statistic name="average" calculation={score/total} />
      <Statistic name="positive" calculation={good/total*100 + "%"} />
    </div>
    </>)
}
  return (<>
    <h1>give feedback</h1>
    <div>
    <button onClick = {handleGoodClick}>good</button>
    <button onClick = {handleNeutralClick}>neutral</button>
    <button onClick = {handleBadClick}>bad</button>
    </div>
    <h1>statistics</h1>
    <div>
      No feedback given
    </div>
    </>
  )
}

export default App
