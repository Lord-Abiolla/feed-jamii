import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./pages/home/HomePage";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />
  },

  {
    path: "/signup",
    element: <SignUp />
  },

  {
    path: "/signin",
    element: <SignIn />
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App
