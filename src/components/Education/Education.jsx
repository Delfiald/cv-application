import "./education.css";

function Input({
 educationInput,
 setEducationInput,
 focusedInputId,
 setFocusedInputId,
 handleRemoveEducation,
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
  setEducationInput((prevState) => ({
   ...prevState,
   accordOpenId: id,
  }));
 };

 const handleCloseAccordion = () => {
  setEducationInput((prevState) => ({
   ...prevState,
   accordOpenId: null,
  }));
 };

 const handleFocus = (id, fieldName) => {
  setFocusedInputId(`${fieldName}-${id}`);
 };
 return (
  <>
   {educationInput.inputs.map((section, index) => (
    <div
     key={section.id}
     className={`study-section ${
      educationInput.accordOpenId === section.id ? "open" : ""
     }`}
    >
     {educationInput.accordOpenId === section.id ? (
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
         focusedInputId === `degree-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Computer Science"
         id={`degree-${index}`}
         value={section.degree}
         onChange={(e) => handleChange(section.id, "degree", e.target.value)}
         onFocus={() => handleFocus(section.id, "degree")}
        />
        <label htmlFor={`degree-${index}`}>Name of Degree</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `startDate-education-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="month"
         id={`startDate-education-${index}`}
         value={section.startDate}
         onFocus={() => handleFocus(section.id, "startDate-education")}
         onChange={(e) => handleChange(section.id, "startDate", e.target.value)}
        />
        <label htmlFor={`startDate-education-${index}`}>Start Year</label>
       </div>
       <div className="input-wrapper">
        <input
         type="checkbox"
         id={`is-studying-${index}`}
         checked={section.isStudying}
         onChange={(e) =>
          handleChange(section.id, "isStudying", e.target.checked)
         }
        />
        <label htmlFor={`is-studying-${index}`}>Currently in Study</label>
       </div>
       {section.isStudying === false ? (
        <div
         className={`input-wrapper ${
          focusedInputId === `endDate-education-${section.id}` ? "focus" : ""
         }`}
        >
         <input
          type="month"
          id={`endDate-education-${index}`}
          value={section.endDate}
          onFocus={() => handleFocus(section.id, "endDate-education")}
          onChange={(e) => handleChange(section.id, "endDate", e.target.value)}
         />
         <label htmlFor={`endDate-education-${index}`}>End Year</label>
        </div>
       ) : null}
       <div className={`input-wrapper`}>
        <input
         type="text"
         id={`gpa-${index}`}
         value={section.gpa}
         placeholder="4,00"
         onChange={(e) => handleChange(section.id, "gpa", e.target.value)}
        />
        <label htmlFor={`gpa-${index}`}>GPA</label>
       </div>
       <div className="input-action">
        <button onClick={handleCloseAccordion}>Cancel</button>
        <button onClick={() => handleRemoveEducation(section.id)}>
         <i className="fas fa-trash"></i>
        </button>
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
}) {
 const handleAddEducation = () => {
  setEducationInput((prevState) => {
   const newEdu = {
    id: prevState.idCounter + 1,
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    isStudying: false,
    gpa: "",
   };
   return {
    ...prevState,
    idCounter: prevState.idCounter + 1,
    accordOpenId: prevState.idCounter + 1,
    inputs: [...prevState.inputs, newEdu],
   };
  });
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
    />
    <button onClick={handleAddEducation}>
     <i className="fas fa-plus"></i> Add Education
    </button>
   </div>
  </section>
 );
}

export default Education;
