import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className="py-16 bg-white text-center text-3xl">
      User:{userid}
    </div>
  )
}

export default User
