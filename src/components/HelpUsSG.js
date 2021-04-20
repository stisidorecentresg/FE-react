import '../App.css'
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
  
  return (
    <div className="mt-5 mb-5" style={{ textAlign: "center" }}>
      <div><h3>Help Us in Singapore</h3></div>
      <div><h5>For more inquiries, please contact { contactNameSG }</h5></div>
      <div><h6><MdPhoneAndroid />: { contactMobileSG } | <MdMailOutline Style/>: { contactEmailSG }</h6></div>
      <br/>
      <div className="row">     
        <div className="col-sm" >
          <h4><u>Drop Off</u></h4>
          <div style={{ textAlign: "left", padding: "5px 60px" }}>
            <h6>{ nameSG }</h6>
            { addressSGArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
          </div>
        </div>

        <div className="col-sm">
          <h4><u>Sponsor Freight</u></h4>
          <div style={{ textAlign: "left", padding: "5px 50px" }}>
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

          </div>
        </div>

        <div className="col-sm">
          <h4><u>Gift an Education</u></h4>
          <div style={{ textAlign: "left", padding: "5px 50px" }}>

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
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpUsSG
