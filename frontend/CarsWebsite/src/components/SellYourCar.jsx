import axios from 'axios'
import React , {useState} from 'react'
import { FaFaceGrinWink } from "react-icons/fa6"


const SellYourCar = () => {
const [carCondtion, setcarCondtion] = useState("")
const [made, setmade] = useState("")
const [model, setmodel] = useState("")
const [price, setprice] = useState("")
const [range, setrange] = useState("")
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
  author: author , 
  location: location , 
  carImage: carImage , 
  sellersNote:sellersNote , 
}

axios.post("http://localhost:5000/posts/createpost"
  , body
).then((result)=>{
  console.log(result)
  console.log(result.status)
  if (result.status===201){
    console.log("done")
  };
}).catch((err)=>{
  console.log(err)
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
  <input placeholder='Model of your Car' onChange={(e)=>{setmodel(e.target.value)}}/> 
  <input placeholder='Your estimated Price' onChange={(e)=>{setprice(e.target.value)}}/>
  <input placeholder='Range for Km the car ' onChange={(e)=>{setrange(e.target.value)}}/>
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
  <input placeholder=' Your Location' onChange={(e)=>{setSeating(e.target.value)}}/>
  <input placeholder='Car Images' onChange={(e)=>{setcarImage(e.target.value)}}/>
  <input placeholder='Seller sNote' onChange={(e)=>{setsellersNote(e.target.value)}}/>
<button onClick={SubmitButton}>Submit</button>
 </div>
    </div>
  )
}

export default SellYourCar 
