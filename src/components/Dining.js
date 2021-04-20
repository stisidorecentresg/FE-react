import '../App.css'
import { Jumbotron } from 'react-bootstrap';

import d2 from '../assets/image/dining2.png'

const Dining = () => {
  const diningData = [
    {
      title: "Mum's Signatures",
      menu: [
        "Chef's Signature Cold Platter",
        "Teochew Heritage Braised Duck",
        "Fishmaw Soup with Homemade Meatballs",
        "A Twist on Mum's Buah Keluak",
        "Prawn Sambal",
        "Our Family's Chicken Curry",
        "Traditional Chap Chye",
        "Dessert of the Day"
      ]
    },
    {
      title: "A Classic Family Affair",
      menu: [
        "Chef's Signature Cold Platter",
        "Braised Pork with Buns",
        "Fishmaw Soup with Homemade Meatballs",
        "Loh Mie Steamboat",
        "Duck with Brocolli",
        "Our Family's Chicken Curry",
        "Lobster Hokkien Mee",
        "Dessert of the Day"
      ]
    }
  ]
  
  return (
    <div className="pt-5 mt-1 mb-1 bg-pink" style={{ textAlign: "center", borderRadius: "5px" }}>
      <div><h3>Private Dining</h3></div>
      <br/>

      <div><img src={ d2 } style={{ width: "100%", paddingLeft: "10px", paddingRight: "10px" }} /></div>
      <br/>
      
      <div><h4>Heritage food from Singapore's past</h4></div>
      <h6>By Chef Thomas Wee</h6>
      <h6>Award Winner of 1999 Gala Hotel & catering founder of Willing Hearts Orphanage</h6>
      {/* <div className="row">
        <div className="col-sm"><h5>By Chef Thomas Wee</h5></div>
        <div className="col-sm"><h5>Award Winner of 1999 Gala Hotel & catering founder of Willing Hearts Orphanage</h5></div>
      </div> */}
      <br/>
      <div className="row">    

        { diningData.map((data) => (
          <div className="col-sm" >
            <h4><u>{ data.title }</u></h4>
            <div style={{ }}>
              { data.menu.map((menu) => (
                <h6 className="text-grey">{ menu }</h6>
              )) }
            </div>
          </div>
        )) }        

      </div>

      <br/>

      <h6>Profits will be used to support St. Isidore Centre</h6>
      <h6>(A girl's home in Tanjung Pinang, Riau, Indonesia)</h6>

      <br/>
      <br/>
      <br/>

    </div>
  )
}

export default Dining
