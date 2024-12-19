import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  //here useState() is a Hooks.

  function AddValue(){
    setCount(count + 1);
  }

  // //here if we call the addvalue function we are supposing that on callinng this funcion 1 time it will increase the value of counter by more then one time but it is not going to happen because react will see these are are same and they are doing same operation on same variable to it will treat it like setCounter function has been called only ones.
  
  // function AddValue(){
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }


  // //but for the setuation like that we will use callback so that it will change the previous data that is return by the previous function

  // function Addvalue(){
  //   setCount((prevCounter) => prevCounter + 1);
  //   setCount((prevCounter) => prevCounter + 1);
  //   setCount((prevCounter) => prevCounter + 1);
  //   setCount((prevCounter) => prevCounter + 1);
  //   setCount((prevCounter) => prevCounter + 1);
  // }
  const removeValue = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value :- {count}</h2>

      <button onClick={AddValue}>Add value</button>{" "}
      <button onClick={removeValue}> Remove value</button>
      <p>Footer:- {count}</p>
    </>
  )
}

export default App
