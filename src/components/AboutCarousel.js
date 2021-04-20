import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import '../App.css'
import g from '../assets/image/goretti.png'
// import g1 from '../assets/image/goretti1.png'
// import g2 from '../assets/image/goretti2.png'
// import g3 from '../assets/image/goretti3.png'
import g4 from '../assets/image/goretti4.png'
// import g5 from '../assets/image/goretti5.png'
import i1 from '../assets/image/isidore1.png'
import y1 from '../assets/image/YFMG1.jpeg'

const AboutCarousel = () => {
  const aboutData = [
    {
      image: i1,
      title: "St. Isidore Centre",
      description: "Is a non-profit organization founded by Thomas Wee, who named it after the saint called ISIDORE. Saint Isidore (c. 1070 - 15 May 1130) was a Spanish day labourer known for his goodness toward the poor and animal."
    },
    {
      image: g,
      title: "Asrama Putri Santa Maria Goretti",
      description: "Located in Tanjung Pinang, Riau, Indonesia. The orphanage houses orphans and neglected children from the neighbouring small islands of Riau. There are only 3 nuns looking after them and a couple working as a cook and gardener."
    },
    {
      image: y1,
      title: "Yayasan Felix Maria Go",
      description: "With compassion, YFMG is dedicated to the needy, the poor, mother and children health and education, etc., through various approaches such as direct donation, microfinance, scholarship, small-medium enterprise empowerment program, health program, agriculture, etc., included empowerment of local culture and traditions."
    }
  ]
  return (
    <Carousel fade interval={4000}>
      {aboutData.map((data) => (
        // <Carousel.Item style={{ borderRadius: "5px" }} className="img-gradient" >
        <Carousel.Item style={{ borderRadius: "5px" }} className="" >
          <img
            className="img-responsive center-block d-block mx-auto w-100 img-gradient"
            // src='./public/assets/image/goretti1.png'
            src={ data.image }
            alt={ data.title }
          />
          <Carousel.Caption>
            {/* <h2>{ data.title }</h2> */}
            {/* <h5>{ data.description }</h5> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default AboutCarousel
