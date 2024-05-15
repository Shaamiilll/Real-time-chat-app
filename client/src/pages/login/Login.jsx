const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-950 bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-blue-500">Login
                </h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">username</span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10 focus:border-none" />
                    </div>

                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Dont't have an account?</a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
