import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handleLogOut = () => {
        localStorage.removeItem("currentUser");
        localStorage.setItem("isLoggedIn", "false");
        navigate("/signin");
    };

    return (
        <div className="text-white font-bold flex items-center gap-3">
            <p>{isLoggedIn && currentUser ? currentUser.username : "Guest"}</p>
            <button
                className="bg-white text-[#30573B] p-2 rounded-2xl cursor-pointer"
                onClick={handleLogOut}
            >
                Logout
            </button>
        </div>
    );
}

export default Profile;
