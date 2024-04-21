import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Profile from "./routes/Profile";
import Ranking from "./routes/Ranking";
import Results from "./routes/Results";
import Tracks from "./routes/Tracks";
import Home from "./routes/Home";
import EditProfile from "./routes/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/tracks",
        element: <Tracks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
