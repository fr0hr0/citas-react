import { useState, useEffect } from "react"
import Error from "./Error"

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('')
    const [alias, setAlias] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect( () => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setAlias(paciente.alias)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const makeId = () => {
        const random = Math.random().toString(36).substr(2)
        const _date = Date.now().toString(36)
        return random + _date
    }

    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Enviando Formulario')
        // Validacion del formulario
        if( [nombre, alias, email, alta, sintomas].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true)
            return
        }
        setError(false)
        const objPatient = {
            nombre,
            alias,
            email,
            alta,
            sintomas
        }

        if(paciente.id) {
            objPatient.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPatient : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            objPatient.id = makeId()
            setPacientes([...pacientes, objPatient])
        }

        // console.log(objPatient)


        setNombre('')
        setAlias('')
        setEmail('')
        setAlta('')
        setSintomas('')

    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="shadow-md rounded-lg py-10 px-5 bg-white mb-10"
            >
                { error && <Error><p>Todos los campos son obligatorios</p></Error> }
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre del paciente</label>
                    <input 
                        type="text"
                        id="nombre"
                        placeholder="Nombre del paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-cyan-700 rounded-md"
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alias" className="block text-gray-700 uppercase font-bold">Alias del paciente</label>
                    <input 
                        type="text"
                        id="alias"
                        placeholder="Alias del paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-cyan-700 rounded-md"
                        value={alias}
                        onChange={ (e)=> setAlias(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del paciente</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Email del paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-cyan-700 rounded-md"
                        value={email}
                        onChange={ (e)=> setEmail(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta del paciente</label>
                    <input 
                        type="date"
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-cyan-700 rounded-md"
                        value={alta}
                        onChange={ (e)=> setAlta(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas del paciente</label>
                    <textarea 
                        id="sintomas" 
                        placeholder="Sintomas del paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-cyan-700 rounded-md"
                        value={sintomas}
                        onChange={ (e)=> setSintomas(e.target.value) }
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    value={ paciente.id ? 'Editar Paciente' : ' Agregar Paciente'}
                />

            </form>

        </div>
    )
}

export default Form