import axios from 'axios'
import React , {useState} from 'react'
import { FaFaceGrinWink } from "react-icons/fa6"


const SellYourCar = () => {
const [carCondtion, setcarCondtion] = useState("")
const [made, setmade] = useState("")
const [model, setmodel] = useState(0)
const [price, setprice] = useState(0)
const [range, setrange] = useState(0)
const [exteriorColor, setexteriorColor] = useState("")
const [interiorColor, setinteriorColor] = useState("")
const [drivetrain, setdrivetrain] = useState("")
const [fueltype, setfueltype] = useState("")
const [Transmission, setTransmission] = useState("")
const [Convenience, setConvenience] = useState("")
const [Entertainment, setEntertainment] = useState("")
const [Exterior, setExterior] = useState("")
const [Safety, setSafety] = useState("")
const [Seating, setSeating] = useState("")
const [author, setauthor] = useState("")
const [location, setlocation] = useState("")
const [sellersNote, setsellersNote] = useState("")
const [carImage, setcarImage] = useState("")

const token =localStorage.getItem('token')

const userId= token ? JSON.parse(atob(token.split('.')[1])).userId : null ; 

const SubmitButton=()=>{
setcarCondtion(carCondtion)
setmade(made)
setmodel(model)
setprice(price)
setrange(range)
setexteriorColor(exteriorColor)
setinteriorColor(interiorColor)
setdrivetrain(drivetrain)
setfueltype(fueltype)
setTransmission(Transmission)
setConvenience(Convenience)
setEntertainment(Entertainment)
setExterior(Exterior)
setSafety(Safety)
setSeating(Seating)
setauthor(author)
setlocation(location)
setcarImage(carImage)
setsellersNote(sellersNote)

const body={
  carCondtion : carCondtion , 
  made: made , 
  model: model , 
  price : price , 
  range : range , 
  exteriorColor : exteriorColor , 
  interiorColor : interiorColor , 
  drivetrain: drivetrain , 
  fueltype : fueltype , 
  Transmission : Transmission , 
  Convenience: Convenience , 
  Entertainment:Entertainment, 
  Exterior : Exterior , 
  Safety : Safety , 
  Seating: Seating , 
  author: userId , 
  location: location , 
  carImage: carImage , 
  sellersNote:sellersNote , 
  
}
console.log(body)


axios.post("http://localhost:5000/posts/createpost"
  , body ,{
    headers: {
      Authorization: `Bearer ${token}`
    } }).then((result)=>{
  console.log(result)
  console.log(result.status)
  if (result.status===201){
    console.log("done")
  };
}).catch((err)=>{
  console.log(err.response.data.err)
})

}







  return (
    <div>
      <h1>Sell Your Car with us today </h1>
      <p>We offer you a free listing for you car so it can be sold as soon as possible 
        , just fill the required informtion below and leave the rest on Us <FaFaceGrinWink />
 </p>
 <div>
  <input placeholder=' Your Car Condtion' onChange={(e)=>{setcarCondtion(e.target.value)}} />
  <input placeholder='Name of your Car' onChange={(e)=>{setmade(e.target.value)}} />
  <input placeholder='Model of your Car' onChange={(e)=>{setmodel(Number(e.target.value))}}/> 
  <input placeholder='Your estimated Price' onChange={(e)=>{setprice(Number(e.target.value))}}/>
  <input placeholder='Range for Km the car ' onChange={(e)=>{setrange(Number(e.target.value))}}/>
  <input placeholder='Exterior Color' onChange={(e)=>{setexteriorColor(e.target.value)}}/>
  <input placeholder='Interior Color' onChange={(e)=>{setinteriorColor(e.target.value)}}/>
  <input placeholder='Drive Train' onChange={(e)=>{setdrivetrain(e.target.value)}}/>
  <input placeholder='Fuel Type' onChange={(e)=>{setfueltype(e.target.value)}}/>
  <input placeholder='Transmission' onChange={(e)=>{setTransmission(e.target.value)}}/>
  <input placeholder='Convenience' onChange={(e)=>{setConvenience(e.target.value)}}/>
  <input placeholder='Entertainment' onChange={(e)=>{setEntertainment(e.target.value)}}/>
  <input placeholder='Exterior' onChange={(e)=>{setExterior(e.target.value)}}/>
  <input placeholder='Safety' onChange={(e)=>{setSafety(e.target.value)}}/>
  <input placeholder='Seating' onChange={(e)=>{setSeating(e.target.value)}}/>
  <input placeholder=' Your Location' onChange={(e)=>{setlocation(e.target.value)}}/>
  <input placeholder='Car Images' onChange={(e)=>{setcarImage(e.target.value)}}/>
  <input placeholder='Seller sNote' onChange={(e)=>{setsellersNote(e.target.value)}}/>
<button onClick={SubmitButton}>Submit</button>
 </div>
    </div>
  )
}

export default SellYourCar 
