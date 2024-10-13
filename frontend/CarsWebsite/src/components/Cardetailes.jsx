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
    
   
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
      };
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
      };
      console.log(car.carImage)
      return (
        <>
      
      
        <div className='car-details-page'>
          <h2>{car.made}</h2>
          <h3>Condition: {car.carCondtion}</h3>
          <h3>Price: ${car.price}</h3>
          <div className='image-container'>
            <img
              src={car.carImage[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className='car-image'/>
             
          </div>
          <button className='favbutton' onClick={prevImage}>Previous</button>
              <button className='favbutton' onClick={nextImage}>Next</button>
          
        </div>
        </>
      );
    };
  
  export default CarDetails;