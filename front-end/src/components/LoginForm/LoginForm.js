import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { loginSchema } from '../../helpers/yup-schemas';
import { useUser } from '../../context/user-context';
import './loginForm.css';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });
  const { login } = useUser();

  const history = useHistory();

  const onSubmit = (data) => login(data);

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <div className="box">
      <form className="login-form" onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            data-testid="common_login__input-email"
            name="email"
            type="email"
            { ...register('email') }
          />
        </label>

        <label htmlFor="password">
          <p>senha:</p>
          <input
            data-testid="common_login__input-password"
            name="password"
            type="password"
            { ...register('password') }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ !isDirty || !isValid }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ handleRegister }
        >
          Ainda não tenho conta
        </button>
        <p data-testid="common_login__element-invalid-email">
          {(errors?.email && `Email: ${errors.email.message}`)
            || (errors?.password && `senha: ${errors?.password?.message}`)}
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
