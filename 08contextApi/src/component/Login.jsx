import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'  // Changed to default import

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div className='flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 absolute translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold'>Login</h3>
            <input 
                className='outline-none bg-transparent' 
                type="text" 
                onChange={(e) => setUsername(e.target.value)}  // Changed to onChange
                placeholder='username'
            />
            <input 
                className='bg-transparent' 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}  // Changed to onChange
                placeholder='password'
            />
            <button 
                className='bg-black text-white px-4 py-2 rounded-full' 
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}

export default Login