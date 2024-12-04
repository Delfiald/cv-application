import "./projects.css";

function Input({
 projectInput,
 setProjectInput,
 focusedInputId,
 setFocusedInputId,
 handleRemoveProject,
}) {
 const handleChange = (id, field, value) => {
  setProjectInput((prevState) => ({
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
  setProjectInput((prevState) => ({
   ...prevState,
   accordOpenId: id,
  }));
 };

 const handleCloseAccordion = () => {
  setProjectInput((prevState) => ({
   ...prevState,
   accordOpenId: null,
  }));
 };
 return (
  <>
   {projectInput.inputs.map((project, index) => (
    <div
     key={project.id}
     className={`project-section ${
      projectInput.accordOpenId === project.id ? "open" : ""
     }`}
    >
     {projectInput.accordOpenId === project.id ? (
      <div className="accordion-wrapper">
       <div
        className={`input-wrapper ${
         focusedInputId === `project-name-${project.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Odin Homepage"
         id={`project-name-${index}`}
         value={project.projectName}
         onFocus={() => handleFocus(`project-name-${project.id}`)}
         onChange={(e) =>
          handleChange(project.id, "projectName", e.target.value)
         }
        />
        <label htmlFor={`project-name-${index}`}>Project Name</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `project-stack-${project.id}` ? "focus" : ""
        }`}
       >
        <input
         type="text"
         placeholder="Javascript, Webpack, HTML, CSS"
         id={`project-stack-${index}`}
         value={project.projectStack}
         onFocus={() => handleFocus(`project-stack-${project.id}`)}
         onChange={(e) =>
          handleChange(project.id, "projectStack", e.target.value)
         }
        />
        <label htmlFor={`project-stack-${index}`}>Project Stack</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `project-start-${project.id}` ? "focus" : ""
        }`}
       >
        <input
         type="month"
         id={`project-start-${index}`}
         value={project.startDate}
         onFocus={() => handleFocus(`project-start-${project.id}`)}
         onChange={(e) => handleChange(project.id, "startDate", e.target.value)}
        />
        <label htmlFor={`project-start-${index}`}>Start Date</label>
       </div>
       <div
        className={`input-wrapper ${
         focusedInputId === `project-end-${project.id}` ? "focus" : ""
        }`}
       >
        <input
         type="month"
         id={`project-end-${index}`}
         value={project.endDate}
         onFocus={() => handleFocus(`project-end-${project.id}`)}
         onChange={(e) => handleChange(project.id, "endDate", e.target.value)}
        />
        <label htmlFor={`project-end-${index}`}>End Date</label>
       </div>
       <div className="input-action">
        <button onClick={handleCloseAccordion}>Cancel</button>
        {projectInput.inputs.length > 1 && (
         <button onClick={() => handleRemoveProject(project.id)}>
          <i className="fas fa-trash"></i>
         </button>
        )}
       </div>
      </div>
     ) : (
      <button onClick={() => handleOpenAccordion(project.id)}>
       {project.projectName === "" ? "Project Name" : project.projectName}
      </button>
     )}
    </div>
   ))}
  </>
 );
}

function Projects({
 projectInput,
 setProjectInput,
 focusedInputId,
 setFocusedInputId,
}) {
 const handleAddProject = () => {
  setProjectInput((prevState) => ({
   ...prevState,
   inputs: [
    ...prevState.inputs,
    {
     id: prevState.idCounter + 1,
     projectName: "",
     projectStack: "",
     startDate: "",
     endDate: "",
    },
   ],
   idCounter: prevState.idCounter + 1,
   accordOpenId: prevState.idCounter + 1,
  }));
 };

 const handleRemoveProject = (id) => {
  setProjectInput((prevState) => ({
   ...prevState,
   inputs: prevState.inputs.filter((input) => input.id !== id),
  }));
 };
 return (
  <section id="projects">
   <h2>Projects</h2>
   <div className="projects">
    <Input
     projectInput={projectInput}
     setProjectInput={setProjectInput}
     focusedInputId={focusedInputId}
     setFocusedInputId={setFocusedInputId}
     handleRemoveProject={handleRemoveProject}
    />
    <button onClick={handleAddProject}>
     <i className="fas fa-plus"></i>
    </button>
   </div>
  </section>
 );
}

export default Projects;
