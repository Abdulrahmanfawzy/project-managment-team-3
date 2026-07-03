// createBrowserRouter (Routes only)

import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./routes/AuthLayout";
import SignInPage from "./routes/SignInPage";
import SignUpPage from "./routes/SignUpPage";
import ForgetPasswordPage from "./routes/ForgetPasswordPage";
import ResetPasswordPage from "./routes/ResetPasswordPage";
import VerifyAccountPage from "./routes/VerifyAccountPage";
import EditProfilePage from "./routes/EditProfilePage";
import ProfilePage from "./routes/ProfilePage";
import Overview from "./routes/Overview";
import Tasks from "./routes/Tasks";
import Files from "./routes/Files";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard/profile" replace /> },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPasswordPage />,
      },
      {
        path: "/resetpassword",
        element: <ResetPasswordPage />,
      },
      {
        path: "/verifyaccount",
        element: <VerifyAccountPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "profile/editprofile",
        element: <EditProfilePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [
          {
            path: "overview",
            index: true,
            element: <Overview />,
          },
          {
            path: "tasks",
            element: <Tasks />,
          },
          {
            path: "files",
            element: <Files />,
          },
        ],
      },
    ],
  },
]);

export default router;
