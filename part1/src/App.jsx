import {useState} from 'react'

const App = (props) => {

  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)
  const decrement = () => setCounter(counter-1)

  const Display = (props) => {
    return (<>{props.counter}</>)
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

return (
  <>
    <Display counter={counter} />
    <div>
    <Button onClick={increment} text='plus' />
    <Button onClick={setToZero} text ='zero' />
    <Button onClick = {decrement} text = 'minus' /></div>


  </>)}
export default App
