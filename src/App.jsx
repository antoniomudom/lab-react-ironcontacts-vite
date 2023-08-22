

import "./App.css";
import { useState } from 'react'; 
import allContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const handleAddContact = () => {
  console.log("Añadiendo nuevo actor")
  let randomNumber = Math.random() * allContacts.length
  let randomIndex = Math.floor(randomNumber)
  let randomContact = allContacts[randomIndex]

  let clone = JSON.parse(JSON.stringify(contacts))
  clone.unshift(randomContact)

  setContacts(clone)
  }


  const handleSortContacts = () => {
  console.log(" ordenando los contactos")
  
  let clone = JSON.parse(JSON.stringify(contacts))
  
  clone.sort((cont1, cont2) => {
   return cont1.name > cont2.name ? 1 : -1
  })
  setContacts(clone)
  }

  
  const handleDeteleContact = (index) => {
  console.log("eliminando contactos", index)
  let clone = JSON.parse(JSON.stringify(contacts))
  clone.splice(index, 1)

  setContacts(clone)

  }
return (
    <div className="App">
      <h1>Lista de contactos</h1>

      <button onClick={handleAddContact} style={{ backgroundColor: 'green', color: 'white' }}>Add random contact</button>
      <button onClick={handleSortContacts} style={{ backgroundColor: 'blue', color: 'white' }}>Sort by name</button>
      <button onClick={handleSortContacts} style={{ backgroundColor: 'grey', color: 'white' }}>Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th style={{ paddingLeft: '20px', paddingRight: '20px' }}>Picture</th>
            <th style={{ paddingLeft: '20px', paddingRight: '20px' }}>Name</th>
            <th style={{ paddingLeft: '20px', paddingRight: '20px' }}>Popularity</th>
            <th style={{ paddingLeft: '20px', paddingRight: '20px' }}>Won Oscar</th>
            <th style={{ paddingLeft: '20px', paddingRight: '20px' }}>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact, i) => (
            <tr key={eachContact.id} >
              <td><img src={eachContact.pictureUrl} width="100px" /></td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity}</td>
              <td>{eachContact.wonOscar === true ? "🏆" : null}</td>
              <td>{eachContact.wonEmmy === true ? "🌟" : null}</td>
              <button onClick={() => handleDeteleContact(i)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;