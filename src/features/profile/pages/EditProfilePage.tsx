import { UserRound } from "lucide-react";
import EditProfileInput from "../components/EditProfileInput";
import FormTitle from "../components/FormTitle";

export default function EditProfilePage() {
  return (
    <div className="w-full h-fit bg-gray-100">
      <div className="mx-auto w-[90%] p-2.5 mt-10">
        <div className="flex items-center gap-2.5 mb-10">
          <div className="rounded-full h-24 w-24 relative z-0 bg-red-500"></div>
          <h1 className="text-black text-2xl">name</h1>
        </div>
        <div className="space-y-10">
          <div className="flex justify-between w-full">
            <FormTitle
              title="Personal Info"
              description="You can change your personal information settings here."
            />
            <div className="bg-white rounded-2xl px-4 py-2 grid grid-cols-2 gap-4">
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-between w-full">
            <FormTitle
              title="Personal Info"
              description="You can change your personal information settings here."
            />
            <div className="bg-white rounded-2xl px-4 py-2 grid grid-cols-2 gap-4">
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
              <EditProfileInput
                title="Full Name"
                placeholder="Full Name"
                Icon={UserRound}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
