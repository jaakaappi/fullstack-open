import React from "react";

const Filter = ({ nameFilter, setNameFilter }) => {
  return (
    <div>
      filter shown with
      <input
        value={nameFilter}
        onChange={(e) => {
          setNameFilter(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default Filter;
