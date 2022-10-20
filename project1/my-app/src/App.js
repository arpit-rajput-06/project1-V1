import './App.css';
import First from './Layout/First';
import Header from './Layout/Header';
import Second from './Layout/Second';
import Fourth from './Layout/Fourth';
import Third from './Layout/Third';
import { useState } from 'react';

function App() {
  const[render, setRender] = useState(1);
  const ComponentToOpen= (val) =>{
    setRender(val);
  }
  return (
    <>
    <Header ComponentToOpen={ComponentToOpen}/>
    { render === 2? <Second/> : render === 3? <Third/> : render === 4? <Fourth/>:<First/>}
    </>
  );
}

export default App;
