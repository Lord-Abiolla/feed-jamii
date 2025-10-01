import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="grid bg-[#EFF5E9] h-screen place-items-center">
            <div className="bg-[#C3D9AC] mx-auto w-l shadow rounded-3xl p-4 text-center">
                <h1 className="font-bold text-2xl mb-4 mt-7">Create Account</h1>

                <div className="flex flex-col items-center p-3">
                    <input className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none" type="text" placeholder="Username" required />
                    <input className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none" type="email" placeholder="Email" required />
                    <input className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none" type="password" placeholder="Password" required />

                    <button className="bg-[#30573B] rounded-4xl w-70 text-white font-bold p-3 mt-4 cursor-pointer shadow-2xl">
                        Create account
                    </button>

                    <div className="text-[#30573B] text-sm mt-8 flex flex-row">
                        <p className="me-2">
                            Already have an account?
                        </p>
                        <Link className="underline" to={"/signin"}>
                            Login in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;