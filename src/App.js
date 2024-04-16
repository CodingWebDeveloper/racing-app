import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Profile from "./routes/Profile";
import Ranking from "./routes/Ranking";
import Results from "./routes/Results";
import Tracks from "./routes/Tracks";
import Challenges from "./routes/Challenges";
import Home from "./routes/Home";

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
      {
        path: "/challenges",
        element: <Challenges />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
