import '../App.css'

const Donate = () => {
  const addressPH = "Brgy. Lalakhan, Sta Maria Bulacan, Philippines 3022"
  const addressPHArray = addressPH.split(', ')
  const bankPHArray = [
    "Willing Hearts Orphanage Inc.",
    "METROBANK",
    "541-3-54108177-2",
    "STA MARIA BAGBAGUIN BRANCH",
  ]
  
  const contactNamePH = "Maria Teresa"
  const contactLandlinePH = "(+63) 44 8150285"
  const contactMobilePH = "(+63) 9229 336043/094"
  const contactEmailPH = "willingheartsorphanage@yahoo.com.ph"


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
    <div className="pt-5 bg-light" style={{ textAlign: "center", borderRadius: "5px" }}>
      <div><h3>Donate</h3></div>
      <br/>
      <div className="row">     
        <div className="col-sm" >
          <h4><u>Singapore</u></h4>
          <div style={{ }}>
            <h5 className="text-maroon">Bank Transfer to</h5>
            { bankSGArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
            <h5 className="text-maroon">Or can PayLah! to</h5>
            <h6 className="text-grey">{ contactNameSG } { contactMobileSG }</h6>
          </div>
        </div>

        <div className="col-sm">
          <h4><u>Philippines</u></h4>
          <div style={{ }}>
            <h5 className="text-maroon">Bank Transfer to</h5>
            { bankPHArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
            
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
              
      <div><h3>Contact Us</h3></div>

      <br/>

      <div className="row">     
        <div className="col-sm" >
          <h4><u>Singapore</u></h4>
          <div style={{ }}>
            <h5 className="text-maroon">Located at</h5>
            <h6 className="text-grey">{ nameSG }</h6>
            { addressSGArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
            <br/>
            <h5 className="text-maroon">For inquiries please call</h5>
            <h6 className="text-grey">{ contactNameSG }: { contactMobileSG }</h6>
            <h6 className="text-grey">{ contactEmailSG }</h6>
          </div>
        </div>

        <div className="col-sm">
          <h4><u>Philippines</u></h4>
          <div style={{ }}>
            <h5 className="text-maroon">Located at</h5>
            { addressPHArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
            <br/>
            <h5 className="text-maroon">For inquiries please call</h5>
            <h6 className="text-grey">{ contactNamePH }: { contactMobilePH }</h6>
            <h6 className="text-grey">Landline: { contactLandlinePH }</h6>
            <h6 className="text-grey">{ contactEmailPH }</h6>
            
          </div>
        </div>
      </div>

      <br/>
      <br/>

    </div>
  )
}

export default Donate
