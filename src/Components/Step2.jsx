import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../schema";
function Step2({ nextStep, prevStep, defaultValues }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
  resolver: zodResolver(step2Schema),
  mode: "onChange",
  defaultValues
});
  const onSubmit = (data) => {
    nextStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      <p className="error">{errors.email?.message}</p>

      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </span>
      </div>
      <p className="error">{errors.password?.message}</p>

      <input
        type={showPassword ? "text" : "password"}
        {...register("confirmPassword")}
        placeholder="Confirm Password"
      />
      <p className="error">{errors.confirmPassword?.message}</p>

      <div className="buttons">
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button disabled={!isValid}>Next</button>
      </div>
    </form>
  );
}

export default Step2;