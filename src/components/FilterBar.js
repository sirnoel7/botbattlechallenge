import React from 'react';

function FilterBar({ handleFilter }) {
  const classes = ["All", "Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div>
      {classes.map((cls, index) => (
        <button key={index} onClick={() => handleFilter(cls)}>{cls}</button>
      ))}
    </div>
  );
}

export default FilterBar;