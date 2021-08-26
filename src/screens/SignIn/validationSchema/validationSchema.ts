import { object, string } from 'yup';

const SignInSchema = object().shape({
  email: string()
    .trim()
    .required('Email is required')
    .email('Please enter a valid email'),
  password: string()
    .trim()
    .required('Password is required')
    .min(6, `Password must be 6 characters or longer`),
});

export { SignInSchema }
