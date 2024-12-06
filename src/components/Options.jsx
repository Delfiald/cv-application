import "./options.css";

function Fonts({ fontFamily, setFontFamily }) {
 const handleFontChange = (fontName, fontActive) => {
  setFontFamily((prevState) => ({
   ...prevState,
   fontName: fontName,
   fontActive: fontActive,
  }));
 };
 return (
  <div className="font">
   <div
    className={`button-wrapper ${
     fontFamily.fontActive === "times-new-roman" ? "active" : ""
    }`}
   >
    <button
     style={{ fontFamily: "Times New Roman" }}
     onClick={() =>
      handleFontChange(`"Times New Roman", Times, serif`, "times-new-roman")
     }
    >
     Aa
    </button>
    <div>Times New Roman</div>
   </div>
   <div
    className={`button-wrapper ${
     fontFamily.fontActive === "arial" ? "active" : ""
    }`}
   >
    <button
     style={{ fontFamily: "Arial" }}
     onClick={() => handleFontChange("Arial, Helvetica, sans-serif", "arial")}
    >
     Aa
    </button>
    <div>Arial</div>
   </div>
   <div
    className={`button-wrapper ${
     fontFamily.fontActive === "calibri" ? "active" : ""
    }`}
   >
    <button
     style={{ fontFamily: "Calibri" }}
     onClick={() =>
      handleFontChange(`Calibri, 'Trebuchet MS', sans-serif`, "calibri")
     }
    >
     Aa
    </button>
    <div>Calibri</div>
   </div>
  </div>
 );
}

function Order() {
 return (
  <div className="order">
   <div className="section-list-wrapper">
    <div className="skills">Skills</div>
    <div className="experiences">Experiences</div>
    <div className="educations">Educations</div>
    <div className="projects">Projects</div>
   </div>
  </div>
 );
}

function Options({ fontFamily, setFontFamily }) {
 return (
  <section id="options">
   <h2>Options</h2>
   <Fonts fontFamily={fontFamily} setFontFamily={setFontFamily} />
   <Order />
  </section>
 );
}

export default Options;
