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
(<div key={i}>

<img src={`http://localhost:5000/${elem.carImage}`} alt={elem.carName} />
<h3 id="carName">{elem.carName}</h3>
</div>
))}
 </div>
  </>
    )}
                

export default HomePage