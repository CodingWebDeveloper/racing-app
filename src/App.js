import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Root from "./routes/Root";
import Ranking from "./routes/Ranking";
import Profile from "./routes/Profile";
import Tracks from "./routes/Tracks";
import Home from "./routes/Home";
import EditProfile from "./routes/EditProfile";
import Register from "./routes/Register";
import LoginIn from "./routes/Login";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import { selectUser, setUser } from "./store/slices/usersSlice";
import { useEffect, useState } from "react";
import { onAuthStateChangedListener } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserByEmailQuery,
  useGetUserByRacerIdQuery,
} from "./store/slices/api/usersApiSlice";
import AdminConsole from "./routes/AdminConsole";
import Karts from "./routes/Karts";
import LandingPage from "./routes/LandingPage";

function App() {
  // General hooks
  const dispatch = useDispatch();

  // States
  const [authState, setAuthState] = useState({
    authListened: false,
    isAuthenticated: false,
  });

  // Selectors
  const user = useSelector(selectUser);

  const {
    data: userData,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
  } = useGetUserByEmailQuery(
    { email: user?.email },
    {
      skip: !authState.isAuthenticated,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        dispatch(setUser({ email: user.email }));
        setAuthState({
          authListened: true,
          isAuthenticated: true,
        });
      } else {
        setAuthState({
          authListened: true,
          isAuthenticated: false,
        });
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (authState.isAuthenticated && authState.authListened) {
      if (userData && isSuccessUser) {
        dispatch(setUser({ ...user, ...userData }));
      }
    } else {
      dispatch(setUser(undefined));
    }
  }, [userData, authState.isAuthenticated]);

  if (!authState.authListened || isLoadingUser) {
    return <LoadingSpinner />;
  }

  const isAuthenticated = user && authState.isAuthenticated;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root isAuthenticated={isAuthenticated} />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="tracks" element={<Tracks />} />
          <Route path="karts" element={<Karts />} />
          {user?.email === "erkancooo@gmail.com" && (
            <Route path="admin-console" element={<AdminConsole />} />
          )}
        </Route>

        <Route
          path="/landing-page"
          element={isAuthenticated ? <Navigate to="/" /> : <LandingPage />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginIn />}
        />
        <Route path="*" element={<Navigate to="/landing-page" />} />
      </Routes>
    </Router>
  );
}

export default App;
