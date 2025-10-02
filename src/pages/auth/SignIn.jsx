import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SignIn() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const stored = localStorage.getItem("users");
        const users = stored ? JSON.parse(stored) : [];
        const existingUser = users.find(user => user.username === formData.username && user.password === formData.password);

        if (existingUser) {
            navigate("/dashboard")
        } else {
            setError("Invalid username or password!");
            setTimeout(() => {
                setError("");
            }, 2000)
        }
    }

    return (
        <div className="grid bg-[#EFF5E9] h-screen place-items-center">

            <div className="bg-[#C3D9AC] mx-auto w-l shadow rounded-3xl p-4 text-center">
                <h1 className="font-bold text-2xl mb-4 mt-7">Sign In</h1>

                <form
                    className="flex flex-col items-center p-3"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required />
                    {error && (<p className="text-red-700 font-semibold text-sm">{error}</p>)}
                    <input
                        className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required />
                    {error && (<p className="text-red-700 font-semibold text-sm">{error}</p>)}

                    <button
                        className="bg-[#30573B] rounded-4xl w-70 text-white font-bold p-3 mt-4 cursor-pointer shadow-2xl"
                        type="submit"
                    >
                        Sign In
                    </button>

                    <div className="text-[#30573B] text-sm mt-8 flex flex-row">
                        <p className="me-2">
                            Don't have an account?
                        </p>
                        <Link className="underline" to={"/signup"}>
                            Sign up here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;