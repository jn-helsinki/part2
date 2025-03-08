import Note from './components/Note'
import { useState, useEffect } from 'react'
import axios from 'axios'


const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < .5,
      id: String(notes.length+1)
    }
    
    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(() => {
      setNotes(notes.concat(noteObject))
      setNewNote('')
    })
}

const toggleImportanceOf = id =>{
  const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(note => note.id === id)
  const changedNote = {...note, important:!note.important}
  axios.put(url, changedNote)
  .then(response => {
    setNotes(notes.map(note=> note.id ===id ? response.data : note))
  })
  
}



const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}
const notesToShow = showAll
? notes
: notes.filter(note=> note.important)
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
        show {showAll ? 'important':'all'}
        </button>
        
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note 
          key={note.id} 
          note={note} 
          toggleImportance={()=>toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
        onChange={handleNoteChange}
         />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App