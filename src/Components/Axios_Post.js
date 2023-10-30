import React, { useState } from 'react'
import axios from 'axios'

function Axios_Post() {
    const data= {fname : "", lname : ""}
    const[inputdata,setdata]=useState(data)
    const handledata = (e)=>{
        setdata({...inputdata,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputdata).then((response)=>{
            console.log(response)
        })
    }
    const handleUpdate = (e)=>{
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputdata).then((response)=>{
            console.log(response)
        })
    }
    const handleDelete = (e)=>{
        e.preventDefault()
        axios.delete("https://jsonplaceholder.typicode.com/users/2").then((response)=>{
            console.log(response)
        })
    }
  return (
    <>
      <label>First Name: </label>
      <input type="text" name='fname' value={inputdata.fname} onChange={handledata}></input><br></br>
      <label>Last Name: </label>
      <input type="text" name='lname' value={inputdata.lname} onChange={handledata}></input><br></br>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Axios_Post
