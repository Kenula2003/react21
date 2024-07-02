import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Alert } from './Alert'



function App() {
  const [aler, setAlert] = useState(new Date())

  function handleAlert(){
    const date = new Date()
    setAlert(date)
    alert(`Date is ${date.toLocaleDateString()} & Time is ${date.toLocaleString()}`)
  }

  return (
    <>
    <Alert onClick={handleAlert}/>
     
    </>
  )
}

export default App
