import {
  Check,
  GlobeCheck,
  Mail,
  Phone,
  SquarePen,
  UserRound,
} from "lucide-react";
import EditProfileInput from "../components/EditProfileInput";
import FormTitle from "../components/FormTitle";

import Navbar from "@/components/shared/NavBarTemp";
import SectionsWrapper from "../components/SectionsWrapper";
import InputsWrapper from "../components/InputsWrapper";
import ProfileImage from "../components/ProfileImage";
import { Button } from "@/components/ui/button";

export default function EditProfilePage() {
  //TODO change profile photo after clicking the profile photo settings button

  return (
    <>
      <Navbar />
      <div className="w-full h-fit bg-gray-100 pb-10">
        <div className="mx-auto w-[90%] px-2.5 grid gap-y-15  py-14.5">
          <div className="flex items-center  gap-2.5 mb-10 ">
            <ProfileImage Icon={SquarePen} image="/public/dummyImage.jpg" />
            <h1 className="text-black text-2xl">name</h1>
          </div>
          <div className="space-y-8 ">
            {/*personal info section */}
            <SectionsWrapper>
              <FormTitle
                title="Personal Info"
                description="You can change your personal information settings here."
              />
              <InputsWrapper>
                <EditProfileInput
                  title="Full Name"
                  placeholder="Full Name"
                  Icon={UserRound}
                  type="text"
                />
                <EditProfileInput
                  title="Email Address"
                  placeholder="Email Address"
                  Icon={Mail}
                  type="text"
                />
                <EditProfileInput
                  title="Phone Number"
                  placeholder="Phone Number"
                  Icon={Phone}
                  type="text"
                />
                <EditProfileInput
                  title="Availability Status"
                  placeholder="Availability Status"
                  Icon={GlobeCheck}
                  type="text"
                />
              </InputsWrapper>
            </SectionsWrapper>
            {/*experience section */}
            <SectionsWrapper>
              <FormTitle
                title="Experience"
                description="You can change experience settings here."
              />
              <InputsWrapper>
                <EditProfileInput
                  title="Job Title"
                  placeholder="Job Title"
                  type="text"
                />
                <EditProfileInput
                  title="Years of Experience"
                  placeholder="Years of Experience"
                  type="text"
                />
                <div className="col-span-3">
                  <EditProfileInput
                    title="Current Team / Project"
                    placeholder="Current Team / Project"
                    Icon={UserRound}
                    type="text"
                  />
                </div>
              </InputsWrapper>
            </SectionsWrapper>
            <div className="w-full py-4 border-t-2 border-border mt-4">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 flex items-center rounded-2xl">
                Save <Check />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
