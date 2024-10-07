import React , {useContext, useState} from 'react'
import axios from "axios"
import { registerContext } from '../App'

const Register = () => {
  const {setfirstName1}=useContext(registerContext)
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [age , setage]= useState("")
const [password , setpassword]= useState("")
const [email , setemail]= useState("")


const RegisterButton=()=>{
setfirstName1(firstName)
setlastName(lastName)
setage(age)
setpassword(password)
setemail(email)

const body={
    firstName:firstName , 
    lastName:lastName , 
    age : age , 
    password: password , 
    email : email
}
console.log(body)
axios.post("http://localhost:5000/users/register", body ,).then((result)=>{
    console.log(result)


}).catch((err)=>{
    console.log(err)
})

}

  return (
    <>
    <h3>Register</h3>
    <div>
        <input id="firstName"  placeholder="First Name" onChange={(e)=>{ setfirstName(e.target.value )}}></input>
        <input id="lastname"  placeholder="Last Name" onChange={(e)=>{ setlastName(e.target.value )}}></input>
        <input id="age"  placeholder="Age"onChange={(e)=>{ setage(e.target.value )}}></input>
        <input id="password"  placeholder="Password" onChange={(e)=>{ setpassword(e.target.value )}}></input>
        <input id="email" placeholder="Email" onChange={(e)=>{ setemail(e.target.value )}}></input>

        <button onClick={RegisterButton} >Register</button>



    </div>
    </>
  )
}

export default Register
