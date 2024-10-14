import React , {useContext} from 'react'
import { registerContext } from '../App'
import { useActionData } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const Adminroute = ({element}) => {
const {token,loggedin}= useContext(registerContext)
const isAdmin= token ? JSON.parse(atob(token.split('.')[1])).role : null ; 
console.log(isAdmin.role)

if ( isAdmin.role!== 'Admin'){
    return <Navigate to="/admin/signin"></Navigate> 
}
return element
  
}

export default Adminroute