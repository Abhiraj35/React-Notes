import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = React.useState([]);

    // useEffect(() => {
    //   fetch("https://api.github.com/users/Abhiraj35")
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, []);

    const data = useLoaderData()

  return (
    <div className='w-full h-screen flex justify-evenly items-center text-3xl bg-orange-700'>
      GitHub UserName:- {data.id}
      <img src={data.avatar_url} width={200} alt="" />
    </div>
  )
}

export default Github



export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Abhiraj35")

    return response.json()
}