import React from 'react';

const Select = (props) => {
  const { jokeOptions, selection , handleSelect } = props;
  return <select value={selection} onChange={handleSelect}>
      { jokeOptions.map((jokeType) => {
      return <option key={jokeType.value} value={jokeType.value}>{jokeType.label}</option>
    })}
    </select>
  
}

export default Select;