  import React, { useContext , useState ,useEffect} from 'react';
import { useNavigate, useParams,Link ,useLocation  } from 'react-router-dom'
import { registerContext } from '../App';
import axios from 'axios'
import { TextField, Button, Box, Typography,IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import socketInit from './soket.server';
import { SocketContext } from './SocketMessages';
import SendSocketmessages from './SendSocketmessages';


const CarDetails = () => {
const {posts,setposts}=useContext(registerContext)
const [currentImageIndex, setCurrentImageIndex] = useState(5);
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [email , setemail]= useState("")
const[phoneNumber,setphoneNumber]=useState(0)
const [message , setmessage]= useState("")
const [chatmessages, setchatmessages] = useState([])
const [isChatOpen, setIsChatOpen] = useState(false)
const {token}=useContext(registerContext)

const navigate=useNavigate()
const socket=useContext(SocketContext)
console.log(socket)

const userId= token ? JSON.parse(atob(token.split('.')[1])).userId : null ; //id for the customer


    const { id } = useParams(); 
    console.log(id)
    const car = posts.find(car => car._id === id); // 
    console.log(car)
    if (!car) { 
      return <h2>Car not found</h2>;
    }
  
    const totalImages = car.carImage.length;
    console.log(totalImages)
    
    const filterdNumbers=(car.price).toLocaleString()

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
      };
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
};
      console.log(car.carImage)
      console.log(car.Convenience)
      console.log("sellerid",car.author)
      console.log("userid",userId)
      console.log("carid",car._id)
      
const backButton=()=>{
  navigate(-1)
}



 

const sendButton=()=>{
  console.log("sned button clicked")
setfirstName(firstName)
setlastName(lastName)
setemail(email)
setphoneNumber(phoneNumber)
setmessage(message)

const body={
  firstName , 
lastName,
email,
phoneNumber,
message,
carId:car._id , 
sellerId: car.author ,
customerId: userId
}
axios.post("http://localhost:5000/messages/", body ,
{
  headers:{
    Authorization:`Bearer ${token}`
    
  }
}


).then((result)=>{
  console.log(result)
  console.log(result.status)
  if (result.status===201){
   console.log("message sent to seller")};
}).catch((err)=>{ 
  console.log(err)
})}
//-----------------------------------------------------------------------------------



      return (
        <>
   {/*       <Link to={`/socket-messages/${car.author._id}`}>
    Chat with the seller
</Link>  */}
  

        <div className='top-cardetailes-page'>
 <div className='car-descrption-image'> 
        <img
              src={car.carImage[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className='detaild-car'/>
            
            <IconButton onClick={prevImage} disabled={totalImages <= 1}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton onClick={nextImage} disabled={totalImages <= 1}>
                <ArrowForwardIcon />
              </IconButton>
              </div>


<div className='right-hald-top-page'>
<h2>Contact seller via Email</h2> 
 <div className='namesinput'>
 
<input className="contact-Seller-inputs" onChange={(e)=>{setfirstName(e.target.value)}}  placeholder='Fist name'/>
<input className="contact-Seller-inputs" onChange={(e)=>{setlastName(e.target.value)}}placeholder='Last name'/>
</div>
<div className='email-phone-inputs'>
<input className="contact-Seller-inputs" onChange={(e)=>{setemail(e.target.value)}} placeholder='Email'/>
<input className="contact-Seller-inputs" onChange={(e)=>{setphoneNumber(e.target.value)}}placeholder='Phone (optional)'/>
</div>
<div className='message-input'>
<input className="contact-Seller-inputs" onChange={(e)=>{setmessage(e.target.value)}} placeholder='Write your qustion or massage'/>
</div>

<button className='submit-the-message' onClick={sendButton}>Send</button>
<Button sx={{ fontSize: '1.3rem' }} onClick={() => setIsChatOpen(true)}>Chat with the seller</Button>
{isChatOpen && (
                <SendSocketmessages 
                    socket={socket} 
                    user_id={userId} 
                    seller_id={car.author._id} 
                    onClose={() => setIsChatOpen(false)} 
                />
            )}

</div>
</div>







        <div className='cardetailsmain'>
        <div className='car-details-page'>

<div className='car-detailes'>
     <h2 className='car-condition'> {car.carCondtion}</h2>
     <h2 className='car-made'>{car.model} {car.made}</h2>
     <h2 className='car-price'>Price: {filterdNumbers} JOD</h2>
     </div>
          <br/>
          <h1>Basics</h1>
          <span className='feature'> <span className='label'>Exterior Color</span>
          <span className='value'>{car.exteriorColor}</span> </span><span className='border'></span>

          <span className='feature'><span className='label'>Interior Color:</span>
          <span className='value'>{car.interiorColor}</span>
         </span>
         <span className='border'></span>

<span className='feature'>
    <span className='label'>Drivetrain:</span>
    <span className='value'>{car.drivetrain}</span>
</span>
<span className='border'></span>

<span className='feature'>
    <span className='label'>Transmission:</span>
    <span className='value'>{car.Transmission}</span>
</span>
<span className='border'></span>
<span className='feature'><span className='label'>Engine</span>
          <span className='value'>{car.Enigne}</span>
         </span>
         <span className='border'></span>

<span className='feature'>
  <span className='label'>Range:</span>
    <span className='value'>{car.range} Km</span>
</span>
<span className='border'></span>
<br/>
<h1>Features</h1>
<span className='feature'> <span className='label'>Convenience:</span>
<span className='value'>{car.Convenience.map((elem, i) => (
  <ul id="featureslist" key={i}>{elem}</ul>
))}</span> </span>

<span className='border'></span>
<span className='feature'> <span className='label'>Entertainment</span>
<span className='value'>{car.Entertainment.map((elem, i) => (
  <ul id="featureslist" key={i}>{elem}</ul>
))}</span> </span>
<span className='border'></span>
<span className='feature'>
  <span className='label'>Exterior</span>
    <span className='value'>{car.Exterior} </span>
</span>
<span className='border'></span>
<span className='feature'> <span className='label'>Safety</span>
<span className='value'>{car.Safety.map((elem, i) => (
  <ul id="featureslist" key={i}>{elem}</ul>
))}</span> </span> 
<span className='border'></span>



 </div> 
         
          <div className='contact-seller'>
 
          <h1>Seller Details</h1>
<span className='feature'>
  <span className='label'>Seller Name</span>
    <span className='value'>{car.author.firstName} {car.author.lastName} </span>
</span>
<span className='border'></span>

<span className='feature'>
  <span className='label'>Seller Email</span>
    <span className='value'>{car.author.email}  </span>
</span>
<span className='border'></span>



<span className='feature'>
  <span className='label'>Car location</span>
    <span className='value'>{car.location} </span>
</span>
<span className='border'></span>

<span className='feature'>
  <span className='label'>Seller notes on the car</span>
    <span className='value'>{car.sellersNote} </span>
</span>
<span className='border'></span>


</div>
          </div>
   <button className="Back-button" onClick={backButton}></button>
        </>
      );
    };
  
  export default CarDetails; 
 
