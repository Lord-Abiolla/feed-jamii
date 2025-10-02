import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const createUser = async (newUser) => {
    const stored = localStorage.getItem("users");
    const users = stored ? JSON.parse(stored) : [];

    const existing = users.find(user => user.email === newUser.email);
    if (existing) {
        throw new Error("User email already exists!");
    }

    const updated = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updated));

    return newUser;
}

function SignUp() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: (data) => {
            setFormData({ username: "", email: "", password: "" });
            navigate("/signin")
        },
        onError: (error) => {
            setFormData({ username: "", email: "", password: "" })
            alert(error.message);
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    return (
        <div className="grid bg-[#EFF5E9] h-screen place-items-center">
            <div className="bg-[#C3D9AC] mx-auto w-l shadow rounded-3xl p-4 text-center">
                <h1 className="font-bold text-2xl mb-4 mt-7">Create Account</h1>

                <form
                    className="flex flex-col items-center p-3"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                    />
                    <input
                        className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        className="bg-[#EFF5E9] rounded-2xl w-80 p-4 m-3 shadow-xl outline-none"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />

                    <button
                        className="bg-[#30573B] rounded-4xl w-70 text-white font-bold p-3 mt-4 cursor-pointer shadow-2xl"
                        type="submit"
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? "Signing Up..." : "Sign Up"}
                    </button>

                    <div className="text-[#30573B] text-sm mt-8 flex flex-row">
                        <p className="me-2">
                            Already have an account?
                        </p>
                        <Link className="underline" to={"/signin"}>
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;