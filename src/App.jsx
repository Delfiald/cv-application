import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'

function App() {
  const [input, setInput] = useState({
    'full-name': '',
    email: '',
    phone: ''
  });

  return (
    <>
      <Header />
      <GeneralInfo
        setInput = {setInput}
       />
      <Education />
      <Experience />
      <Preview
        input = {input}
       />
      <Footer />
    </>
  )
}

export default App
