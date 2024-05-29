import { useForm } from "react-hook-form";
import Error from "./Error";



export default function PatientForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerPatient = () => {
        console.log('New patient');
    }

    console.log(errors);

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Tracking</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add some entry and {''}
                <span className="text-indigo-600 font-bold">manage them</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit(registerPatient)}
                noValidate
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Dog Name
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Dog Name"
                        {...register('name', {
                            required: 'Please complete this field',
                            maxLength: {
                                value: 20,
                                message: 'Max 20 characters'
                            }
                        })}
                    />
                    {errors.name && (
                        <Error>
                            {errors.name?.message?.toString()}
                        </Error>
                    )}

                    {errors.maxLength && (
                        <Error>
                            {errors.name?.message?.toString()}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Owner
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Owner Name"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Date
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Dog Symptoms"
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Save'
                />
            </form>
        </div>
    )
}