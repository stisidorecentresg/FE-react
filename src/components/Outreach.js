import '../App.css'
import { Jumbotron, Container } from 'react-bootstrap';

import b1 from '../assets/image/b1.jpeg'


const Outreach = () => {
  const pageTitle = "Outreach Program"
  const desc = 'When the border between the countries are open, you can join our "OUTREACH PROGRAM" as follows :'
  return (
    <Jumbotron id="outreach" style={{ padding: "2rem", paddingTop: "2rem" }} >
      <div className="align-center">
        <div><h3><b>{ pageTitle }</b></h3></div>
      </div>

      <br/>

      <div className="row" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>     
        <div>          
          <div style={{ textAlign: "justify"}}>
            <p>{ desc }</p>         
          </div>
        </div>
      </div>

      <div className="row" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>     
        <div className="col-sm-5" style={{ border: "1px solid lightGrey", borderRadius: "10px", paddingTop: "1rem"}}>          
        {/* <div className="col-sm -6">           */}
          <div style={{ textAlign: "left"}}>
            <h4>Bulacan, Philippines</h4>
            <p>5 Days / 4 Nights Bulacan Land Tour</p>    
            <p>From SGD380/pax</p>  
            <p>Inclusive of accommodation, meals and transportation</p>
            <ul style={{ marginLeft: "-20px", textAlign: "justify" }}>
              <li>Airfare is excluded</li>
            </ul>
            
            <p><u>Itinerary:</u></p>
            <ul style={{ marginLeft: "-20px", textAlign: "justify" }}>
              <li>Dinner with orphans</li>
              <li>Visit Lalakhan Village</li>
              <li>Visit Sta. Maria town</li>
              <li>Visit wet market, preparation for feeding program</li>
              <li>Tour to Divine National Shrine and sight seeing</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-1"></div>

        <div className="col-sm-5" style={{ border: "1px solid lightGrey", borderRadius: "10px", paddingTop: "1rem" }}>          
        {/* <div className="col-sm -6">           */}
        <div style={{ textAlign: "left"}}>
            <h4>Tanjung Pinang, Riau, Indonesia</h4>
            <p>2 Days / 1 Night Twin Sharing SGD168/pax</p>
            <p>3 Days / 2 Nights Twin Sharing SGD208/pax</p>
            <p>Inclusive of accommodation, meals and transportation</p>
            <ul style={{ marginLeft: "-20px", textAlign: "justify" }}>
              <li>Excluding ferry ticket <br/>(Ferry return SGD51 + tax SGD9 = SGD60)</li>
            </ul>
            
            <p><u>Itinerary:</u></p>
            <ul style={{ marginLeft: "-20px", textAlign: "justify" }}>
              <li>Be friend and dine with the students, teach them English, Sewing skill, Pastry Baking, Basic IT skill</li>
              <li>Shopping at Local wet market</li>
              <li>Island sight seeing</li>
              <li>Visit local plantation</li>
            </ul>
          </div>
        </div>
      </div>

      <br/>

      <img src={ b1 } style={{ width: "100%", borderRadius: "5px" }}/>

    </Jumbotron>
  )
}

export default Outreach
