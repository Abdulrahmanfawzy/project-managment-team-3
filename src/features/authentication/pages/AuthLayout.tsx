import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AuthLayout() {
  return (
    <div className="bg-gray-100 w-full min-h-screen ">
      {/* HEADER */}
      <Header />
      <div className=" w-full min-h-full flex justify-center items-center py-3">
        {/* form container */}
        <div className="bg-gray-100 rounded-2xl py-10 gap-3 flex-col flex px-10  items-center justify-center w-[40%] shadow-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
