import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { MultiStepContext } from "./StepContext";
import { useContext } from "react";

const App = () => {
  const { currentStep } = useContext(MultiStepContext);

  const showStep = (step) => {
    // console.log(step);
    switch (step) {
      case 1:
        return <FirstStep />;

      case 2:
        return <SecondStep />;

      case 3:
        return <ThirdStep />;
    }
  };

  return (
    <div className="bg-indigo-950 h-screen">
      <h3 className="text-4xl text-center text-red-600 font-bold pt-2">
        Multi Step Application
      </h3>
      <div className="flex justify-center">
        <Stepper
          className="w-[58%] text-center mt-8 mb-8"
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
    </div>
  );
};

export default App;
