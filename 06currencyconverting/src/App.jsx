import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div 
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
      style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D)"}}
    >
      <div>
        
      </div>
    </div>
  );
}

export default App;
