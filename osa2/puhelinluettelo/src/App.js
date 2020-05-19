import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const handleNameChanged = (e) => {
    setNewName(e.currentTarget.value);
  };

  const handleNumberChanged = (e) => {
    setnewNumber(e.currentTarget.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setNewName("");
      setnewNumber("");
      setPersons(persons.concat(personObject));
    }
  };

  const filteredPersons =
    nameFilter.length > 0
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(nameFilter)
        )
      : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
          value={nameFilter}
          onChange={(e) => {
            setNameFilter(e.currentTarget.value);
          }}
        />
      </div>
      <h2>Add new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChanged} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChanged} />
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person, index) => {
        return (
          <p key={`person-${index}`}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
