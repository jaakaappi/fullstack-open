import React from "react";

const List = ({ filteredPersons }) => {
  return filteredPersons.map((person, index) => {
    return (
      <p key={`person-${index}`}>
        {person.name} {person.number}
      </p>
    );
  });
};

export default List;
