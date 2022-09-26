import * as yup from 'yup';

const minCharacters = 6;

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
});

export const loginSchema = yup.object({
  email: yup.string().email('Email inválido').required(),
  password: yup.string().min(minCharacters, 'senha abaixo de 6 caracteres').required(),
});

export const registerSchema = yup.object({});
