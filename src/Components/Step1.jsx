import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../schema";

function Step1({ nextStep, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
  resolver: zodResolver(step1Schema),
  mode: "onChange",
  defaultValues
});

  const onSubmit = (data) => {
    nextStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <p className="error">{errors.firstName?.message}</p>

      <input {...register("lastName")} placeholder="Last Name" />
      <p className="error">{errors.lastName?.message}</p>

      <input type="date" {...register("dob")} />
      <p className="error">{errors.dob?.message}</p>

      <button disabled={!isValid}>Next</button>
    </form>
  );
}

export default Step1;