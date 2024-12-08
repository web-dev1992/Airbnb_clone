//we use container/ presentational design pattern here

import SubmitButtons from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

function CreateProfilePage() {
  const createprofileAction = async (prevState: any, formData: FormData) => {
    "use server";
    const firstName = formData.get("firstName");

    return { message: "profile created" };
  };
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
      <div className="border p-8 rounded-md ">
        <FormContainer action={createprofileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="userName" label="User Name" />
          </div>
          <SubmitButtons text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfilePage;
