import React from "react";

const Add = ({
  newName,
  handleNameChanged,
  newNumber,
  handleNumberChanged,
  handleAdd,
}) => {
  return (
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
  );
};

export default Add;
