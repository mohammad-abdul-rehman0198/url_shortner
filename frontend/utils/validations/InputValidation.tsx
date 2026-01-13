import * as yup from "yup";

export const inputValidation = yup.object().shape({
  url: yup
    .string()
    .url("Invalid URL")
    .required("URL is required")
    .matches(/^https:\/\//, "URL must start with https://"),
});
