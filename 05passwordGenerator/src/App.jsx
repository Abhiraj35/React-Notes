import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Copy, Lock, Settings, RefreshCw } from 'lucide-react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (characterAllowed) str += "!@#$%^&*()_+";
    if (numberAllowed) str += "0123456789";

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, characterAllowed, numberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, characterAllowed, numberAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setCopied((prev ) => !prev);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center p-4">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center">
          
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Lock className="w-10 h-10" />
            Password Generator
          </h1>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <input
              className="flex-grow bg-gray-100 text-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className={`
                ${copied ? 'bg-green-500' : 'bg-indigo-500 hover:bg-indigo-600'} 
                text-white p-3 rounded-lg transition-all duration-300 ease-in-out
                flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              `}
            >
              {copied ? 'Copied!' : <><Copy className="w-5 h-5" />Copy</>}
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-indigo-500" />
                <span>Password Length</span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={8}
                  max={20}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-32 h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="w-10 text-right">{length}</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-indigo-500" />
                <span>Include Numbers</span>
              </div>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
              />
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-indigo-500" />
                <span>Include Special Characters</span>
              </div>
              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
