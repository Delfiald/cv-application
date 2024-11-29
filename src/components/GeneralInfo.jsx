function Input({ setInput }) {
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
  setInput((prevInput) => ({
   ...prevInput,
   [id]: value,
  }));
 };

 return (
  <>
   {inputList.map((inputItem) => (
    <div key={inputItem.key}>
     <input
      type={inputItem.type}
      id={inputItem.id}
      placeholder={inputItem.placeholder}
      onChange={handleChange}
     />
     <label htmlFor={inputItem.id}>{inputItem.label}</label>
    </div>
   ))}
  </>
 );
}

function GeneralInfo({ setInput }) {
 return (
  <section id="general-info">
   <h2>General Information</h2>
   <Input setInput={setInput} />
   <h3>Additional Links</h3>
   <button>
    <i className="fas fa-plus"></i>
   </button>
  </section>
 );
}

export default GeneralInfo;
