import { useState, useEffect } from "react"
import Header from "./components/header"
import Form from "./components/Form"
import Patients from "./components/Patients"
function App() {

  const [ pacientes, setPacientes] = useState([])
  const [ paciente, setPaciente] = useState({})

  useEffect( () => {
    const getLocalStorage = () => {
      // const lsPatients = JSON.parse(localStorage.getItem('pacientes')) ?? []
      // setPacientes(lsPatients)

      const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
      pacientesLocal?.length > 0 && setPacientes(pacientesLocal);

    }
    getLocalStorage()
  },[])

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])


  
  const deletePatient = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-2">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = { setPaciente }
        />
        <Patients
          pacientes = { pacientes }
          setPaciente = { setPaciente }
          deletePatient = { deletePatient }
        />
      </div>
    </div>
  )
}

export default App
