import { MdPhoneAndroid, MdMailOutline, MdHome } from 'react-icons/md'

const Footer = () => {
  const pageTitle= "Donation"
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

  return (
    <div>
      
      
      <div className="bg-dark text-white align-left pt-3 pb-2 pl-4 pr-4 mt-1" style={{ borderRadius: "5px" }}>
        <div className="row"> 
          <div className="col-sm-7" style={{ marginBottom: "15px" }}>
            <div><u>Contact Us</u></div>
            <div className="text-white">{ contactNameSG }</div>
            <div className="text-white"><MdPhoneAndroid />: { contactMobileSG }</div>
            <div className="text-white"><MdMailOutline />: { contactEmailSG }</div>
            <div className="text-white"><MdHome />: { addressSG }</div>
            <div className="text-white">(Opposite Block 113) </div>
          </div>
          <div className="col-sm-5">
            <div className="text-white"><u>Operating Hours</u></div>
            { openingHoursArray.map((arr) => (
              <div className="text-white">{ arr.name }: { arr.time }</div>
            )) }
          </div>
        </div>

        <br/>
        <div className="align-right"><h6>St. Isidore 2021 | All Rights Reserved.</h6></div>
      </div>
    </div>
  )
}

export default Footer
