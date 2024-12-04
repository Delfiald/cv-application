function Graphics({ generalInfoInput }) {
 return (
  <div id="graphics">
   <h2>Graphics</h2>
   <p>
    Name: {generalInfoInput.firstName} {generalInfoInput.lastName}
   </p>
   <p>
    Email Address:{" "}
    <a href={`mail:to${generalInfoInput.email}`}>{generalInfoInput.email}</a>
   </p>
   <p>Phone Number: {generalInfoInput.phone}</p>
  </div>
 );
}

function ATS({
 generalInfoInput,
 additionalLinks,
 educationInput,
 experienceInput,
 skillInput,
}) {
 return (
  <div id="ats">
   <h2>ATS</h2>
   <p>
    Name: {generalInfoInput.firstName} {generalInfoInput.lastName}
   </p>
   <p>Email Address: {generalInfoInput.email}</p>
   <p>Phone Number: {generalInfoInput.phone}</p>
   <div>
    {additionalLinks.links.map((link) => (
     <ul key={link.id}>
      <li>{link.value}</li>
     </ul>
    ))}
   </div>
   <div>
    {educationInput.inputs.map((input) => (
     <ul key={input.id}>
      <li>{input.schoolName}</li>
      <li>{input.study}</li>
      <li>
       {input.startYear} to {!input.isStudying ? input.endYear : "Present"}
      </li>
     </ul>
    ))}
   </div>
   <div>
    {experienceInput.inputs.map((input) => (
     <ul key={input.id}>
      <li>{input.company}</li>
      <li>{input.position}</li>
      <li>
       {input.startDate} - {!input.isWorking ? input.endDate : "Present"}
      </li>
      <li>{input.location}</li>
      <li>
       <ul>
        {input.descriptions.map((desc) => (
         <li key={desc.id}>{desc.description}</li>
        ))}
       </ul>
      </li>
     </ul>
    ))}
   </div>
   <div>
    {skillInput.inputs.map((input) => (
     <ul key={input.id}>
      <li>{input.skillName}</li>
      <li>{input.skillDetails}</li>
     </ul>
    ))}
   </div>
  </div>
 );
}

function Preview({
 generalInfoInput,
 previewContent,
 additionalLinks,
 educationInput,
 experienceInput,
 skillInput,
}) {
 return (
  <section id="preview">
   <div className="page-button-wrapper">
    <button>
     <i className="fas fa-chevron-left"></i>
    </button>
    <p>Page 1 of 2</p>
    <button>
     <i className="fas fa-chevron-right"></i>
    </button>
   </div>
   {previewContent === "ats" ? (
    <ATS
     generalInfoInput={generalInfoInput}
     additionalLinks={additionalLinks}
     educationInput={educationInput}
     experienceInput={experienceInput}
     skillInput={skillInput}
    />
   ) : (
    <Graphics generalInfoInput={generalInfoInput} />
   )}
  </section>
 );
}

export default Preview;
