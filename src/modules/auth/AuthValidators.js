const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const getUserValidator = (value) => {
  return USER_REGEX.test(value);
};
export const getUserErros = () => {
  return [
    '4 to 24 characters.',
    'Must begin with the alphabet.',
    'No whitespace allowed',
    'Letters, numbers, underscrores, hyphen allowed.'
  ];
};
export const getEmailValidator = (value) => {
  return EMAIL_REGEX.test(value);
};
export const getEmailErrors = () => {
  return ['Enter a valid email address.'];
};
export const getPwdValidator = (value) => {
  return PWD_REGEX.test(value);
};
export const getPwdErrors = () => {
  return [
    '8 to 24 characters.',
    'Must include uppercase and lowercase letters, a number and a special character.',
    'Allowed special characters  ! @ # $ %'
  ];
};
export const getMatchPwdValidator = (value, valueToMatch) => {
  const match = value === valueToMatch;
  return match;
};
export const getMatchPwdErrors = () => {
  return 'Must match the password input field';
};

export const getAgreePolicyErrors = () => {
  return ['Agree to policy and terms is required.'];
};

const FNAME_REGEX = /^[a-zA-Z ]{4,23}$/;
export const getFnameValidator = (value) => {
  return FNAME_REGEX.test(value);
};
export const getFnameErros = () => {
  return ['4 to 24 characters.', 'Alphabets allowed only'];
};

export const getBEmailValidator = (value) => {
  return EMAIL_REGEX.test(value);
};
export const getBEmailErrors = () => {
  return ['Enter a valid email address.'];
};

const BNAME_REGEX = /^[a-zA-Z0-9 ]{4,23}$/;
export const getBnameValidator = (value) => {
  return BNAME_REGEX.test(value);
};
export const getBnameErros = () => {
  return ['4 to 24 characters.', 'Alphanumerics allowed only'];
};

// eslint-disable-next-line no-useless-escape
const BWEBSITE_REGEX =
  /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
export const getBWebsiteValidator = (value) => {
  return BWEBSITE_REGEX.test(value);
};
export const getBWebsiteErros = () => {
  return ['Enter valid website url.'];
};
