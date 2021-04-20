import '../App.css'
import { Jumbotron, Container } from 'react-bootstrap';

import d1 from '../assets/image/dining1.jpeg'

const Dining = () => {
  const pageTitle="Private Dining"
  return (
    <Jumbotron id="dining2" style={{ padding: "2rem" }}>
      <div className="align-center">
        <div><h3><b>{ pageTitle }</b></h3></div>
      </div>
      <img src={ d1 } style={{ width: "100%" }}/>
    </Jumbotron>
  )
}

export default Dining
