import '../App.css'
import { Button, CardDeck, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { MdPhoneAndroid, MdPhone, MdMailOutline } from 'react-icons/md'

const HelpUsPH = () => {
  const addressPH = "Brgy. Lalakhan, Sta Maria Bulacan, Philippines 3022"
  const addressPHArray = addressPH.split(', ')
  const bankPHArray = [
    "Willing Hearts Orphanage Inc.",
    "METROBANK",
    "541-3-54108177-2",
    "STA MARIA BAGBAGUIN BRANCH",
  ]
  const paypalPHArray = [
    "PayPal account",
    "acct.willingheartsorphanage@yahoo.com.ph."
  ]
  const contactNamePH = "Maria Teresa"
  const contactLandlinePH = "(+63) 44 8150285"
  const contactMobilePH = "(+63) 9229 336043/094"
  const contactEmailPH = "willingheartsorphanage@yahoo.com.ph"

  const imageDropOff = "http://willingheartsorphanage.org/wp-content/uploads/2014/09/Thrift-B.jpg"
  const imageEducation = "http://willingheartsorphanage.org/wp-content/uploads/2014/06/SAM_1752.jpg"


  const popoverDropOff = (
    <Popover id="popover-basic">
      <Popover.Title as="h3" className="mb-2">Donate Essential Items</Popover.Title>
      <Popover.Content>
        <p>The orphanage also welcomes donations of the following items:</p>
        <p className="text-maroon"><b>Food</b>, such as rice, sugar, cereals (oatmeal), canned goods, milk and milo</p>
        <p className="text-maroon"><b>Toiletries</b>, such as shampoo, toothpaste, toothbrush, bath soap, and deodorant</p>
        <p className="text-maroon"><b>Others</b>, such as detergent, dishwashing liquid, and mosquito repellent</p>
      </Popover.Content>
    </Popover>
  );

  const popoverEducation = (
    <Popover id="popover-basic">
      <Popover.Title as="h3" className="mb-2">Donate Essential Items</Popover.Title>
      <Popover.Content>
        <p>The orphanage can accommodate up to 50 children and continued support for the School Education Fund is needed to pay for them to attend school. You can help by sponsoring a child’s primary or secondary education:</p>
        <p><b>Monthly</b></p>        
        <ul>
          <li>1,500 PHP per month</li>
        </ul>
        <p><b>Or Yearly</b></p>        
        <ul>
          <li>Primary Level: 10,000 PHP per year</li>
          <li>Secondary Level: 30,000 PHP per year</li>
        </ul>
        <p>Each sponsorship covers the transport, daily meals and school materials (e.g. books, stationery and uniforms) for each child.</p>
      </Popover.Content>
    </Popover>
  );
  
  return (
    
    <div className="pt-5 mb-5" style={{ borderTop: "1px solid black", marginLeft: "100px", marginRight: "100px" }}>
      <div className="align-center">
        <div><h3>Help Us in Philippines</h3></div>
        <div><h5>For more inquiries, please contact { contactNamePH }</h5></div>
        <div><h6><MdPhone/>: { contactLandlinePH } | <MdPhoneAndroid />: { contactMobilePH } | <MdMailOutline Style/>: { contactEmailPH }</h6></div>
      </div>
      <br/>
      <CardDeck >

        <Card>
          <Card.Img variant="top" src={ imageDropOff } />
          <Card.Body>
            <Card.Title>Donate</Card.Title>
            <Card.Text>
              { addressPHArray.map((arr) => (
                <h6 className="text-grey">{ arr }</h6>
              )) }
            </Card.Text>
            <OverlayTrigger trigger="click" placement="top" overlay={ popoverDropOff }>
              <Button variant="primary">Learn more...</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={ imageEducation } />
          <Card.Body>
            <Card.Title>Gift an Education</Card.Title>
            <Card.Text>
              <h5 className="text-maroon">Bank Transfer to</h5>
              { bankPHArray.map((arr) => (
                <h6 className="text-grey">{ arr }</h6>
              )) }

              <br/>

              <h5 className="text-maroon">PayPal Transfer to</h5>
              { paypalPHArray.map((arr) => (
                <h6 className="text-grey">{ arr }</h6>
              )) }
            </Card.Text>
            <OverlayTrigger trigger="click" placement="top" overlay={ popoverEducation }>
              <Button variant="primary">Learn more...</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>

      </CardDeck>
    </div>
  )
}

export default HelpUsPH
