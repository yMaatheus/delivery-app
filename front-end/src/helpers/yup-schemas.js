import * as yup from 'yup';

const minCharactersName = 12;
const minCharactersPassWord = 6;

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
    email: 'Email inválido',
    min: 'quantidade de caracteres insuficiente',
  },
});

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(minCharactersPassWord)
    .required(),
});

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(minCharactersName, 'nome completo muito curto')
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(minCharactersPassWord)
    .required(),
});

export const userSchema = yup.object({
  name: yup.string().min(minCharactersName, 'nome completo muito curto').required(),
  email: yup.string().email().required(),
  password: yup.string().min(minCharactersPassWord)
    .required(),
  role: yup.string().required(),
});
