import '../App.css'
import i4 from '../assets/image/isidore4.png'
import { MdPhoneAndroid, MdMailOutline } from 'react-icons/md'

const Donate = () => {
  const pageTitle= "Donation"
  const nameSG = "St. Isidore Centre"
  const addressSG = "Block 120 Potong Pasir Ave 1, #01-822, Singapore 350120, (Opposite Block 113)"
  const addressSGArray = addressSG.split(', ')
  const bankSGArray = [
    "DBS Bank Acct No: 023-904-7262",
    "Acct Name: St Isidore Centre"
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
      title: "Asrama Putri Santa Maria Goretti, Riau, Indonesia",
      url: null
    },
    {
      title: "Willing Heart Orphanage, Bulacan, Philippines",
      url: "http://willingheartsorphanage.org/"
    },
    {
      title: "Yayasan Felix Maria Go ( Timor Island and other part of Indonesia )",
      url: "http://yayasanfelixmaria.com/"
    }  
  ]
  
  return (
    <div className="bg-jumbotron" id="donate2" style={{ textAlign: "center", borderRadius: "5px", marginBottom: "2rem" }}>      

      <div style={{ padding: "2rem" }} >
        <div className="align-center">
          <div><h3><b>{ pageTitle }</b></h3></div>
        </div>

        <img src={ i4 } alt="" style={{ width: "100%" }} />
      </div>

      <div style={{ textAlign: "justify", padding: "0rem 2rem" }}>
        <p>The pre-loved items you clear from your home will be much appreciated by us. These include, clothes, shoes, bags, toys, books, kitchen-ware, household-ware, and electrical appliances. Please ensure they are in good and usable quality, as we do not have the means to dispose of unwanted items for you. Thank you for your understanding.</p>
        <p>Other than accepting donation, We  also have quite handful of  clothing collections contains of many famous designer brands, preloved branded handbags for Ladies, unique and  vintage   stuff   for display, household and electronic  items, books  etc  in our St. ISIDORE thrift Store FOR  SALE. Feel free to visit us anytime or visit our online store:</p>

        <ul>
          <li><a href="https://carousell.app.link/FvXzetodlcb" target="_blank">St. Isidore Centre Thrift Shop @fiveloavestwofishes4all</a></li>
          <li><a href="https://carousell.com/5loaves2fishesforall" target="_blank">St. Isidore Centre Thrift Shop @5loaves2fishesforall</a></li>
          <li><a href="https://www.carousell.sg/fiveloavestwofishes4all1" target="_blank">St. Isidore Centre Thrift Shop @fiveloavestwofishes4all1</a></li>

        </ul>

        <p>Sales and donation will go to support:</p>
        <ul>
          { destinationArray.map((arr) => {
            if ( arr.url ) {
              return <li><a href={ arr.url } target="_blank">{ arr.title }</a></li>  
            } else {
              return <li>{ arr.title }</li>
            }
          }) }
        </ul>
        <p>Which includes giving our children the education and nourishment they need and helping the family with their basic needs.</p>
      </div>

      <br/>

      <div className="row">     
        <div className="col-sm mb-4"  >
          <h4><u>Donate</u></h4>
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
              
      <div><h4><u>Contact Person</u></h4></div>
      <div className="text-maroon"><h5>{ contactNameSG }</h5></div>
      <div className="text-grey"><h6><MdPhoneAndroid />: { contactMobileSG }</h6></div>
      <div className="text-grey"><h6><MdMailOutline />: { contactEmailSG }</h6></div>

      <br />
      <br />

    </div>
  )
}

export default Donate
