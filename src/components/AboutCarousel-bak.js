import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

const AboutCarousel = () => {
  const aboutData = [
    {
      image: "http://willingheartsorphanage.org/wp-content/uploads/2014/10/538418_370909706277670_374180274_n.jpg",
      title: "From Bulacan, Philippines",
      description: "Willing Hearts Orphanage was started in 2008 by two friends, who were once employee and employer. Maria Teresa from the Philippines and Thomas Wee from Singapore share a passion to do good. And today, their orphanage is home to more than 30 boys and girls, who have lost their parents, lived on the streets, or been abandoned. They receive shelter, nourishment, security, love and an education. You can help turn their lives around too."
    },
    {
      image: "http://willingheartsorphanage.org/wp-content/uploads/2014/12/559466_370908586277782_1563807169_n.jpg",
      title: "About Us",
      description: "Willing Hearts Orphanage INC is a 100% non-stock/non-profit organisation based in the Philippines that works closely with the Philippine Department of Social Welfare & Development (DSWD Reg. No. 111RL-0008-2014)."
    },
    {
      image: "http://willingheartsorphanage.org/wp-content/uploads/2014/12/389649_370908006277840_10857303_n.jpg",
      title: "Our Mission",
      description: "Our mission is to work with the under-privileged, needy, and other marginalised members of society. Where relevant, we also assist and guide them towards rehabilitating and reinstating themselves as contributing citizens of society."
    },    
  ]
  return (
    <Carousel fade interval={4000}>
      {aboutData.map((data) => (
        <Carousel.Item style={{ borderRadius: "5px" }} className="img-gradient" >
          <img
            className="img-responsive center-block d-block mx-auto w-100 img-gradient"
            src={ data.image }
            alt={ data.title }
          />
          <Carousel.Caption>
            <h2>{ data.title }</h2>
            <h5>{ data.description }</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default AboutCarousel
