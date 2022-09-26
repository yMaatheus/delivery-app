import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { registerSchema } from '../../helpers/yup-schemas';
import { useUser } from '../../context/user-context';
import './registerForm.css';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const { register: registerUser } = useUser();

  const history = useHistory();

  const onSubmit = (data) => {
    registerUser(data);
    history.push('/login');
  };

  return (
    <div className="box">
      <form className="registerForm" onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="name">
          <p>Nome: </p>
          <input
            data-testid="common_register__input-name"
            name="name"
            type="text"
            { ...register('name') }
          />
        </label>

        <label htmlFor="email">
          <p>Email: </p>
          <input
            data-testid="common_register__input-email"
            name="email"
            type="email"
            { ...register('email') }
          />
        </label>

        <label htmlFor="password">
          <p>senha:</p>
          <input
            data-testid="common_register__input-password"
            name="password"
            type="password"
            { ...register('password') }
          />
        </label>

        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ !isDirty || !isValid }
        >
          CADASTRAR
        </button>

        <p data-testid="common_register__element-invalid_register">
          {
            (errors?.name && `Nome: ${errors.name.message}`)
        || (errors?.email && `Email: ${errors.email.message}`)
        || (errors?.password && `Senha: ${errors?.password?.message}`)
          }
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
