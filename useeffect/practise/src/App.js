
import {  useEffect, useState } from 'react';
import './App.css';


function App() {

  const [text,setText]=useState('');
  useEffect(()=>
  {
    console.log("render");
  },[text])
  function handlechange(event)
    {
      setText(event.target.value);
      console.log(text);

    }
  return (
    <div className="App">
      <input type="text" onChange={handlechange}/>
    </div>
  );
}

export default App;
