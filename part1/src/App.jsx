import {useState} from 'react'

const App = (props) => {

  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increment = () => {
    console.log('increasing, value before ', counter)
    setCounter(counter+1)}

  const setToZero = () => {
    console.log('zeroing, value before ',counter)
    setCounter(0)}
  const decrement = () => {
    console.log('decreasing, value before ', counter)
    setCounter(counter-1)}

  const Display = ({counter}) => <>{counter}</>

  const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>
  

return (
  <>
    <Display counter={counter} />
    <div>
    <Button onClick={increment} text='plus' />
    <Button onClick={setToZero} text ='zero' />
    <Button onClick = {decrement} text = 'minus' /></div>


  </>)}
export default App
