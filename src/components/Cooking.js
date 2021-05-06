import '../App.css'
import { Jumbotron, Container } from 'react-bootstrap';

import c2 from '../assets/image/class2.jpeg'

const Cooking = () => {
  const pageTitle = "Cooking Class"
  return (
    <Jumbotron id="cooking" style={{ padding: "2rem" }}>
      <div className="align-center">
        <div><h3><b>{ pageTitle }</b></h3></div>
      </div>
      <img src={ c2 } style={{ width: "100%" }}/>
    </Jumbotron>
  )
}

export default Cooking
