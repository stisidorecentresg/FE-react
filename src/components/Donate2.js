import '../App.css'
import i4 from '../assets/image/isidore4.png'
import { MdPhoneAndroid, MdMailOutline } from 'react-icons/md'

const Donate = () => {
  const pageTitle= "Donation"
  const nameSG = "St. Isidore Centre"
  const addressSG = "Block 120 Potong Pasir Ave 1, #01-822, Singapore 350120"
  const addressSGArray = addressSG.split(', ')
  const bankSGArray = [
    "DBS Bank Acct No: 023-904-7262",
    "Acct Name: St. Isidore Centre"
  ]
  const YFMGArray = [
    "POSB Bank Acct No: 186-68463-0",
    "Acct Name: Marcel Go (Yayasan Felix Maria Go)"
  ]
  const contactNameSG = "Thomas Wee"
  const contactMobileSG = "(+65) 9824 1014"
  const contactEmailSG = "thomas@willingheartsorphanage.org"
  const openingHoursArray = [
    {
      name: 'Monday',
      time: 'Off'
    },
    {
      name: 'Tuesday - Sunday',
      time: '11am - 6pm'
    },
    {
      name: 'Public Holiday',
      time: '11am - 6pm'
    },
  ]
  const destinationArray = [
    {
      title: "Asrama Putri Santa Maria Goretti, Riau, Indonesia.",
      url: null
    },
    {
      title: "Willing Heart Orphanage, Bulacan, Philippines.",
      url: "http://willingheartsorphanage.org/"
    },
    
    // "Yayasan Felix Maria Go, NTT, Indonesia.",
    
  ]
  
  return (
    <div className="bg-jumbotron" id="donate2" style={{ textAlign: "center", borderRadius: "5px", marginBottom: "2rem" }}>
      {/* <div><h3>Donate</h3></div> */}
      <div style={{ padding: "2rem" }} >
        <img src={ i4 } alt="" style={{ width: "100%" }} />
      </div>

      <div className="align-center">
        <div><h3><b>{ pageTitle }</b></h3></div>
      </div>

      <div style={{ textAlign: "left", padding: "0rem 4rem"}}>
        <p>The pre-loved items you clear from your home will be much appreciated by us. These include, clothes, shoes, bags, toys, books, kitchen-ware, household-ware, and electrical appliances. Please ensure they are in good and usable quality, as we do not have the means to dispose of unwanted items for you. Thank you for your understanding.</p>
        <p>Sales and donation will go towards running the orphanages:</p>
        <ul>
          { destinationArray.map((arr) => {
            if ( arr.url ) {
              return <li><a href={ arr.url } target="_blank">{ arr.title }</a></li>  
            } else {
              return <li>{ arr.title }</li>
            }
          }) }
        </ul>
        <p>which includes giving our children the education and nourishment they need.</p>
      </div>

      <br/>

      <div className="row">     
        <div className="col-sm" >
          <h4><u>Donate</u></h4>
          <div style={{ }}>
            <h5 className="text-maroon">Bank Transfer to</h5>
            { bankSGArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
            <h5 className="text-maroon">Or</h5>
            { YFMGArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
            <h5 className="text-maroon">Or can PayLah! to</h5>
            <h6 className="text-grey">{ contactNameSG } { contactMobileSG }</h6>
          </div>
        </div>

        <div className="col-sm">
          <h4><u>Drop Off</u></h4>
          <div style={{ }}>
            <h5 className="text-maroon">{ nameSG }</h5>
            { addressSGArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }            
          </div>
          <div style={{ }}>
            <h5 className="text-maroon">Operating Hours</h5>
            { openingHoursArray.map((arr) => (
              <h6 className="text-grey">{ arr.name }: { arr.time }</h6>
            )) }            
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
              
      <div><h4><u>Contact Us</u></h4></div>
      <div className="text-maroon"><h5>{ contactNameSG }</h5></div>
      <div className="text-grey"><h6><MdPhoneAndroid />: { contactMobileSG }</h6></div>
      <div className="text-grey"><h6><MdMailOutline />: { contactEmailSG }</h6></div>

      <br />
      <br />

    </div>
  )
}

export default Donate
