import Note from './components/Note'
import { useState, useEffect } from 'react'
import axios from 'axios'
import noteService from './services/notes'


const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    noteService.getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
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
    
    noteService.create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
}

const toggleImportanceOf = id =>{
  const note = notes.find(note => note.id === id)
  const changedNote = {...note, important:!note.important}
  noteService.update(id, changedNote)
  .then(returnedNote => {
    setNotes(notes.map(note=> note.id ===id ? returnedNote : note))
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