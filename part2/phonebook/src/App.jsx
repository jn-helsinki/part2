import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{name:'Arto Hellas'}])


const [newName, setNewName] = useState('')

const addName = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
  console.log(event.target.value)
  setPersons(persons.concat({name:event.target.value}))
  setNewName('')
}

const handleNameChange = (event) => {
  console.log(event.target.value);
  
  setNewName(event.target.value)
}

return (
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addName}>
      <div>
        name: 
        <input 
        value={newName} 
        onChange={handleNameChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <div><ul>{persons.map(person => <li id={person.value}>{person.value}</li>)}</ul></div>
  </div>
)
}

export default App;
