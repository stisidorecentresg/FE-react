import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

const Volunteer = () => {
  const volunteerData = [
    {
      image: "http://willingheartsorphanage.org/wp-content/uploads/2014/09/Seniors-gifts.jpeg",
      title: "Volunteer",
      description: "Volunteer in a variety of community projects run by Willing Hearts in the neighbourhood of Bulacan. These include a soup kitchen, teaching arts and craft, cooking, or music. If you have medical skills, we welcome those too, as you can help provide health or dental check-ups for the less fortunate."
    },
    {
      image: "http://willingheartsorphanage.org/wp-content/uploads/2014/09/Seniors-meal.jpeg",
      title: "Stay with us",
      description: "Volunteers can also stay with us, and spend quality time with the boys and girls, who live in the orphanage. Past volunteers have given tuition, or taught new skills, such as arts and craft, music, sports and IT."
    },   
  ]
  return (
    <Carousel interval={4000} className="mb-5" >
      {volunteerData.map((data) => (
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

export default Volunteer
