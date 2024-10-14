import React, { useContext , useState } from 'react';
import { useParams } from 'react-router-dom'
import { registerContext } from '../App';

const CarDetails = () => {
const {posts,setposts}=useContext(registerContext)
const [currentImageIndex, setCurrentImageIndex] = useState(0);
    

    const { id } = useParams(); 
    console.log(id)
    const car = posts.find(car => car._id === id); // 
    console.log(car)
    if (!car) {
      return <h2>Car not found</h2>;
    }
  
    const totalImages = car.carImage.length;
    console.log(totalImages)
    
    const convince=car.Convenience.split(/ +/)
    const fixedConvince=convince.join(', ')

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
      };
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
      };
      console.log(car.carImage)
      return (
        <>
        <div className='cardetailsmain'>


        <div className='car-details-page'>
        <img
              src={car.carImage[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className='detaild-car'/>
             
          <button className='favbutton' onClick={prevImage}>Previous</button>
              <button className='favbutton' onClick={nextImage}>Next</button>
          <h2>{car.model} {car.made}</h2>
          <h3>Condition: {car.carCondtion}</h3>
          <h3>Price: ${car.price}</h3>
          <br/>
          <h1>Basics</h1>
          <span className='feature'> <span className='label'>Exterior Color:</span>
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

<span className='feature'>
  <span className='label'>Range:</span>
    <span className='value'>{car.range} Km</span>
</span>
<span className='border'></span>
<br/>
<h1>Features</h1>
<span className='feature'> <span className='label'>Convenience</span>
<span className='value'>{fixedConvince}</span> </span><span className='border'></span>



 </div> 
         
          <div className='contact-seller'>
<input placeholder='contact seller'/>
</div>
          </div>
        </>
      );
    };
  
  export default CarDetails;