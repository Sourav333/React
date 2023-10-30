import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Axios_Get() {
    const[userData,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response)
            setData(response.data)
        })
    },[])
  return (
    <>
    <div><h1>User Name</h1></div>
    <div>{userData.map((e,id)=>{
        return(
            <div key={id}>{e.name}</div>
        )}
    )}</div>
    </>
    
  )
}

export default Axios_Get
