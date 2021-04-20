import '../App.css'
import i4 from '../assets/image/isidore4.png'
import tw1 from '../assets/image/tw1.png'
import yfmg from '../assets/image/YFMG.jpeg'
import { MdPhoneAndroid, MdMailOutline } from 'react-icons/md'

const AboutUs = () => {
  const pageTitle= ""
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
    "Asrama Putri Santa Maria Goretti, Riau, Indonesia.",
    "Yayasan Felix Maria Go, NTT, Indonesia.",
    "Willing Heart Orphanage, Bulacan, Philippines."
  ]
  
  return (
    <div className="bg-jumbotron bg-white" id="aboutUs" style={{ textAlign: "center", borderRadius: "5px", marginBottom: "2rem", marginTop: "2rem" }}>
     <br />
      

      <div className="align-left">
        <div><h3><b>About</b></h3></div>
      </div>      

      <br/>

      <div className="row" style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>     
        <div className="col-sm-8" >          
          <div style={{ textAlign: "left"}}>
            <p>{ nameSG } is a non-profit organization founded by Thomas Wee, who named it after the saint called ISIDORE. Saint Isidore (c. 1070 - 15 May 1130) was a Spanish day labourer known for his goodness toward the poor and animal. { nameSG } is part of <a href="http://willingheartsorphanage.org/" target="_blank">Willing Hearts Orphanage</a>, Bulacan, Philippines.</p>
          </div>
        </div>

        <div className="col-sm-4">
          <img src={ tw1 } alt="" style={{ width: "60%", borderRadius: "50%" }} />
        </div>
      </div>

      <br/>

      <div className="row" style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>     
        <div className="col-sm-4">
          <img src={ yfmg } alt="" style={{ width: "100%" }} />
        </div>

        <div className="col-sm-8" >
          
          <div style={{ textAlign: "left" }}>
            <p>With dedication and compassion, St. Isidore collaborated with <a href="http://www.yayasanfelixmaria.com/" target="_blank">Yayasan Felix Maria Go</a> to improve life of the needy, the poor, mother and children health and education, especially to Tanjung Pinang Asrama Putri Maria Goretti, Timor Island and other parts of Indonesia.</p>
          </div>

        </div>

        
      </div>

      <br />
      <br />

    </div>
  )
}

export default AboutUs
