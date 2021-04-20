import '../App.css'
import { Button, CardDeck, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { MdPhoneAndroid, MdMailOutline } from 'react-icons/md'

const HelpUsSG = () => {
  const nameSG = "St. Isidore Centre"
  const addressSG = "Block 120 Potong Pasir Ave 1, #01-822, Singapore 350120"
  const addressSGArray = addressSG.split(', ')
  const bankSGArray = [
    "DBS Bank Acct No: 023-904-7262",
    "Acct Name: St. Isidore Centre"
  ]
  const contactNameSG = "Thomas Wee"
  const contactMobileSG = "(+65) 9824 1014"
  const contactEmailSG = "thomas@willingheartsorphanage.org"
  const imageDropOff= "http://willingheartsorphanage.org/wp-content/uploads/2018/07/Thomas-Sign-Web.jpg"
  const imageFreight= "http://willingheartsorphanage.org/wp-content/uploads/2021/02/20210223-freight-box.png"
  const imageEducation= "http://willingheartsorphanage.org/wp-content/uploads/2016/04/SAM_1858.jpg"

  const popoverDropOff = (
    <Popover id="popover-basic">
      <Popover.Title as="h3" className="mb-2">Donate your good, old things or buy from the thrift shop</Popover.Title>
      <Popover.Content>
        <p>The pre-loved items you clear from your home will be much appreciated by us. These include, clothes, shoes, bags, toys, books, kitchen-ware, household-ware, and electrical appliances. Please ensure they are in good and usable quality, as we do not have the means to dispose of unwanted items for you. Thank you for your understanding.</p>
        <p>Sales proceeds go towards running the orphanage, which includes giving our children the education and nourishment they need.</p>
      </Popover.Content>
    </Popover>
  );

  const popoverFreight = (
    <Popover id="popover-basic">
      <Popover.Title as="h3" className="mb-2">Sponsor a Thrift Box</Popover.Title>
      <Popover.Content>
        <p>Every week, we send a Thrift Box from Singapore to Willing Hearts Orphanage in the Philippines. This box contains foodstuff and pre-loved items donated through our thrift shop in Singapore. The items are then sold in the Philippines thrift shop to help raise money for the operations of the orphanage.</p>
        <p>Sponsor a thrift box by paying for the cost of shipment. The cost to sea-freight one box is S$175, but we appreciate contributions of any amount.</p>
      </Popover.Content>
    </Popover>
  );
  
  const popoverEducation = (
    <Popover id="popover-basic">
      <Popover.Title as="h3" className="mb-2">Sponsor a child’s education</Popover.Title>
      <Popover.Content>
        <p>The orphanage can accommodate up to 50 children and continued support for the School Education Fund is needed to pay for them to attend school. You can help by sponsoring a child’s primary or secondary education:</p>
        <ul>
          <li>Primary Level: S$250.00 per year</li>
          <li>Secondary Level: S$750.00 per year</li>
        </ul>
        <p>Each sponsorship covers the transport, daily meals and school materials (e.g. books, stationery and uniforms) for each child.</p>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="mt-5 mb-5" >
      <div className="align-center">
        <div><h3>Help Us in Singapore</h3></div>
        <div><h5>For more inquiries, please contact { contactNameSG }</h5></div>
        <div><h6><MdPhoneAndroid />: { contactMobileSG } | <MdMailOutline Style/>: { contactEmailSG }</h6></div>
      </div>
      <br/>
      <CardDeck >

        <Card>
          <Card.Img variant="top" src={ imageDropOff } />
          <Card.Body>
            <Card.Title>Drop Off</Card.Title>
            <Card.Text>
              <h6>{ nameSG }</h6>
              { addressSGArray.map((arr) => (
                <h6 className="text-grey">{ arr }</h6>
              )) }
            </Card.Text>
            <OverlayTrigger trigger="click" placement="top" overlay={ popoverDropOff }>
              <Button variant="primary">Learn more...</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={ imageFreight } />
          <Card.Body>
            <Card.Title>Sponsor Freight</Card.Title>
            <Card.Text>
              <h5 className="text-maroon">Cheque Payable to</h5>
              <h6 className="text-grey">MHM RSG(S) Pte Ltd</h6>

              <h5 className="text-maroon">And mailed to</h5>
              <h6>{ nameSG }</h6>
              { addressSGArray.map((arr) => (
                <h6 className="text-grey">{ arr }</h6>
              )) }

              <br/>

              <h5 className="text-maroon">Bank Transfer to</h5>
              { bankSGArray.map((arr) => (
                <h6 className="text-grey">{ arr }</h6>
              )) }

              <br/>

              <h5 className="text-maroon">Any donation can PayLah!</h5>
              <h6 className="text-grey">{ contactNameSG } { contactMobileSG }</h6>  
            </Card.Text>
            <OverlayTrigger trigger="click" placement="top" overlay={ popoverFreight }>
              <Button variant="primary">Learn more...</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Img variant="top" src={ imageEducation } />
          <Card.Body>
            <Card.Title>Gift an Education</Card.Title>
            <Card.Text>
              <h5 className="text-maroon">Cheque payable to</h5>
              <h6>{ nameSG }</h6>
              { addressSGArray.map((arr) => (
                <h6 className="text-grey">{ arr }</h6>
              )) }            

              <br/>

              <h5 className="text-maroon">Bank Transfer to</h5>
              { bankSGArray.map((arr) => (
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

export default HelpUsSG
