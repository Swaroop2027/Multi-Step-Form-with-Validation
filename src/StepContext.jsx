import { createContext, useState } from "react";
import App from "./App";

export const MultiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cnfpwd: "",
    username: "",
    address: "",
    city: "",
    postalcode: "",
  });
  // const [userData, setUserData] = useState({});

  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setCurrentStep(1);
  };

  return (
    <div>
      <MultiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </MultiStepContext.Provider>
    </div>
  );
};

export default StepContext;
