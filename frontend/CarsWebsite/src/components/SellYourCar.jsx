import axios from 'axios'
import React , {useState} from 'react'
import { FaFaceGrinWink } from "react-icons/fa6"
import sellyourcarimage from "../assets/sellyourcar.jpg"

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
const [carImage, setcarImage] = useState([])
const [error, seterror] = useState({})

const handlineUserError= ()=>{
const userEroor={}
  if (!carCondtion) userEroor.carCondtion = "Car condition is required.";
  if (!made) userEroor.made = "Car make is required.";
  if (!model) userEroor.model = "Car model is required.";
  if (!price) userEroor.price = "Price is required.";
  if (!range) userEroor.range = "Range is required.";
  if (!exteriorColor) userEroor.exteriorColor = "Exterior color is required.";
  if (!interiorColor) userEroor.interiorColor = "Interior color is required.";
  if (!drivetrain) userEroor.drivetrain = "Drivetrain is required.";
  if (!fueltype) userEroor.fueltype = "Fuel type is required.";
  if (!Transmission) userEroor.Transmission = "Transmission is required.";
  if (!Convenience) userEroor.Convenience = "Convenience is required.";
  if (!Entertainment) userEroor.Entertainment = "Entertainment is required.";
  if (!Exterior) userEroor.Exterior = "Exterior features are required.";
  if (!Safety) userEroor.Safety = "Safety features are required.";
  if (!Seating) userEroor.Seating = "Seating information is required.";
  if (!location) userEroor.location = "Location is required.";
  if (!carImage) userEroor.carImage = "Car image is required.";
  if (!sellersNote) userEroor.sellersNote = "Seller's note is required.";

  return userEroor;
}


const token =localStorage.getItem('token')

const userId= token ? JSON.parse(atob(token.split('.')[1])).userId : null ; 



const handleFileUpload = (e) => {
  const files = Array.from(e.target.files);
  const uploadPromises = files.map(file => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'project4'); 

    return axios.post('https://api.cloudinary.com/v1_1/du9togbq9/image/upload', formData)
      .then(response => {
        console.log('image is uploaded:', response.data);
        return response.data.secure_url; 
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  });

  
  Promise.all(uploadPromises).then(urls => {
    setcarImage(urls);
  });
};













const SubmitButton=()=>{
  console.log("Submit button clicked")
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

const userError= handlineUserError()
console.log("User Errors:", userError);
if (Object.keys(userError).length > 0) {
  seterror(userError);

  return;}
  seterror({}) 

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
  console.log(err)
})

}







  return (
    <>
    <h1 id='sell-your-car-title'>Sell Your Car with us today </h1>
    <div className='sell-Your-car-page'>
      <div className='Info-for-selling'>
      <h1 id="listyoucar">List your car on EliteCars.com</h1>
      <p id="selling-brief">We offer you a free listing for you car so it can be sold as soon as possible 
        , just fill the required informtion  and leave the rest on Us <FaFaceGrinWink />
 </p>
 <img id="sellingImage" src={sellyourcarimage} />
 </div>
 <div className='inputs-for-selling'>
  <input className='SalesInputs' placeholder=' Your Car Condtion' onChange={(e)=>{setcarCondtion(e.target.value)}} />
  {error.carCondtion && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.carCondtion}</span>}

  <input className='SalesInputs' placeholder='Name of your Car' onChange={(e)=>{setmade(e.target.value)}} />
  {error.made && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.made}</span>}

  <input className='SalesInputs'  placeholder='Model of your Car' onChange={(e)=>{setmodel(Number(e.target.value))}}/> 
  {error.model && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.model}</span>}


  <input className='SalesInputs'  placeholder='Your estimated Price' onChange={(e)=>{setprice(Number(e.target.value))}}/>
  {error.price && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.price}</span>}

  <input  className='SalesInputs' placeholder='Range for Km the car ' onChange={(e)=>{setrange(Number(e.target.value))}}/>
  {error.range && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.range}</span>}

  <input className='SalesInputs'  placeholder='Exterior Color' onChange={(e)=>{setexteriorColor(e.target.value)}}/>
  {error.exteriorColor && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.exteriorColor}</span>}
  

  <input className='SalesInputs'  placeholder='Interior Color' onChange={(e)=>{setinteriorColor(e.target.value)}}/>
  {error.interiorColor && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.interiorColor}</span>}

  <input className='SalesInputs'  placeholder='Drive Train' onChange={(e)=>{setdrivetrain(e.target.value)}}/>
  {error.drivetrain && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.drivetrain}</span>}


  <input className='SalesInputs'  placeholder='Fuel Type' onChange={(e)=>{setfueltype(e.target.value)}}/>
  {error.fueltype && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.fueltype}</span>}



  <input className='SalesInputs'  placeholder='Transmission' onChange={(e)=>{setTransmission(e.target.value)}}/>
  {error.Transmission && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.Transmission}</span>}


  <input className='SalesInputs' placeholder='Convenience' onChange={(e)=>{setConvenience(e.target.value)}}/>
  {error.Convenience && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.Convenience}</span>}

  <input className='SalesInputs'  placeholder='Entertainment' onChange={(e)=>{setEntertainment(e.target.value)}}/>
  {error.Entertainment && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.Entertainment}</span>}

  <input className='SalesInputs'  placeholder='Exterior' onChange={(e)=>{setExterior(e.target.value)}}/>
  {error.Exterior && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.Exterior}</span>}

  <input className='SalesInputs'  placeholder='Safety' onChange={(e)=>{setSafety(e.target.value)}}/>
  {error.Safety && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.Safety}</span>}

  <input className='SalesInputs' placeholder='Seating' onChange={(e)=>{setSeating(e.target.value)}}/>
  {error.Seating && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.Seating}</span>}

  <input className='SalesInputs'  placeholder=' Your Location' onChange={(e)=>{setlocation(e.target.value)}}/>
  {error.location && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.location}</span>}

  <input type="file" multiple  className='SalesInputs'  placeholder='Car Images' onChange={(e)=>handleFileUpload(e)}/>
  {error.carImage && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.carImage}</span>}

  <input className='SalesInputs'  placeholder='Seller sNote' onChange={(e)=>{setsellersNote(e.target.value)}}/>
  {error.sellersNote && <span style={{ margintop: '5px' ,fontSize: '15px', color: 'red' }}>{error.sellersNote}</span>}

<button className='SalesInputs'  onClick={SubmitButton}>Submit</button>
 </div>
    </div>
    </>
  )
}

export default SellYourCar 
