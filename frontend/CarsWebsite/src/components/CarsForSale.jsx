import axios from 'axios'
import React , {useEffect, useState} from 'react'

const CarsforSale = () => {
const [posts, setposts] = useState([])
const [currentImageNumber, setcurrentImageNumber] = useState(0)
useEffect(()=>{
  axios.get(`http://localhost:5000/posts`).then((res)=>{
    
    console.log(res.data.post)
    setposts(res.data.post)
  
  }).catch((err)=>{
    //seterror1(err.response.data.message)
    console.log(err)
    console.log(err.response.data.message)
  
  
})},[]) 

 



  return (
    <div>
    <h2>Cars for Sale</h2>
    {posts.map((elem, i) => {

      const totalImages = elem.carImage ? elem.carImage.length : 0;

      const nextImage = () => {
        setcurrentImageNumber((prevIndex) => (prevIndex + 1) % totalImages);
      };

      const prevImage = () => {
        setcurrentImageNumber((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
      };

      return (
        <>
      <div key={i}>
      <h3>{elem.carCondtion}</h3>
      <h3>{elem.made}</h3>
      <h3>{elem.price}</h3>
       {totalImages > 0 && (
      <div>
      <img 
      src={elem.carImage[currentImageNumber]} 
      style={{ width: '300px', height: 'auto', margin: '10px' }} />
       <div>
      {totalImages > 1 && (
     <>
  <button onClick={prevImage} disabled={totalImages <= 1}>Previous</button>
  <button onClick={nextImage} disabled={totalImages <= 1}>Next</button>
   </>
   )}
   </div>
   </div>
 )}
</div>
</>
  )})}
</div>
)}

export default CarsforSale