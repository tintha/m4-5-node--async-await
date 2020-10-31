import React from 'react'
import Select from './Select'
import { jokeOptions } from './setting'



const Form = (props) => {
  const { handleSubmit, selection, handleSelect } = props;
  return <form onSubmit={handleSubmit}>
    <label htmlFor="jokes">Choos a type of joke:</label>
    <Select jokeOptions={jokeOptions} handleSelect={handleSelect} selection={selection} />
    <button type="submit" onSubmit={handleSubmit}>Submit</button>
  </form>

}

export default Form;