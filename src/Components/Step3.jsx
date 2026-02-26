function Step3({ formData, prevStep, setStep }) {
  const handleSubmit = () => {
    console.log(formData);
    setStep(4);
  };

  return (
    <div>
      <h3>Review Your Information</h3>
      <div className="review">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>DOB:</strong> {formData.dob}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>

      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Step3;