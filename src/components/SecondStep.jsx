import { MultiStepContext } from "../StepContext";
import { useContext, useState } from "react";
import Validation from "../Validation";

const SecondStep = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);

  const [errors, setErrors] = useState({});

  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation(userData));
  };

  return (
    <div className="container mx-auto p4-10 bg-indigo-950">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full px-6 py-8 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Password & Username
            </h2>
            <form className="mt-6">
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="••••••"
                  value={userData["password"]}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
                {errors.password && !userData.password && (
                  <p>{errors.password}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="cnfpwd"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cnfpwd"
                  type="password"
                  placeholder="••••••"
                  value={userData["cnfpwd"]}
                  onChange={(e) =>
                    setUserData({ ...userData, cnfpwd: e.target.value })
                  }
                />
                {errors.cnfpwd && <p>{errors.cnfpwd}</p>}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="username"
                >
                  username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="john_doe_123"
                  value={userData["username"]}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                />
                {errors.username && !userData.username && (
                  <p>{errors.username}</p>
                )}
              </div>

              <button
                className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setCurrentStep(1)}
              >
                Back
              </button>
              <span> </span>
              {userData.password &&
              userData.cnfpwd &&
              userData.username &&
              userData.password === userData.cnfpwd ? (
                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setCurrentStep(3)}
                >
                  Next
                </button>
              ) : (
                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={(e) => handleValidation(e)}
                >
                  Next
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
