import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../helpers/yup-schemas';
import './loginForm.css';
import { useUser } from '../../context/user-context';

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

  const onSubmit = (data) => login(data);

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
        >
          Ainda não tenho conta
        </button>
        <p data-testid="common_login__element-invalid-email">
          {
            (errors?.email && `Email: ${errors.email.message}`)
        || (errors?.password && `senha: ${errors?.password?.message}`)
          }

        </p>
        {console.log(errors, isDirty, isValid)}
      </form>
    </div>
  );
}

export default LoginForm;
