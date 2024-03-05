const Validation = (data) => {
  const errors = {};
  //   console.log(data, "Data");

  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (data.firstname === "") {
    errors.firstname = "First Name is required";
  }

  if (data.lastname === "") {
    errors.lastname = "Last Name is required";
  }

  if (data.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(data.email)) {
    errors.email = "Invalid Email";
  }

  if (data.password === "") {
    errors.password = "Password is required";
  }

  if (data.cnfpwd === "") {
    errors.cnfpwd = "Confirm your password";
  } else if (data.password !== data.cnfpwd) {
    errors.cnfpwd = "Password doesn't match";
  }

  if (data.username === "") {
    errors.username = "Username is required";
  }

  if (data.address === "") {
    errors.address = "Address is required";
  }

  if (data.city === "") {
    errors.city = "City name is required";
  }

  if (data.postalcode === "") {
    errors.postalcode = "Postal code required";
  }

  //   console.log(errors, "ERRR");
  return errors;
};

export default Validation;
