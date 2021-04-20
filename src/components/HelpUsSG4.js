import '../App.css'
import { Row, Col } from 'react-bootstrap'
import { GiPayMoney, GiCook } from 'react-icons/gi'
import { MdLocalDining } from 'react-icons/md'


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
          <GiPayMoney size={ 70 } color={ "Grey" } onClick={ clickDonate }/>
          <div style={{ marginTop: "15px" }}><h5>DONATION</h5></div>
        </div>
        <div className="col-sm align-center" >
          <MdLocalDining size={ 70 } color={ "Grey" } onClick={ clickDining}/>
          <div style={{ marginTop: "15px" }}><h5>DINING</h5></div>  
        </div>
        <div className="col-sm align-center" >
          <GiCook size={ 70 } color={ "Grey" } onClick={ clickCooking }/>
          <div style={{ marginTop: "15px" }}><h5>COOKING CLASS</h5></div>
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

function clickCooking() {
  var testDiv = document.getElementById("cooking");
  var testDivOffset = testDiv.offsetTop;
  window.scrollTo(0, testDivOffset)
}

export default HelpUsSG
