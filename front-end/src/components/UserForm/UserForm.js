import React, { useState } from 'react';

function UserForm() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    console.log(event.target[0]);
  };

  return (
    <>
      <div>
        <h2>Cadastrar novo usuário</h2>
        {errorMessage && (
          <p data-testid="admin_manage__element-invalid-register">
            { errorMessage }
          </p>
        )}
      </div>

      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          <p>Nome</p>
          <input name="name" type="text" />
        </label>

        <label htmlFor="email">
          <p>Email</p>
          <input name="email" type="email" />
        </label>

        <label htmlFor="password">
          <p>Senha</p>
          <input name="password" type="password" />
        </label>

        <label htmlFor="role">
          <p>Tipo</p>
          <select name="role">
            <option value="administrator">Administrator</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
        </label>

        <button type="submit">CADASTRAR</button>
      </form>
    </>
  );
}

export default UserForm;
