import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import NotFound from "./pages/NotFound";

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
    path: "signin",
    element: <SignIn />
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App
