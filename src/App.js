import "./App.css";
import { useRef } from 'react';

function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sound like ${colorVal}`);
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder="Sound..."/>
      <input ref={color} type="color"/>
      <button> ADD </button>
    </form>

  );
}

export default App;
