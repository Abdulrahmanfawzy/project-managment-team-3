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
import { useForm } from "react-hook-form";
import {
  editProfileSchema,
  type EditProfileFormData,
} from "../schemas/editProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditProfile } from "../hooks/useEditProfile";

export default function EditProfilePage() {
  //TODO change profile photo after clicking the profile photo settings button
  //TODO change the availavility status element

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
  });
  const {
    data,
    error: APIerror,
    isPending,
    isSuccess,
    mutate,
  } = useEditProfile();

  function onSubmit(data: EditProfileFormData) {
    console.log(data);
    // mutate({
    //   fullName: data.fullName,
    //   email: data.email,
    //   phoneNumber: data.phoneNumber,
    //   jobTitle: data.jobTitle,
    //   YOE: data.YOE,
    //   currentTaP: data.currentTaP,
    // });
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-fit bg-gray-100 pb-10">
        <div className="mx-auto w-[90%] px-2.5 grid gap-y-15  py-14.5">
          <div className="flex items-center  gap-2.5 mb-10 ">
            <ProfileImage Icon={SquarePen} image="/public/dummyImage.jpg" />
            <h1 className="text-black text-2xl">name</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
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
                  {...register("fullName")}
                />
                <EditProfileInput
                  title="Email Address"
                  placeholder="Email Address"
                  Icon={Mail}
                  type="text"
                  {...register("email")}
                />
                <EditProfileInput
                  title="Phone Number"
                  placeholder="Phone Number"
                  Icon={Phone}
                  type="text"
                  {...register("phoneNumber")}
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
                  {...register("jobTitle")}
                />
                <EditProfileInput
                  title="Years of Experience"
                  placeholder="Years of Experience"
                  type="text"
                  {...register("YOE")}
                />
                <div className="col-span-3">
                  <EditProfileInput
                    title="Current Team / Project"
                    placeholder="Current Team / Project"
                    Icon={UserRound}
                    type="text"
                    {...register("currentTaP")}
                  />
                </div>
              </InputsWrapper>
            </SectionsWrapper>
            <div className="w-full py-4 border-t-2 border-border mt-4">
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 flex items-center rounded-2xl"
              >
                Save <Check />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
