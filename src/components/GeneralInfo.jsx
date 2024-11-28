function Input({setInput}) {
  const inputList = [
    {key: 0, type: 'text', id:'full-name', label: 'Full Name', placeholder: 'John Doe'},
    {key: 1, type: 'email', id:'email', label: 'Email Address', placeholder: 'john@doe.com'},
    {key: 2, type: 'text', id:'phone', label: 'Phone Number', placeholder: '+123 456 8900'},
  ]
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  return (
    <>
      {inputList.map(inputItem => (
        <div key={inputItem.key}>
          <label htmlFor={inputItem.id}>
            {inputItem.label}
          </label>
          <input
            type={inputItem.type}
            id={inputItem.id}
            placeholder={inputItem.placeholder}
            onChange={handleChange}
          />
        </div>
      ))}
    </>
  )
}

function GeneralInfo({setInput}) {
  return (
    <section id='general-info'>
      <h2>General Information</h2>
      <Input setInput={setInput} />
      <h2>Additional Links</h2>
    </section>
  )
}

export default GeneralInfo