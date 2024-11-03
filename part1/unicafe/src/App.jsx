import { useState } from 'react'

const Button = ({name, handleClick}) => {
  return (<button onClick={handleClick}>{name}</button>)
}

const Statistics = ({array}) => {
  return (<div>
  <StatisticLine name="good" calculation={array[0]} />
  <StatisticLine name="neutral" calculation={array[1]} />
  <StatisticLine name="bad" calculation={array[2]} />
  <StatisticLine name="all" calculation={array[3]} />
  <StatisticLine name="average" calculation={array[4]/array[3]} />
  <StatisticLine name="positive" calculation={array[0]/array[3]*100 + "%"} />
</div>)
}

const StatisticLine = ({name, calculation}) => {
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
      <Button name="good" handleClick={handleGoodClick}/>
      <Button name="neutral" handleClick={handleNeutralClick}/>
      <Button name="bad" handleClick={handleBadClick}/>
    </div>
    <h1>statistics</h1>
    <Statistics array={[good, neutral, bad, total, score]} />
    </>)
}
  return (<>
    <h1>give feedback</h1>
    <div>
      <Button name="good" handleClick={handleGoodClick}/>
      <Button name="neutral" handleClick={handleNeutralClick}/>
      <Button name="bad" handleClick={handleBadClick}/>
    </div>
    <h1>statistics</h1>
    <div>
      No feedback given
    </div>
    </>
  )
}

export default App
