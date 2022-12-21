import { object, string} from 'yup';
const regexMnemonic = /^[A-Za-z][a-zA-Z ]+$/i;

export const initialValues = {
  first_name: '',
  last_name: '',
  position: '',
  company: '',
  education: '',
  about: '',
  gender: 'male',
  languages: ['english'],
  id: ''
};

export const UserSchema = object().shape({
  first_name: string()
    .required('First Name is required!')
    .matches(regexMnemonic, 'Only Alphabet are required!'),
  last_name: string()
    .required('Last Name is required!')
    .matches(regexMnemonic, 'Only Alphabet are required!'),
  position: string().required('Position is required!'),
  company: string().required('Company is required!'),
  // education: string().required('Education is required!'),
  gender: string().required('Gender is required!')
  // languages: array().min(1, 'Select at least one language')
});
