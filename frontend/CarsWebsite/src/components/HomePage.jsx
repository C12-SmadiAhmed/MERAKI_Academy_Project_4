import React , {useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from "axios"
import "../App.css"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'


const carsimage=[
"./src/assets/wallpaper1.jpg",
"./src/assets/wallpaper2.jpg",
"./src/assets/wallpaper3.jpg",
"./src/assets/wallpaper4.jpg",
]

 



const HomePage = () => {
const [category, setcategory] = useState([])
const navigate=useNavigate()
const settings = {
  dots: true, 
  infinite: true, 
  speed: 500, 
  slidesToShow: 1, 
  slidesToScroll: 1, 
  autoplay: true,          
    autoplaySpeed: 5000, 
};
const showpostforCategory = (carName) => {
  navigate(`/posts/${carName}`); 
};


const showCategory=(category)=>{

  axios.get(`http://localhost:5000/category?carCategorie=${category}`).then((res)=>{
    setcategory(res.data.post)
    console.log(res.data.post)
    console.log(res.data)
    console.log(category)
  
  }).catch((err)=>{
    seterror1(err.response.data.message)
    console.log(err.response.data.message)
    
  
  }) 
}
useEffect(() => {
  showCategory('Electric');
}, []);




  return (
    <>
       <div className="slider-container">
        <Slider {...settings}>
          {carsimage.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Car ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    <h2 id="Popularcategoris">Popular categoris</h2>
    <div className='categoryButtons'>
<button className='categoryButton' onClick={() => showCategory('Electric')}>Electric</button>
<button className='categoryButton' onClick={() => showCategory('Hybrid')}>Hybrid</button>
<button className='categoryButton' onClick={() => showCategory('SUV')}>SUV</button>
<button className='categoryButton' onClick={() => showCategory('Sedan')}>Sedan</button>
<button className='categoryButton' onClick={() => showCategory('PickupTruck')}>Pickup Truck</button>
<button className='categoryButton' onClick={() => showCategory('Hatchback')}>Hatchback</button>
 <button className='categoryButton' onClick={() => showCategory('Luxury')}>Luxury</button>
<button className='categoryButton' onClick={() => showCategory('Coupe')}>Coupe</button>
<button className='categoryButton' onClick={() => showCategory('Crossover')}>Crossover</button>
<button className='categoryButton' onClick={() => showCategory('Van')}>Van</button>
 </div>
<div className="carcategory">
{category.map((elem, i) => 
(<div key={i} className='caritem'onClick={() => showpostforCategory(elem.carName)}>

<img src={`http://localhost:5000/${elem.carImage}`} alt={elem.carName} />
<h3 id="carName">{elem.carName}</h3>
</div>
))}
 </div>
 <Footer/>

  </>
    )}
                

export default HomePage