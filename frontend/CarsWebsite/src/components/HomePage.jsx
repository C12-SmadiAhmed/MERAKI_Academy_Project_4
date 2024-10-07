import React , {useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from "axios"
const HomePage = () => {
const [category, setcategory] = useState([])

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





  return (
    <>
    <div>
        <Navbar/>
      <img id="homephoto" src="./src/assets/home-car-wallpapers.jpg"></img>
    </div>
    <h2>Popular categoris</h2>
    <div>
<button onClick={() => showCategory('Electric')}>Electric</button>
<button onClick={() => showCategory('Hybrid')}>Hybrid</button>
<button onClick={() => showCategory('SUV')}>SUV</button>
<button onClick={() => showCategory('Sedan')}>Sedan</button>
<button onClick={() => showCategory('Pickup Truck')}>Pickup Truck</button>
<button onClick={() => showCategory('Hatchback')}>Hatchback</button>
 <button onClick={() => showCategory('Luxury')}>Luxury</button>
<button onClick={() => showCategory('Coupe')}>Coupe</button>
<button onClick={() => showCategory('Crossover')}>Crossover</button>
<button onClick={() => showCategory('Van')}>Van</button>
 </div>
<div>
{category.map((elem, i) => 
(<div key={i}>

<img src={`http://localhost:5000/${elem.carImage}`} alt={elem.carName} />
<h3>{elem.carName}</h3>
</div>
))}
 </div>
  </>
    )}
                

export default HomePage