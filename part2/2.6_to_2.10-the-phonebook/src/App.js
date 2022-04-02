import { useState } from 'react'

import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  const [newName, setNewName] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleForm = (event) => {
    event.preventDefault()
    
    const addEntry = {
      name: newName,
      number: newNumber
    }
    let add =true
    persons.forEach(person => {
      if(JSON.stringify(person) === JSON.stringify(addEntry)){
        alert(`${newName} is already added to phonebook`)
        add = false
        setNewName('')
        setNewNumber('')
      }
    })
    if(add){
      setPersons(persons.concat(addEntry))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const showNumbers = newSearch === '' ? persons : persons.filter((person => person.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearch}/>
      <h3>Add a new</h3>
      <PersonForm onSubmit={handleForm} nameValue={newName} nameHandler={handleName} numberValue={newNumber} numberHandler={handleNumber}/>
      
      <h2>Numbers</h2>
      <Persons person={showNumbers}/>
      
    </div>
  )
}

export default App