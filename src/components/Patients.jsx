import Patient from "./Patient"


const Patients = ({pacientes, setPaciente, deletePatient}) => {
   

    return (
        <div  className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            { pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    { pacientes.map( paciente => (
                        <Patient 
                            key = { paciente.id }
                            paciente = { paciente }
                            setPaciente = { setPaciente }
                            deletePatient = { deletePatient }
                        />
                    )) }
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y miralos aqui.</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default Patients