import "./skill.css";

function Input({
 skillInput,
 setSkillInput,
 focusedInputId,
 setFocusedInputId,
 handleRemoveSkill,
}) {
 const handleChange = (id, field, value) => {
  setSkillInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.map((input) =>
    input.id === id ? { ...input, [field]: value } : input
   ),
  }));
 };

 const handleFocus = (id) => {
  setFocusedInputId(id);
 };

 const handleOpenAccordion = (id) => {
  setSkillInput((prevState) => ({
   ...prevState,
   accordOpenId: id,
  }));
 };

 const handleCloseAccordion = () => {
  setSkillInput((prevState) => ({
   ...prevState,
   accordOpenId: null,
  }));
 };

 return (
  <>
   {skillInput.inputs.map((skill, index) => (
    <div
     key={skill.id}
     className={`skill-section ${
      skillInput.accordOpenId === skill.id ? "open" : ""
     }`}
    >
     {skillInput.accordOpenId === skill.id ? (
      <div className="accordion-wrapper">
       <div
        className={`input-wrapper ${
         focusedInputId === `skill-name-${skill.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Programming Language"
         id={`skill-name-${index}`}
         value={skill.skillName}
         onFocus={() => handleFocus(`skill-name-${skill.id}`)}
         onChange={(e) => handleChange(skill.id, "skillName", e.target.value)}
        />
        <label htmlFor={`skill-name-${index}`}>Skill Name</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `skill-details-${skill.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Javascript, Java, Phyton"
         id={`skill-details-${index}`}
         value={skill.skillDetails}
         onFocus={() => handleFocus(`skill-details-${skill.id}`)}
         onChange={(e) =>
          handleChange(skill.id, "skillDetails", e.target.value)
         }
        />
        <label htmlFor={`skill-details-${index}`}>Skill Details</label>
       </div>
       <div className="input-action">
        <button onClick={handleCloseAccordion}>Cancel</button>
        {skillInput.inputs.length > 1 && (
         <button onClick={() => handleRemoveSkill(skill.id)}>
          <i className="fas fa-trash"></i>
         </button>
        )}
       </div>
      </div>
     ) : (
      <button onClick={() => handleOpenAccordion(skill.id)}>
       {skill.skillName === "" ? "Skill Name" : skill.skillName}
      </button>
     )}
    </div>
   ))}
  </>
 );
}

function Skill({
 skillInput,
 setSkillInput,
 focusedInputId,
 setFocusedInputId,
}) {
 const handleAddSkill = () => {
  setSkillInput((prevState) => ({
   ...prevState,
   inputs: [
    ...prevState.inputs,
    {
     id: prevState.idCounter + 1,
     skillName: "",
     skillDetails: "",
    },
   ],
   idCounter: prevState.idCounter + 1,
   accordOpenId: prevState.idCounter + 1,
  }));
 };

 const handleRemoveSkill = (id) => {
  setSkillInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.filter((input) => input.id !== id),
  }));
 };
 return (
  <section id="skill">
   <h2>Skill</h2>
   <div className="skill">
    <Input
     skillInput={skillInput}
     setSkillInput={setSkillInput}
     focusedInputId={focusedInputId}
     setFocusedInputId={setFocusedInputId}
     handleRemoveSkill={handleRemoveSkill}
    />
    <button onClick={handleAddSkill}>
     <i className="fas fa-plus"></i>
    </button>
   </div>
  </section>
 );
}

export default Skill;
