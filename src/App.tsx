// import { useTranslation } from "react-i18next";
// import LangSwitcher from "./components/shared/lang-switcher";
// import EditProfilePage from "./app/routes/EditProfilePage";
// import ProfilePage from "./app/routes/ProfilePage";
// import { Routes, Route } from "react-router-dom";
// import SignInPage from "./app/routes/SignInPage";
// import SignUpPage from "./app/routes/SignUpPage";
// import AuthLayout from "./app/routes/AuthLayout";
// import ForgetPasswordPage from "./app/routes/ForgetPasswordPage";
// import ResetPasswordPage from "./app/routes/ResetPasswordPage";
// import VerifyAccountPage from "./app/routes/VerifyAccountPage";
// import Overview from "./app/routes/Overview";
// import Tasks from "./app/routes/Tasks";
// import Files from "./app/routes/Files";

// export default function App() {
//   const { t } = useTranslation();

//   return (
//     <Routes>
//       <Route element={<AuthLayout />}>
//         <Route path="/signin" element={<SignInPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
//         <Route path="/resetpassword" element={<ResetPasswordPage />} />
//         <Route path="/verifyaccount" element={<VerifyAccountPage />} />
//       </Route>
//       <Route path="/dashboard">
//         <Route path="profile/editprofile" element={<EditProfilePage />} />
//         <Route path="profile" element={<ProfilePage />}>
//           <Route path="overview" element={<Overview />} />
//           <Route path="tasks" element={<Tasks />} />
//           <Route path="files" element={<Files />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// }
