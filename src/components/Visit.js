import '../App.css'

const Visit = () => {
  const contactNameSG = "Thomas Wee"
  const contactEmailSG = "thomas@willingheartsorphanage.org"
  const visit1 = "We welcome visitors who want to spend time with us, but would also like to explore the local area around Willing Hearts Orphanage."
  const visit2 = "You can spend up to 6N/7D with us at the St. Isidore Centre Homestay. This is a separate building right next to the orphanage. Rooms come with air-conditioning, and are available in twin sharing and also a family room for four people."

  return (
    <div className="mb-5" style={{ textAlign: "left", marginRight: "100px", marginLeft: "100px" }}>
      <div><h3>Visit</h3></div>
      <div><h5>For more inquiries, please contact { contactNameSG } at { contactEmailSG }</h5></div>
      <div><h6>{ visit1 }</h6></div>
      <div><h6>{ visit2 }</h6></div>
      <br/>
      
    </div>
  )
}

export default Visit
