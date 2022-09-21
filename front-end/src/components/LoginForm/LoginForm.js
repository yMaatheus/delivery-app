import './loginForm.css';

function LoginForm() {
  return (
    <div className="box">
      <form className="login-form">
        <label htmlFor="email">
          <p>Email:</p>
          <input name="email" type="email" />
        </label>

        <label htmlFor="password">
          <p>senha:</p>
          <input name="password" type="password" />
        </label>
        <button type="submit">LOGIN</button>
        <button type="button">Ainda não tenho conta</button>
      </form>
    </div>
  );
}

export default LoginForm;
