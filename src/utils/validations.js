import {
  NEWS_CONTENT_MIN_LENGTH,
  NEWS_TITLE_MIN_LENGTH,
  NEWS_TITLE_PATTERN,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_PATTERN,
  USER_NAME_MAX_LENGTH,
} from "./validation-constants";

export const validateRegister = (userInput) => {
  const { firstName, lastName, email, city, password } = userInput;

  const isValidFirstName =
    firstName && firstName?.length < USER_NAME_MAX_LENGTH;
  const isValidLastName = lastName && lastName?.length < USER_NAME_MAX_LENGTH;
  //   const isValidPassword =
  //     PASSWORD_PATTERN.test(password) &&
  //     password?.length >= PASSWORD_MIN_LENGTH &&
  //     password?.length <= PASSWORD_MAX_LENGTH;

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

export const validateNews = (newsInput) => {
  const { newsTitle, newsContent } = newsInput;
  const isValidNewsTitle =
    NEWS_TITLE_PATTERN.test(newsTitle) &&
    newsTitle?.length >= NEWS_TITLE_MIN_LENGTH;
  const isValidNewsContent = newsContent?.length >= NEWS_CONTENT_MIN_LENGTH;

  const evaluatedError = [];
  if (!isValidNewsContent) {
    evaluatedError.newsContent =
      "Content needs to be between 5 and 225 characters";
  }

  if (!isValidNewsTitle) {
    evaluatedError.newsTitle = "Title needs to be between 5 and 30 characters";
  }

  return evaluatedError;
};
