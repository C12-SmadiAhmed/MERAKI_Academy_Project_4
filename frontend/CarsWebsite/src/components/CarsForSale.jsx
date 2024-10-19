import axios from 'axios'
import React , {useEffect, useState} from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { TextField, Button, Box, Typography,IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'





const CarsforSale = () => {
const [posts, setposts] = useState([])
const [currentImageNumber, setcurrentImageNumber] = useState([])
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(1000000)
const [searchTerm, setSearchTerm] = useState("")
const [isFilterApplied, setIsFilterApplied] = useState(false)

const navigate= useNavigate()


useEffect(()=>{
  axios.get(`http://localhost:5000/posts`).then((res)=>{
    
    console.log(res.data.post._id)
     
    setposts(res.data.post)
    setcurrentImageNumber(new Array(res.data.post.length).fill(5));
  
  }).catch((err)=>{
    //seterror1(err.response.data.message)
    console.log(err)
    console.log(err.response.data.message)
  
  
})},[])   


const handleMinPriceChange = (e) => {
  const value = e.target.value;
  if (value === "") {
    setMinPrice("");
  } else {
    const parsedValue = Number(value);
    setMinPrice(isNaN(parsedValue) ? 0 : parsedValue);
  }
};

const handleMaxPriceChange = (e) => {
  const value = e.target.value;
  if (value === "") {
    setMaxPrice("");
  } else {
    const parsedValue = Number(value);
    setMaxPrice(isNaN(parsedValue) ? 1000000 : parsedValue);
  }
};

const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};


const filterPosts = () => {
  return posts.filter(post => {
    const price = parseFloat(post.price);
    const matchesprice= isFilterApplied ? (price >= minPrice && price <= maxPrice):true
    const matchessearch = post.made.toLowerCase().includes(searchTerm.toLowerCase()) || post.model.toString().includes(searchTerm);
    return matchesprice && matchessearch
  });
};

const filteredPosts = filterPosts()
const backButton=()=>{
  navigate(-1)
}

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
  <>
  <div className='cars-for-sale-page'>
    <h2>Cars for Sale</h2>

    <Box 
        sx={{
          backgroundColor: '#f9f9f9', 
          p: 2, 
          borderRadius: 2, 
          boxShadow: 2,
          mb: 3 , 
          width: '80%',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Filter by Price
        </Typography>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Min Price"
            type="number"
            value={minPrice === "" ? "" : minPrice}
            onChange={handleMinPriceChange}
            variant="outlined"
            size="small"
            sx={{ flex: 1, mr: 1 }}
          />
          <TextField
            label="Max Price"
            type="number"
            value={maxPrice === "" ? "" : maxPrice}
            onChange={handleMaxPriceChange}
            variant="outlined"
            size="small"
            sx={{ flex: 1 }}
          />
        </Box>
        <TextField
          label="Search by Make or Model"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: '100%', mb: 2 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => {setIsFilterApplied(true)}}
        >
          Apply Filter
        </Button>
      </Box>






    <div className='posts-container'>
      {filteredPosts.map((elem, i) => {
        ;
        const totalImages = elem.carImage ? elem.carImage.length : 0; 
        const filterdNumbers=(elem.price).toLocaleString()

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
                <IconButton onClick={() => prevImage(i)} disabled={totalImages <= 1}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton onClick={() => nextImage(i)} disabled={totalImages <= 1}>
                <ArrowForwardIcon />
              </IconButton>
                  {/* <button onClick={() => prevImage(i)} disabled={totalImages <= 1}>Previous</button>
                  <button onClick={() => nextImage(i)} disabled={totalImages <= 1}>Next</button> */}
                </>
              )}
            </div>
            <div className='car-details'>
            
              <h3 className='car-condition'>{elem.carCondtion}</h3>
              <Link to={`/Car-Details/${elem._id}`} className='car-model'>
              <h3>{elem.model} {elem.made}</h3></Link>
              {}
              <h3 className='car-price'>{filterdNumbers} JOD</h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  <button className="Back-button" onClick={backButton}></button>
  </>
);
}




export default CarsforSale