import "./generalInfo.css";

function Input({ setGeneralInfoInput, focusedInputId, setFocusedInputId }) {
 const inputList = [
  {
   key: 0,
   type: "text",
   id: "firstName",
   label: "First Name",
   placeholder: "John",
  },
  {
   key: 1,
   type: "text",
   id: "lastName",
   label: "Last Name",
   placeholder: "Doe",
  },
  {
   key: 2,
   type: "email",
   id: "email",
   label: "Email Address",
   placeholder: "john@doe.com",
  },
  {
   key: 3,
   type: "text",
   id: "phone",
   label: "Phone Number",
   placeholder: "+123 456 8900",
  },
 ];

 const handleChange = (e) => {
  const { id, value } = e.target;
  setGeneralInfoInput((prevInput) => ({
   ...prevInput,
   [id]: value,
  }));
 };

 const handleFocus = (id) => {
  setFocusedInputId(id);
 };

 return (
  <>
   {inputList.map((inputItem) => (
    <div
     key={inputItem.key}
     className={`input-wrapper ${
      focusedInputId === inputItem.id ? "focus" : ""
     }`}
    >
     <input
      type={inputItem.type}
      id={inputItem.id}
      placeholder={inputItem.placeholder}
      onChange={handleChange}
      onFocus={() => handleFocus(inputItem.id)}
     />
     <label htmlFor={inputItem.id}>{inputItem.label}</label>
    </div>
   ))}
  </>
 );
}

function AdditionalLink({
 additionalLinks,
 handleRemoveLink,
 handleChange,
 focusedInputId,
 setFocusedInputId,
}) {
 const handleFocus = (id) => {
  setFocusedInputId(id);
 };

 return (
  <>
   {additionalLinks.links.map((link, index) => (
    <div key={link.id}>
     <div
      className={`input-wrapper ${focusedInputId === link.id ? "focus" : ""}`}
     >
      <input
       type="text"
       placeholder={`Link ${index + 1}`}
       value={index.value}
       onChange={(e) => handleChange(e.target.value, link.id)}
       onFocus={() => handleFocus(link.id)}
      ></input>
     </div>
     <button onClick={() => handleRemoveLink(link.id)}>
      <i className="fas fa-minus"></i>
     </button>
    </div>
   ))}
  </>
 );
}

function GeneralInfo({
 setGeneralInfoInput,
 additionalLinks,
 setAdditionalLinks,
 focusedInputId,
 setFocusedInputId,
}) {
 const handleAddLink = () => {
  setAdditionalLinks((prevState) => {
   const newLink = { id: prevState.idCounter, value: "" };
   return {
    idCounter: prevState.idCounter + 1,
    links: [...prevState.links, newLink],
   };
  });
 };

 const handleRemoveLink = (id) => {
  setAdditionalLinks((prevState) => ({
   ...prevState,
   links: prevState.links.filter((link) => link.id !== id),
  }));
 };

 const handleChange = (value, id) => {
  setAdditionalLinks((prevState) => ({
   ...prevState,
   links: prevState.links.map((link) =>
    link.id === id ? { ...link, value: value } : link
   ),
  }));
 };

 return (
  <section id="general-info">
   <h2>General Information</h2>
   <div className="basic-information">
    <Input
     setGeneralInfoInput={setGeneralInfoInput}
     focusedInputId={focusedInputId}
     setFocusedInputId={setFocusedInputId}
    />
   </div>
   <div className="additional-link">
    <h3>Additional Links</h3>
    <AdditionalLink
     additionalLinks={additionalLinks}
     handleRemoveLink={handleRemoveLink}
     handleChange={handleChange}
     focusedInputId={focusedInputId}
     setFocusedInputId={setFocusedInputId}
    />
    <button onClick={handleAddLink}>
     <i className="fas fa-plus"></i>
    </button>
   </div>
  </section>
 );
}

export default GeneralInfo;
