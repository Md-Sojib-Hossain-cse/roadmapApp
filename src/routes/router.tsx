import { createBrowserRouter } from "react-router";
import GeneralLayout from "../layout/GeneralLayout";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import SingleRoadmapPage from "../pages/SingleRoadmapPage/SingleRoadmapPage";
import UserProtectedRoutes from "./UserProtectedRoutes/UserProtectedRoutes";
import NoUserProtectedRoutes from "./UserProtectedRoutes/NoUserProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/roadmap/:id",
        element: (
          <UserProtectedRoutes>
            <SingleRoadmapPage></SingleRoadmapPage>
          </UserProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <NoUserProtectedRoutes>
            <LoginPage></LoginPage>
          </NoUserProtectedRoutes>
        ),
      },
      {
        path: "/signup",
        element: (
          <NoUserProtectedRoutes>
            <SignupPage></SignupPage>
          </NoUserProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
