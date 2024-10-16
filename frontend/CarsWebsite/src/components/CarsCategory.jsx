import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Routes, Route, Link, useNavigate } from "react-router-dom"

const CarsCategory = () => {
    const {carName}=useParams()
    const [posts, setposts] = useState([])
const [currentImageNumber, setcurrentImageNumber] = useState([0])
console.log(carName)
const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/posts/${carName}`).then((res)=>{
      console.log(res)
      if (Array.isArray(res.data.post)) {
        setposts(res.data.post);
    } else {
        navigate("/Shopping")
    }
       }).catch((err)=>{
          console.log(err) 
        })
    },[])
    
    const nextImage = (index) => {
        setcurrentImageNumber((prev) => {
          const newImageNumbers = [...prev];
          newImageNumbers[index] = (newImageNumbers[index] + 1) % (posts[index].carImage.length || 1);
          return newImageNumbers;
        });
      };
      
      const prevImage = (index) => {
        setcurrentImageNumber((prev) => {
          const newImageNumbers = [...prev];
          newImageNumbers[index] = (newImageNumbers[index] - 1 + (posts[index].carImage.length || 1)) % (posts[index].carImage.length || 1);
          return newImageNumbers;
        });
      };
      
      return (
        <div className='cars-for-sale-page'>
          <h2>Cars for Sale</h2>
          <div className='posts-container'>
            {posts.map((elem, i) => {
              const totalImages = elem.carImage ? elem.carImage.length : 0;
      
              return (
                <div className='post-card' key={i}>
                  <div className='image-container'>
                    {totalImages > 0 && (
                      <img
                        src={elem.carImage[currentImageNumber[i]]}
                        alt={`Car ${i}`}
                        className='car-image'
                      />
                    )}
                  </div>
                  <div className='image-buttons'>
                    {totalImages > 1 && (
                      <>
                        <button onClick={() => prevImage(i)} disabled={totalImages <= 1}>Previous</button>
                        <button onClick={() => nextImage(i)} disabled={totalImages <= 1}>Next</button>
                      </>
                    )}
                  </div>
                  <div className='car-details'>
                  
                    <h3>{elem.carCondtion}</h3>
                    <Link to={`/Car-Details/${elem._id}`}>
                    <h3>{elem.made}</h3></Link>
                    <h3>{elem.price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
      }

export default CarsCategory 