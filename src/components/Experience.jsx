import "./experience.css";

function Input({
 experienceInput,
 setExperienceInput,
 focusedInputId,
 setFocusedInputId,
 handleRemoveExperience,
}) {
 const handleChange = (id, field, value) => {
  setExperienceInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.map((section) =>
    section.id === id ? { ...section, [field]: value } : section
   ),
  }));
 };

 const handleDescChange = (id, value, descId) => {
  setExperienceInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.map((section) =>
    section.id === id
     ? {
        ...section,
        descriptions: section.descriptions.map((desc) =>
         desc.id === descId ? { ...desc, description: value } : desc
        ),
       }
     : section
   ),
  }));
 };

 const handleFocus = (id, fieldName) => {
  setFocusedInputId(`${fieldName}-${id}`);
 };

 const handleAccordion = (id) => {
  setExperienceInput((prevState) => ({
   ...prevState,
   accordOpenId: id,
  }));
 };

 const handleCloseAccordion = () => {
  setExperienceInput((prevState) => ({
   ...prevState,
   accordOpenId: null,
  }));
 };

 const handleRemoveDesc = (id, descId) => {
  setExperienceInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.map((section) =>
    section.id === id
     ? {
        ...section,
        descriptions: section.descriptions.filter((desc) => desc.id !== descId),
       }
     : section
   ),
  }));
 };

 const handleAddDesc = (id) => {
  setExperienceInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.map((section) =>
    section.id === id
     ? {
        ...section,
        descId: section.descId + 1,
        descriptions: [
         ...section.descriptions,
         {
          id: section.descId + 1,
          description: "",
         },
        ],
       }
     : section
   ),
  }));
 };

 return (
  <>
   {experienceInput.inputs.map((section, index) => (
    <div
     key={section.id}
     className={`experience-section ${
      experienceInput.accordOpenId === section.id ? "open" : ""
     }`}
    >
     {experienceInput.accordOpenId === section.id ? (
      <div className="accordion-wrapper">
       <div
        className={`input-wrapper ${
         focusedInputId === `company-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Abstergo"
         id={`company-${index}`}
         value={section.company}
         onFocus={() => handleFocus(section.id, "company")}
         onChange={(e) => handleChange(section.id, "company", e.target.value)}
        />
        <label htmlFor={`company-${index}`}>Company</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `position-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Templar"
         id={`position-${index}`}
         value={section.position}
         onFocus={() => handleFocus(section.id, "position")}
         onChange={(e) => handleChange(section.id, "position", e.target.value)}
        />
        <label htmlFor={`position-${index}`}>Position</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `startDate-experience-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="month"
         id={`startDate-experience-${index}`}
         value={section.startDate}
         onFocus={() => handleFocus(section.id, "startDate-experience")}
         onChange={(e) => handleChange(section.id, "startDate", e.target.value)}
        />
        <label htmlFor={`startDate-experience-${index}`}>Start Date</label>
       </div>
       <div className="input-wrapper">
        <input
         type="checkbox"
         id={`is-working-${index}`}
         checked={section.isWorking}
         onChange={(e) =>
          handleChange(section.id, "isWorking", e.target.checked)
         }
        />
        <label htmlFor={`is-working-${index}`}>Currently Working</label>
       </div>
       {!section.isWorking && (
        <div
         className={`input-wrapper ${
          focusedInputId === `endDate-experience-${section.id}` ? "focus" : ""
         }`}
        >
         <input
          type="month"
          id={`endDate-experience-${index}`}
          value={section.endDate}
          onFocus={() => handleFocus(section.id, "endDate-experience")}
          onChange={(e) => handleChange(section.id, "endDate", e.target.value)}
         />
         <label htmlFor={`endDate-experience-${index}`}>End Date</label>
        </div>
       )}
       <div
        className={`input-wrapper ${
         focusedInputId === `location-${section.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Firenze"
         id={`location-${index}`}
         value={section.location}
         onFocus={() => handleFocus(section.id, "location")}
         onChange={(e) => handleChange(section.id, "location", e.target.value)}
        />
        <label htmlFor={`location-${index}`}>Location</label>
       </div>
       <div className="description-wrapper">
        {section.descriptions.map((desc, descIndex) => (
         <div key={desc.id}>
          <div
           className={`input-wrapper ${
            focusedInputId === `description-${index}-${desc.id}` ? "focus" : ""
           }`}
          >
           <textarea
            placeholder="Tracking Last Location's Piece of Eden"
            id={`description-${index}-${descIndex}`}
            value={desc.description}
            onFocus={() => handleFocus(desc.id, `description-${index}`)}
            onChange={(e) =>
             handleDescChange(section.id, e.target.value, desc.id)
            }
           ></textarea>
           <label htmlFor={`description-${index}-${descIndex}`}>
            Description {descIndex + 1}
           </label>
          </div>
          {section.descriptions.length > 1 && (
           <button onClick={() => handleRemoveDesc(section.id, desc.id)}>
            <i className="fas fa-minus"></i>
           </button>
          )}
         </div>
        ))}
        <button onClick={() => handleAddDesc(section.id)}>
         <i className="fas fa-plus"></i>
        </button>
       </div>
       <div className="input-action">
        <button onClick={handleCloseAccordion}>Cancel</button>
        {experienceInput.inputs.length > 1 && (
         <button onClick={() => handleRemoveExperience(section.id)}>
          <i className="fas fa-trash"></i>
         </button>
        )}
       </div>
      </div>
     ) : (
      <button onClick={() => handleAccordion(section.id)}>
       {section.company === "" ? "Company Name" : section.company}
      </button>
     )}
    </div>
   ))}
  </>
 );
}

function Experience({
 experienceInput,
 setExperienceInput,
 focusedInputId,
 setFocusedInputId,
}) {
 const handleAddExperience = () => {
  setExperienceInput((prevState) => {
   const newExperience = {
    id: prevState.idCounter + 1,
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    descriptions: [
     {
      id: 1,
      description: "",
     },
    ],
    isWorking: false,
    descId: 1,
   };
   return {
    ...prevState,
    idCounter: prevState.idCounter + 1,
    accordOpenId: prevState.idCounter + 1,
    inputs: [...prevState.inputs, newExperience],
   };
  });
 };

 const handleRemoveExperience = (id) => {
  setExperienceInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.filter((section) => section.id !== id),
  }));
 };

 return (
  <section id="experience">
   <h2>Experience</h2>
   <div className="experience">
    <Input
     experienceInput={experienceInput}
     setExperienceInput={setExperienceInput}
     focusedInputId={focusedInputId}
     setFocusedInputId={setFocusedInputId}
     handleRemoveExperience={handleRemoveExperience}
    />
    <button onClick={handleAddExperience}>
     <i className="fas fa-plus"></i>
    </button>
   </div>
  </section>
 );
}

export default Experience;
