import { Check, Mail, Phone, SquarePen, UserRound } from "lucide-react";
import EditProfileInput from "../../Features/profile/components/EditProfileInput";
import FormTitle from "../../Features/profile/components/FormTitle";
import Navbar from "@/components/shared/NavBarTemp";
import SectionsWrapper from "../../Features/profile/components/SectionsWrapper";
import InputsWrapper from "../../Features/profile/components/InputsWrapper";
import ProfileImage from "../../Features/profile/components/ProfileImage";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  editProfileSchema,
  type EditProfileFormData,
} from "../../Features/profile/schemas/editProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditProfile } from "../../Features/profile/hooks/useEditProfile";
import { useGetProfile } from "../../Features/profile/hooks/useGetProfile";
import Notify from "../../Features/profile/components/Notify";

export default function EditProfilePage() {
  //TODO change profile photo after clicking the profile photo settings button
  const { data: userProfile } = useGetProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone,
      availability_status: userProfile.availability_status,
      job_title: userProfile.job_title,
      experience_years: userProfile.experience_years,
    },
  });
  const {
    error: APIerror,
    isPending,
    isSuccess,
    mutate,
    isError,
  } = useEditProfile();

  function onSubmit(data: EditProfileFormData) {
    console.log(data);
    mutate({
      name: data.name,
      email: data.email,
      phone: data.phone,
      job_title: data.job_title,
      experience_years: Number(data.experience_years),
      availability_status: data.availability_status,
      about: `${data.job_title} with ${data.experience_years} of experience`,
    });
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-fit bg-gray-100 pb-10">
        <div className="mx-auto w-[90%] px-2.5 grid gap-y-15  py-14.5">
          <div className="flex items-center  gap-2.5 mb-10 ">
            <ProfileImage Icon={SquarePen} image="/public/dummyImage.jpg" />
            <h1 className="text-black text-2xl">{userProfile.name}</h1>
          </div>
          {/* <div>
            {isSuccess && (
              <Notify
                message="Profile info updated successfully."
                variant="success"
              />
            )}
            {isError && (
              <Notify
                message={
                  APIerror?.message ||
                  "An error occurred while updating profile info."
                }
                variant="error"
              />
            )}
          </div> */}
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
                  {...register("name")}
                  errorMSG={errors.name?.message}
                />
                <EditProfileInput
                  title="Email Address"
                  placeholder="Email Address"
                  Icon={Mail}
                  type="text"
                  {...register("email")}
                  errorMSG={errors.email?.message}
                />
                <EditProfileInput
                  title="Phone Number"
                  placeholder="Phone Number"
                  Icon={Phone}
                  type="text"
                  {...register("phone")}
                  errorMSG={errors.phone?.message}
                />
                <div>
                  <label
                    className="text-lg text-black"
                    htmlFor="availabilityStats"
                  >
                    Availability Stats
                  </label>
                  <div className="rounded-3xl border border-ring  px-3 py-2 flex w-full space-y-2">
                    <select
                      id="availabilityStats"
                      className="w-full outline-none"
                      {...register("availability_status")}
                    >
                      <option value="">Select an option</option>
                      <option value="available">available</option>
                      <option value="unavailable">unavailable</option>
                    </select>
                  </div>
                </div>
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
                  {...register("job_title")}
                />
                <EditProfileInput
                  title="Years of Experience"
                  placeholder="Years of Experience"
                  type="text"
                  {...register("experience_years")}
                />
                <div className="col-span-3">
                  <EditProfileInput
                    title="Current Team / Project"
                    placeholder="Current Team / Project"
                    type="text"
                  />
                </div>
              </InputsWrapper>
            </SectionsWrapper>
            <div className="w-full py-4 border-t-2 border-border mt-4">
              <Button
                type="submit"
                className={`w-full bg-blue-600 text-white hover:bg-blue-700 flex items-center rounded-2xl ${
                  isPending ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={isPending}
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
