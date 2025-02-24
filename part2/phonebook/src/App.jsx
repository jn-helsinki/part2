import { useState, useEffect } from 'react'
import axios from 'axios'


const RenderPerson = (props) => {
  return (<li key={props.name}>{props.name} {props.number}</li>)
}

const List = (props) => {
  return (<><ul>{props.persons.filter(person=>person.name.toLowerCase().startsWith(props.filter.toLowerCase())).map(person => <RenderPerson key={person.name} name={person.name} number={person.number} />)}</ul></>)
  // return <><ul>{props.persons.filter(person=>person.name.toLowerCase().startsWith(filter.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.number}</li>)}</ul></>

}

const Filter = (props) =>{

  return (<div>{props.text}:<input value={props.value} onChange={props.onChange} /> </div>)
}

const App = () => {
  const [persons, setPersons] = useState([])
useEffect(() =>
  {console.log('effect')
axios
.get('http://localhost:3001/persons')
.then(response => 
{
  console.log('promise fulfilled')
  setPersons(response.data)
})}, [])
console.log('render ', persons.length, ' persons')
const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')
const [filter,setFilter] = useState('')

const addPerson = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)

  if (persons.every(person=> person.name.toLowerCase() !== newName.toLowerCase())){
    setPersons(persons.concat({name:newName,number:newNumber, id:persons.length+1}))
    setNewName('')
    setNewNumber('')
  }

  else {
    alert(`Sorry, ${newName} is already in the phonebook.`)
  }



}

const handleNameChange = (event) => {
  console.log(event.target.value);
  
  setNewName(event.target.value)
}

const handleNumberChange = (event) =>{
  setNewNumber(event.target.value)
}


const handleFilterChange = (event) => {
  setFilter(event.target.value)
}


return (
  <div>
    <h2>Phonebook</h2>
    {/* <div>filter:<input value={filter} onChange={handleFilterChange} /> </div> */}
    <Filter text={"filter"} value={filter} onChange={handleFilterChange} />
    <h2>Add a new</h2>
    <form onSubmit={addPerson} >
      <div>
        name: 
        <input
        value={newName} 
        onChange={handleNameChange}
        />
      </div>
      <div>
        number: 
        <input 
        value={newNumber}
        onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
 
 
    <div>
      {/* <ul>{persons.filter(person=>person.name.toLowerCase().startsWith(filter.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.number}</li>)}</ul> */}
      <List persons={persons} filter={filter} />
      
      </div>
  </div>
)
}

export default App;
