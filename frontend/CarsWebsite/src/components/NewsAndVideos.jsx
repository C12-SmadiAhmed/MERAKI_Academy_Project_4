import React from 'react'
import carimage1 from "../assets/electriccars.jpg"
import carimage2 from "../assets/automativ.jpg"
import carimage3 from "../assets/greencars.jpg"
import carimage4 from "../assets/news4.jpg"
import carimage5 from "../assets/news5.jpg"
import carimage6 from "../assets/news6.jpg"
import carimage7 from "../assets/news7.jpg"
import carimage8 from "../assets/news8.jpg"
import { useNavigate } from 'react-router-dom'

const carNews = [
  {
    title: "Electric Vehicles Surge in Popularity",
    content: "In 2023, sales of electric vehicles (EVs) surged, with a notable increase of over 40% compared to the previous year. Major automakers such as Tesla, Ford, and Volkswagen have ramped up production to meet this growing demand. Governments worldwide are also investing in charging infrastructure, making it easier for consumers to transition to electric. Analysts predict that by 2025, EVs could account for over 20% of new car sales, driven by advancements in battery technology and consumer awareness of climate change.",
    image: carimage1
  },
  {
    title: "New Safety Features in 2024 Models",
    content: "The automotive industry is prioritizing safety in the upcoming 2024 models, introducing innovative features such as advanced driver-assistance systems (ADAS). These include automatic emergency braking, lane-keeping assist, and adaptive cruise control. Additionally, manufacturers are integrating AI-driven technologies that can predict potential hazards, ensuring a safer driving experience. Consumer advocacy groups are encouraging buyers to consider these features as essential for modern vehicles.",
    image: carimage2
  },
  {
    title: "Automakers Focus on Sustainability",
    content: "With increasing awareness of environmental issues, many car manufacturers are committing to sustainable practices. This includes using recycled materials in vehicle production and developing greener manufacturing processes that reduce waste and energy consumption. Brands like BMW and Toyota are leading the charge, focusing on a circular economy model where materials are reused and repurposed. As consumers become more environmentally conscious, companies are recognizing the importance of transparency in their sustainability efforts.",
   image: carimage3
  },
  {
    title: "Tech Innovations in Automotive Industry",
    content: "The integration of cutting-edge technology is transforming the automotive industry. From smart dashboards that connect with smartphones to vehicles equipped with Internet of Things (IoT) capabilities, the driving experience is becoming increasingly connected. Major tech companies are collaborating with automakers to develop fully autonomous vehicles. As these innovations advance, they promise to enhance convenience, safety, and overall driver enjoyment, potentially reshaping transportation as we know it.",
    image: carimage4
  },
  {
    title: "Hybrid Models Gain Traction",
    content: "As fuel prices continue to rise, hybrid vehicles are becoming a popular choice among consumers looking for a balance between fuel efficiency and performance. Models such as the Toyota Prius and Honda Insight are leading the charge, offering drivers the ability to switch between gas and electric power. Automakers are investing heavily in hybrid technology, expanding their lineups to cater to the growing demand. This trend is expected to continue as consumers prioritize cost savings and environmental concerns.",
   image: carimage5
  },
  {
    title: "Car Subscription Services on the Rise",
    content: "Car subscription services are gaining traction, particularly among younger consumers who value flexibility and convenience. Companies like Care by Volvo and Ford's Canvas offer consumers the option to subscribe to a vehicle for a monthly fee, which often includes insurance, maintenance, and roadside assistance. This model appeals to urban dwellers who may not want the long-term commitment of ownership. As more brands enter the subscription market, the automotive landscape is shifting towards more versatile options for vehicle access.",
   image: carimage6
  },
  {
    title: "Future of Autonomous Vehicles",
    content: "The future of autonomous vehicles is both exciting and challenging. Major tech companies and automakers are conducting extensive testing of self-driving cars in various urban environments. While the technology has advanced significantly, regulatory hurdles and public acceptance remain significant challenges. Experts believe that fully autonomous vehicles could be on the roads within the next decade, potentially reducing accidents caused by human error and revolutionizing urban transport systems.", 
    image: carimage7
  },
  {
    title: "Classic Cars Fetch High Prices at Auctions",
    content: "Recent classic car auctions have seen record-breaking prices for vintage models, with some cars fetching millions. The classic car market is booming, driven by collectors and enthusiasts looking to invest in automotive history. Iconic models from brands like Ferrari, Aston Martin, and Porsche are particularly sought after. The appreciation of these vehicles not only reflects their craftsmanship but also the nostalgia they evoke, making them valuable assets in today's market.",
    image: carimage8
  }
];

const NewsAndVideos = () => {
  const navgite=useNavigate()
  const backButton=()=>{
    navgite(-1)
  }
  return (
    <>
    <div className="news-and-videos">
      {carNews.map((news, index) => (
        <div key={index} className="news-item">
          <h2 className="news-title">{news.title}</h2>
          <div className="news-content-image">
            <div className="news-content">
              <p>{news.content}</p>
            </div>
            <img src={news.image} alt={news.title} className="news-image" />
          </div>
        </div>
      ))}
    </div>
    <button className='Back-button' onClick={backButton}>Back</button>
    </>
  );
}
export default NewsAndVideos 
