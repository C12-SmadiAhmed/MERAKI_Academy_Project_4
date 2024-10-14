import axios from 'axios'
import React, { useContext, useEffect , useState } from 'react'
import { registerContext } from '../App'

const AdminDashbored = () => {
const [numberofposts, setnumberofposts] = useState(0)
const [numberofusers, setnumberofusers] = useState(0)
const {token}=useContext(registerContext)

console.log(token)
  useEffect(()=>{
  axios.get(`http://localhost:5000/posts/numberofposts`,{
headers:{
  Authorization: `Bearer ${token}`
}
}).then((result)=>{
console.log(result)
setnumberofposts(result.data.Numberofposts)
 }).catch((err)=>{
    console.log(err)
  })
  },[])

  
  useEffect(()=>{
    axios.get(`http://localhost:5000/users/numberofusers`,{
      headers:
{
  Authorization: `Bearer ${token}`
}}

    ).then((result)=>{
  console.log(result)
  setnumberofusers(result.data.NumberofUsers)
   }).catch((err)=>{
      console.log(err)
    })
    },[]) 

  return (
    <div>
      
      AdminDashbored
<h2>Number of Posts made on the webiste: {numberofposts}</h2>
<h2>Number of Users registerd on the webiste: {numberofusers}</h2>


    </div>
  )
}

export default AdminDashbored 