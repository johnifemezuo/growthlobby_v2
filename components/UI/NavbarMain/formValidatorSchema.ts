
import * as yup from "yup";


export const formValidatorSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    phone: yup.string().required(),
    project: yup.string()
  })
  .required();