import '../App.css'
import { Row, Col } from 'react-bootstrap'
import { GiPayMoney, GiCook, GiFoodTruck } from 'react-icons/gi'
import { MdLocalDining } from 'react-icons/md'
import { IoMdBoat } from 'react-icons/io'
import { FaHandHoldingHeart } from 'react-icons/fa'


const HelpUsSG = () => {
  const pageTitle= "What We Do" 

  return (
    <div className="mt-5 mb-5" >
      <div className="align-center">
        <div><h3>{ pageTitle }</h3></div>
      </div>
      
      <br/>
      
      {/* <Row className="align-center">
        <Col xs={6} md={4}>
          <GiPayMoney size={ 70 } color={ "Grey" } onClick={ clickDonate }/>
          <div style={{ marginTop: "15px" }}><h5>DONATION</h5></div>          
        </Col>
        <Col xs={6} md={4}>
          <MdLocalDining size={ 70 } color={ "Grey" } onClick={ clickDining}/>
          <div style={{ marginTop: "15px" }}><h5>DINING</h5></div>          
        </Col>
        <Col xs={6} md={4}>
          <GiCook size={ 70 } color={ "Grey" } onClick={ clickCooking }/>
          <div style={{ marginTop: "15px" }}><h5>COOKING CLASS</h5></div>
        </Col>
      </Row> */}

      <div className="row">
        <div className="col-sm align-center" >
          <FaHandHoldingHeart size={ 70 } color={ "Grey" } onClick={ clickDonate }/>
          <div style={{ marginTop: "15px" }}><h5>DONATION</h5></div>
        </div>
        <div className="col-sm align-center" >
          <MdLocalDining size={ 70 } color={ "Grey" } onClick={ clickDining}/>
          <div style={{ marginTop: "15px" }}><h5>PRIVATE DINING</h5></div>  
        </div>
        <div className="col-sm align-center" >
          <GiFoodTruck size={ 70 } color={ "Grey" } onClick={ clickDelivery }/>
          <div style={{ marginTop: "15px" }}><h5>FOOD DELIVERY</h5></div>
        </div>
        <div className="col-sm align-center" >
          <GiCook size={ 70 } color={ "Grey" } onClick={ clickCooking }/>
          <div style={{ marginTop: "15px" }}><h5>COOKING CLASS</h5></div>
        </div>
        <div className="col-sm align-center" >
          <IoMdBoat size={ 70 } color={ "Grey" } onClick={ clickOutreach }/>
          <div style={{ marginTop: "15px" }}><h5>OUTREACH PROGRAM</h5></div>
        </div>
      </div>

    </div>
  )
}

function clickDonate() {
  var testDiv = document.getElementById("donate2");
  var testDivOffset = testDiv.offsetTop;
  window.scrollTo(0, testDivOffset)
}

function clickDining() {
  var testDiv = document.getElementById("dining2");
  var testDivOffset = testDiv.offsetTop;
  window.scrollTo(0, testDivOffset)
}

function clickDelivery() {
  var testDiv = document.getElementById("delivery");
  var testDivOffset = testDiv.offsetTop;
  window.scrollTo(0, testDivOffset)
}

function clickCooking() {
  var testDiv = document.getElementById("cooking");
  var testDivOffset = testDiv.offsetTop;
  window.scrollTo(0, testDivOffset)
}

function clickOutreach() {
  var testDiv = document.getElementById("outreach");
  var testDivOffset = testDiv.offsetTop;
  window.scrollTo(0, testDivOffset)
}

export default HelpUsSG
