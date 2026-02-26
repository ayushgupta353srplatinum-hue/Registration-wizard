import { useState } from "react";
import Step1 from "./Components/Step1.jsx";
import Step2 from "./Components/Step2.jsx";
import Step3 from "./Components/Step3.jsx";
import Success from "./Components/Success.jsx";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="container">
      <div className="card">
        {step <= 3 && (
          <>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
            <h2>Step {step} of 3</h2>
          </>
        )}

        {step === 1 && <Step1 nextStep={nextStep} defaultValues={formData} />}
        {step === 2 && (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            defaultValues={formData}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            prevStep={prevStep}
            setStep={setStep}
          />
        )}
        {step === 4 && <Success />}
      </div>
    </div>
  );
}

export default App;