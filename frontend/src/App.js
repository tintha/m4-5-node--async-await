import './App.css';
import Form from './Form';
import {useState} from 'react';
import Content from './Content';

function App() {
  const [selection, setSelection] = useState('undefined')
  const [type, setType] = useState('');
  const [result, setResult] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/joke/${type}`)
    .then((res) => res.json())
    .then((data) => {
      setResult(data.joke);
    })
    .catch((e) => console.log(e));
  }
  const handleSelect = (e) => {
    setSelection(e.target.value);
    setType(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        Jokes generator
      </header>
      <Form handleSubmit={handleSubmit} handleSelect={handleSelect} selection={selection}>

      </Form>
      <Content result={result}></Content>
    </div>
  );
}

export default App;
