import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.jsx";
import Layout from "./Layout.jsx";
import About from "./About.jsx";
import Champions from "./Champions.jsx";
import Champion from "./Champion.jsx";
import CreateChampion from "./CreateChampion.jsx";
import EditChampion from "./EditChampion.jsx";

const router = createBrowserRouter([{
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/champions",
      element: <Champions/>
    },
    {
      path: "/champions/create",
      element: <CreateChampion/>
    },
    {
      path: "/champions/:id/edit",
      element: <EditChampion/>
    },
    {
      path: "/champions/:id",
      element: <Champion/>
    },
  ]
}])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
