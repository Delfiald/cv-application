function Graphics({ generalInfoInput }) {
 return (
  <div id="graphics">
   <h2>Graphics</h2>
   <h2>Name: {generalInfoInput.firstName}</h2>
   <h2>Email Address: {generalInfoInput.email}</h2>
   <h2>Phone Number: {generalInfoInput.phone}</h2>
  </div>
 );
}

function ATS({ generalInfoInput }) {
 return (
  <div id="ats">
   <h2>ATS</h2>
   <h2>Name: {generalInfoInput.firstName}</h2>
   <h2>Email Address: {generalInfoInput.email}</h2>
   <h2>Phone Number: {generalInfoInput.phone}</h2>
  </div>
 );
}

function Preview({ generalInfoInput, previewContent }) {
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
    <ATS generalInfoInput={generalInfoInput} />
   ) : (
    <Graphics generalInfoInput={generalInfoInput} />
   )}
  </section>
 );
}

export default Preview;
