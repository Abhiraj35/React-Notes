import React from 'react'
import { useContext } from 'react'
import UserContext  from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)
  if(!user) return <h1>Not Logged In</h1>

  return (
    <div>
      <h2>
        Profile: {user.username}
      </h2>
      
    </div>
  )
}

export default Profile
