import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
        return <Outlet />;
    } else {
        return <Navigate to="/signin" replace />;
    }
}

export default ProtectedRoute;
