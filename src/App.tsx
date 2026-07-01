import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/shared/lang-switcher";
import EditProfilePage from "./features/profile/pages/EditProfilePage";
import ProfilePage from "./features/profile/pages/ProfilePage";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./features/authentication/pages/SignInPage";
import SignUpPage from "./features/authentication/pages/SignUpPage";
import AuthLayout from "./features/authentication/pages/AuthLayout";
import ForgetPasswordPage from "./features/authentication/pages/ForgetPasswordPage";
import ResetPasswordPage from "./features/authentication/pages/ResetPasswordPage";
import VerifyAccountPage from "./features/authentication/pages/VerifyAccountPage";
import Overview from "./features/profile/pages/Overview";
import Tasks from "./features/profile/pages/Tasks";
import Files from "./features/profile/pages/Files";

export default function App() {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/verifyaccount" element={<VerifyAccountPage />} />
      </Route>
      <Route path="/dashboard">
        <Route path="profile/editprofile" element={<EditProfilePage />} />
        <Route path="profile" element={<ProfilePage />}>
          <Route path="overview" element={<Overview />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="files" element={<Files />} />
        </Route>
      </Route>
    </Routes>
  );
}
