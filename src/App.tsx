import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />
  }
]);
function App() {
  return <RouterProvider router={router} />

}

export default App
