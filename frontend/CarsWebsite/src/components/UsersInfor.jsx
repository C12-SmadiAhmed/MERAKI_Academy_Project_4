import React , {useEffect,useContext,useState} from 'react'
import axios from 'axios'
import { registerContext} from '../App'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

 
const UsersInfo = () => {
 const {token}=useContext(registerContext)
 const [userdata, setuserdata] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/usersInfo`,{
            headers:{
              Authorization: `Bearer ${token}`
            }}


        ).then((res)=>{
          console.log(res)
          console.log(res.data)
          setuserdata(res.data.users)
        
        }).catch((err)=>{
          //seterror1(err.response.data.message)
          console.log(err)
          
        
      })},[])  

      

      





  return (
    <>
    <h1>EliteCars Users Infromtion</h1>
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userdata.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.email || 'N/A'}</TableCell>
            <TableCell>{user.role.role || 'N/A'}</TableCell> 
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
);
};
  


export default UsersInfo 