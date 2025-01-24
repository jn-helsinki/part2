import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{name:'Arto Hellas'}])


const [newName, setNewName] = useState('')

const addName = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)

  if (persons.every(person=> person.name.toLowerCase() !== newName.toLowerCase())){
    setPersons(persons.concat({name:newName}))
  }

  else {
    alert(`Sorry, ${newName} is already in the phonebook.`)
  }


  setNewName('')
}

const handleNameChange = (event) => {
  console.log(event.target.value);
  
  setNewName(event.target.value)
}

return (
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addName} >
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
    <div><ul>{persons.map(person => <li key={person.name}>{person.name}</li>)}</ul></div>
  </div>
)
}

export default App;
