import '../App.css'
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
  
  return (
    <div className="pt-5 mb-5" style={{ textAlign: "center", borderTop: "1px solid black", marginLeft: "100px", marginRight: "100px" }}>
      <div><h3>Help Us in Philippines</h3></div>
      <div><h5>For more inquiries, please contact { contactNamePH }</h5></div>
      <div><h6><MdPhone/>: { contactLandlinePH } | <MdPhoneAndroid />: { contactMobilePH } | <MdMailOutline Style/>: { contactEmailPH }</h6></div>
      <br/>
      <div className="row">     
        <div className="col-sm" >
          <h4><u>Donate Essential Items</u></h4>
          <div style={{ textAlign: "left", padding: "5px 60px" }}>
            { addressPHArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
          </div>
        </div>

        <div className="col-sm">
          <h4><u>Gift an Education</u></h4>
          <div style={{ textAlign: "left", padding: "5px 40px" }}>
            <h5 className="text-maroon">Bank Transfer to</h5>
            { bankPHArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }

            <br/>

            <h5 className="text-maroon">PayPal Transfer to</h5>
            { paypalPHArray.map((arr) => (
              <h6 className="text-grey">{ arr }</h6>
            )) }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpUsPH
