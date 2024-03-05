import { MultiStepContext } from "../StepContext";
import { useContext, useState } from "react";
import Validation from "../Validation";

const ThirdStep = () => {
  const { setCurrentStep, userData, setUserData, submitData } =
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
            <h2 className="text-2xl font-bold text-gray-800">Address</h2>
            <form className="mt-6">
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Park View Street"
                  value={userData["address"]}
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                />
                {errors.address && !userData.address && <p>{errors.address}</p>}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="New York"
                  value={userData["city"]}
                  onChange={(e) =>
                    setUserData({ ...userData, city: e.target.value })
                  }
                />
                {errors.city && !userData.city && <p>{errors.city}</p>}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="postal_code"
                >
                  Postal Code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="postal_code"
                  type="text"
                  placeholder="12345"
                  value={userData["postalcode"]}
                  onChange={(e) =>
                    setUserData({ ...userData, postalcode: e.target.value })
                  }
                />
                {errors.postalcode && !userData.postalcode && (
                  <p>{errors.postalcode}</p>
                )}
              </div>

              <button
                className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setCurrentStep(2)}
              >
                Back
              </button>
              <span> </span>
              {userData.address && userData.city && userData.postalcode ? (
                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={submitData}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={(e) => handleValidation(e)}
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
