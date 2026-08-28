import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const About = () => {

const [userData, setUserData] = useState([]);

let getUsers = async()=>{
  let res = await axios.get("https://fakestoreapi.com/users");
  setUserData(res.data);
}

useEffect(()=>{
  getUsers();
},[])

  return (
    <div>
      <h1>{JSON.stringify(userData)}</h1>
    </div>
  )
}

export default About
