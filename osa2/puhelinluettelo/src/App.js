import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChanged = (e) => {
    setNewName(e.currentTarget.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
    };
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setNewName("");
      setPersons(persons.concat(personObject));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChanged} />
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return <p key={`person-${index}`}>{person.name}</p>;
      })}
    </div>
  );
};

export default App;
