import PatientForm from "./components/PatientForm"


function App() {

  return (
    <div className="container mx-auto mt-20">
      <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
        Tracking {''}
        <span className="text-indigo-700">Vet</span>
      </h1>

      <div className="mt-12 md:flex">
        <PatientForm />
      </div>
    </div>
  )
}

export default App
