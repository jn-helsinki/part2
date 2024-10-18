const Hello = ({name, age}) => {
  // const {name, age} = props

  // const name = props.name
  // const age = props.age
  const bornYear = () => new Date().getFullYear()-age

  // console.log(props)
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
    <Hello name='Martin' age ={26+10} />
    <Hello name={name} age ={age} />
    
    </div>
  )
}

export default App
