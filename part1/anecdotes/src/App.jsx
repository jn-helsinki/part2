import { useState } from 'react'


const Display = (props) => {
  return (<div>{props.anecdotes[props.selected]}</div>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // const counts = Array(anecdotes.lengtanecdotes.length).fill(0)h).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [counts, setCounts] = useState(Array(anecdotes.length).fill(0))
  let countsCopy = []

  const handleClick = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  const handleVoteClick = () => {
    countsCopy = [...counts]
    countsCopy[selected] += 1
    // console.log(countsCopy)
    setCounts(countsCopy)
    console.log("Counts copy ", countsCopy)
    console.log("Counts ", counts)
  }

  return (
    <div>
      <Display anecdotes={anecdotes} selected={selected} />
      Has {counts[selected]} votes
      <div><button onClick={handleClick}>next anecdote</button>
      <button onClick={handleVoteClick}>vote</button></div>
      
    </div>
  )
}

export default App