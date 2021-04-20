import '../App.css'
import { Jumbotron, Container } from 'react-bootstrap';

import c1 from '../assets/image/class1.jpeg'

const Dining = () => {
  const pageTitle = "Cooking Class"
  return (
    <Jumbotron id="cooking" style={{ padding: "2rem" }}>
      <div className="align-center">
        <div><h3><b>{ pageTitle }</b></h3></div>
      </div>
      <img src={ c1 } style={{ width: "100%" }}/>
    </Jumbotron>
  )
}

export default Dining
