function Graphics({input}) {
  return (
    <div id="graphics">
      <h2>Graphics</h2>
      <h2>Name: {input['full-name']}</h2>
      <h2>Email Address: {input.email}</h2>
      <h2>Phone Number: {input.phone}</h2>
    </div>
  )
}

function ATS() {
  return (
    <div id="ats">
      <h2>ATS</h2>
      <h2>Name</h2>
    </div>
  )
}

function Preview({input}) {
  return (
    <section id="preview">
      <Graphics input={input}/> 
      <ATS />
    </section>
  )
}

export default Preview