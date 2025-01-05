import "./generalInfo.css";

function Input({
 generalInfoInput,
 setGeneralInfoInput,
 focusedInputId,
 setFocusedInputId,
 additionalInfo,
 setAdditionalInfo,
 previewContent,
}) {
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

 const handleChange = (id, value) => {
  setGeneralInfoInput((prevInput) => ({
   ...prevInput,
   [id]: value,
  }));
 };

 const handleFocus = (id) => {
  setFocusedInputId(id);
 };

 const handleImage = (inputFile, callback) => {
  if (inputFile && inputFile.type.startsWith("image/")) {
   const reader = new FileReader();
   reader.onload = function (e) {
    callback(e.target.result);
   };
   reader.readAsDataURL(inputFile);
  } else {
   console.error("Please upload a valid image file.");
  }
 };

 const handleAddInfoChange = (id, value) => {
  setAdditionalInfo((prevState) => ({
   ...prevState,
   [id]: value,
  }));
 };

 const handleFileChange = (file) => {
  handleImage(file, (imageData) => {
   handleAddInfoChange("picture", imageData);
  });
 };

 return (
  <>
   {previewContent === "graphics" && (
    <div className="additional-information">
     <div className="input-wrapper">
      <input
       type="file"
       id="profile-picture"
       accept="image/*"
       onChange={(e) => handleFileChange(e.target.files[0])}
      />
      <label htmlFor="profile-picture">
       {additionalInfo.picture === "" ? (
        <i className="fas fa-user"></i>
       ) : (
        <img src={additionalInfo.picture} />
       )}
       <div>Upload File</div>
      </label>
     </div>
     <div
      className={`input-wrapper ${
       focusedInputId === "profile-subject" ? "focus" : ""
      }`}
     >
      <input
       type="text"
       id="profile-subject"
       placeholder="Front-end Developer"
       value={additionalInfo.subject}
       onFocus={() => handleFocus("profile-subject")}
       onChange={(e) => handleAddInfoChange("subject", e.target.value)}
      />
      <label htmlFor="profile-subject">Subject</label>
     </div>
    </div>
   )}
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
      value={generalInfoInput[inputItem.id]}
      onChange={(e) => handleChange(inputItem.id, e.target.value)}
      onFocus={() => handleFocus(inputItem.id)}
     />
     <label htmlFor={inputItem.id}>{inputItem.label}</label>
    </div>
   ))}
   <div
    className={`input-wrapper ${focusedInputId === "summary" ? "focus" : ""}`}
   >
    <textarea
     id="summary"
     placeholder="Chill Front-end Developer Guy that love Critical Thinking, just keep chilling"
     value={additionalInfo.summary}
     onFocus={() => handleFocus("summary")}
     onChange={(e) => handleAddInfoChange("summary", e.target.value)}
    ></textarea>
    <label htmlFor="summary">Summary</label>
   </div>
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
       value={link.value}
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
 generalInfoInput,
 setGeneralInfoInput,
 additionalLinks,
 setAdditionalLinks,
 focusedInputId,
 setFocusedInputId,
 additionalInfo,
 setAdditionalInfo,
 previewContent,
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
     generalInfoInput={generalInfoInput}
     setGeneralInfoInput={setGeneralInfoInput}
     focusedInputId={focusedInputId}
     setFocusedInputId={setFocusedInputId}
     additionalInfo={additionalInfo}
     setAdditionalInfo={setAdditionalInfo}
     previewContent={previewContent}
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
     <i className="fas fa-plus"></i> Add Link
    </button>
   </div>
  </section>
 );
}

export default GeneralInfo;
