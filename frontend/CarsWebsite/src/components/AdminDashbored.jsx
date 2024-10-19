import axios from 'axios'
import React, { useContext, useEffect , useState } from 'react'
import { registerContext } from '../App'
import AdminPosts from './AdminPosts'
import { useNavigate } from 'react-router-dom'

const AdminDashbored = () => {
const [numberofposts, setnumberofposts] = useState(0)
const [numberofusers, setnumberofusers] = useState(0)
const {token}=useContext(registerContext)
const navigite=useNavigate()
const createPosts=()=>{
navigite("/admin/createpost")
}






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
    <div className='admin-dashboard'>
    <h1>Admin Dashboard</h1>
    <div className='info-container'>
      <div className='info-card'>
        <h2>Number of Users Registered:</h2>
        <p>{numberofusers}</p>
        <button className='admin-buttons' onClick={() => navigite("/Userinfo")}>View User Info</button>
      </div>
      <div className='info-card'>
        <h2>Number of Posts Made:</h2>
        <p>{numberofposts}</p>
        <button className='admin-buttons' onClick={() => navigite("/UserPosts")}>Check User Posts</button>
      </div>
    </div>
    <button className='create-post-button' onClick={createPosts}>Create New Post</button>
  </div>
);
};

export default AdminDashbored 