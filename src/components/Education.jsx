import "./education.css";

function Input({
 educationInput,
 setEducationInput,
 focusedInputId,
 setFocusedInputId,
 handleRemoveEducation,
 accordionOpenId,
 setAccordionOpenId,
}) {
 const handleChange = (id, field, value) => {
  setEducationInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.map((section) =>
    section.id === id ? { ...section, [field]: value } : section
   ),
  }));
 };

 const handleAccordion = (id) => {
  console.log(id);
  setAccordionOpenId(id);
 };

 const handleFocus = (id, fieldName) => {
  setFocusedInputId(`${fieldName}-${id}`);
 };
 return (
  <>
   {educationInput.inputs.map((section, index) => (
    <div
     key={section.id}
     className={`study-section ${accordionOpenId === section.id ? "open" : ""}`}
    >
     {accordionOpenId === section.id ? (
      <div className="accordion-wrapper">
       <div
        className={`input-wrapper ${
         focusedInputId === `schoolName-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Harvard University"
         id={`schoolName-${index}`}
         value={section.schoolName}
         onChange={(e) =>
          handleChange(section.id, "schoolName", e.target.value)
         }
         onFocus={() => handleFocus(section.id, "schoolName")}
        />
        <label htmlFor={`schoolName-${index}`}>School Name</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `study-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Computer Science"
         id={`study-${index}`}
         value={section.study}
         onChange={(e) => handleChange(section.id, "study", e.target.value)}
         onFocus={() => handleFocus(section.id, "study")}
        />
        <label htmlFor={`study-${index}`}>Name of Study</label>
       </div>
       <div className={`input-wrapper`}>
        <input
         type="month"
         id={`startYear-${index}`}
         onChange={(e) => handleChange(section.id, "startYear", e.target.value)}
        />
        <label htmlFor={`startYear-${index}`}>Start Year</label>
       </div>
       <div className="input-wrapper">
        <input
         type="checkbox"
         id={`is-studying-${index}`}
         onChange={(e) =>
          handleChange(section.id, "isStudying", e.target.checked)
         }
        />
        <label htmlFor={`is-studying-${index}`}>Currently in Study</label>
       </div>
       {section.isStudying === false ? (
        <div className={`input-wrapper`}>
         <input
          type="month"
          id={`endYear-${index}`}
          onChange={(e) => handleChange(section.id, "endYear", e.target.value)}
         />
         <label htmlFor={`endYear-${index}`}>End Year</label>
        </div>
       ) : null}
       <div className="input-action">
        <button onClick={() => setAccordionOpenId(null)}>Cancel</button>
        {educationInput.inputs.length > 1 && (
         <button onClick={() => handleRemoveEducation(section.id)}>
          <i className="fas fa-trash"></i>
         </button>
        )}
       </div>
      </div>
     ) : (
      <button onClick={() => handleAccordion(section.id)}>
       {section.schoolName === "" ? "School Name" : section.schoolName}
      </button>
     )}
    </div>
   ))}
  </>
 );
}

function Education({
 educationInput,
 setEducationInput,
 focusedInputId,
 setFocusedInputId,
 accordionOpenId,
 setAccordionOpenId,
}) {
 const handleAddEducation = () => {
  setEducationInput((prevState) => {
   const newEdu = {
    id: prevState.idCounter + 1,
    schoolName: "",
    study: "",
    startYear: "",
    endYear: "",
    isStudying: false,
   };
   return {
    ...prevState,
    idCounter: prevState.idCounter + 1,
    inputs: [...prevState.inputs, newEdu],
   };
  });
  setAccordionOpenId(educationInput.idCounter + 1);
 };

 const handleRemoveEducation = (sectionId) => {
  setEducationInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.filter((field) => field.id !== sectionId),
  }));
 };

 return (
  <section id="education">
   <h2>Education</h2>
   <div className="education">
    <Input
     educationInput={educationInput}
     setEducationInput={setEducationInput}
     focusedInputId={focusedInputId}
     setFocusedInputId={setFocusedInputId}
     handleRemoveEducation={handleRemoveEducation}
     accordionOpenId={accordionOpenId}
     setAccordionOpenId={setAccordionOpenId}
    />
    <button onClick={handleAddEducation}>
     <i className="fas fa-plus"></i>
    </button>
   </div>
  </section>
 );
}

export default Education;
