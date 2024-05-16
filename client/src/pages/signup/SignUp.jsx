import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../Hooks/useSignup'


const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const {loading , signup} =useSignup()

    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs,gender})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-950 bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-blue-500">Signup
                </h1>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder=" Full Name" className="w-full input input-bordered h-10 "
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder=" Username" className="w-full input input-bordered h-10 focus:border-none"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">password</span>
                        </label>
                        <input type="password" placeholder=" password" className="w-full input input-bordered h-10 focus:border-none"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder=" Confirm password" className="w-full input input-bordered h-10 focus:border-none"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>
                    {/* GEDER CHECKBOX*/}
                    <GenderCheckBox onCheckboxChange ={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading?<span className='loading loading-spinner'></span>:"Signup"}
                            <span></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup