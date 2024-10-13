const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  const Header = (props) => {
    return (<><h1>{props.name}</h1></>)
  }

  const Part = (props) => {
    return (<><p>{props.name} {props.exercises}</p></>)
  }
 
  const Content = (props) => {

  
    return (<>
    <Part name={props.names[0]} exercises={props.exercises[0]}/>
    <Part name={props.names[1]} exercises={props.exercises[1]}/>
    <Part name={props.names[2]} exercises={props.exercises[2]}/>
  
    </>)
  }

 


  const Total = (props) => {
    return (<><p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p></>)
  }

  return (
    <>
    <Header name = {course} />
    <Content names = {parts} exercises = {exercises} />
    <Total exercises = {exercises} />
    </>
  )
}

export default App
