import { USER_NAME_MAX_LENGTH } from "./validation-constants";

export const validateRegister = (userInput) => {
  const { firstName, lastName, email, city, password } = userInput;

  const isValidFirstName =
    firstName && firstName?.length < USER_NAME_MAX_LENGTH;
  const isValidLastName = lastName && lastName?.length < USER_NAME_MAX_LENGTH;

  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = pattern.test(email);

  const evaluatedError = {};
  if (!isValidFirstName) {
    evaluatedError.firstName =
      "First Name is required and maximum 20 characters";
  }

  if (!isValidLastName) {
    evaluatedError.lastName = "Last Name is required and maximum 20 characters";
  }

  if (!city) {
    evaluatedError.city = "City is required";
  }

  if (!password) {
    evaluatedError.password = "Password should be between 6 to 20 characters";
  }

  if (!isValidEmail) {
    evaluatedError.email = "Email is not valid";
  }

  return evaluatedError;
};

export const validateProfile = (userInput) => {
  const { firstName, lastName, city } = userInput;

  const isValidFirstName =
    firstName && firstName?.length < USER_NAME_MAX_LENGTH;
  const isValidLastName = lastName && lastName?.length < USER_NAME_MAX_LENGTH;

  const evaluatedError = {};
  if (!isValidFirstName) {
    evaluatedError.firstName =
      "First Name is required and maximum 20 characters";
  }

  if (!isValidLastName) {
    evaluatedError.lastName = "Last Name is required and maximum 20 characters";
  }

  if (!city) {
    evaluatedError.city = "City is required";
  }

  return evaluatedError;
};
