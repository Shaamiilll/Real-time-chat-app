import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-950 bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-blue-500">Login
                </h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder=" Full Name" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder=" Username" className="w-full input input-bordered h-10 focus:border-none" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">password</span>
                        </label>
                        <input type="text" placeholder=" password" className="w-full input input-bordered h-10 focus:border-none" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="text" placeholder=" Confirm password" className="w-full input input-bordered h-10 focus:border-none" />
                    </div>
                    {/* GEDER CHECKBOX*/}
                    <GenderCheckBox/>

                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">
                            SignUp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup