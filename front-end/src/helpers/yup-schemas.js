import * as yup from 'yup';

const minCharactersName = 12;
const minCharactersPassWord = 6;

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
});

export const loginSchema = yup.object({
  email: yup.string().email('Email inválido').required(),
  password: yup
    .string()
    .min(minCharactersPassWord, 'senha abaixo de 6 caracteres')
    .required(),
});

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(minCharactersName, 'nome completo muito curto')
    .required(),
  email: yup.string().email('Email inválido').required(),
  password: yup
    .string()
    .min(minCharactersPassWord, 'senha abaixo de 6 caracteres')
    .required(),
});
