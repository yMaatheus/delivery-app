import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { userSchema } from '../../helpers/yup-schemas';
import { createUser } from '../../services/admin';

function UserForm({ setUsers }) {
  const [errorMessage, setErrorMesage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await createUser(data);
      setUsers((prevState) => [...prevState, response]);
    } catch (error) {
      const message = (error?.response?.data?.message)
       || ('Não foi possível concluir a operação');
      setErrorMesage(message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: 'onChange',
  });

  return (
    <>
      <div>
        <h2>Cadastrar novo usuário</h2>
        {(errors?.name || errors?.email || errors?.password
        || errors?.role || errorMessage) && (
          <p data-testid="admin_manage__element-invalid-register">
            { errors?.name?.message
              || errors?.email?.message
              || errors?.password?.message
              || errors?.role?.message || errorMessage}
          </p>
        )}
      </div>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="name">
          <p>Nome</p>
          <input
            name="name"
            type="text"
            data-testid="admin_manage__input-name"
            { ...register('name') }
          />
        </label>

        <label htmlFor="email">
          <p>Email</p>
          <input
            name="email"
            type="email"
            data-testid="admin_manage__input-email"
            { ...register('email') }
          />
        </label>

        <label htmlFor="password">
          <p>Senha</p>
          <input
            name="password"
            type="password"
            data-testid="admin_manage__input-password"
            { ...register('password') }
          />
        </label>

        <label htmlFor="role">
          <p>Tipo</p>
          <select
            name="role"
            data-testid="admin_manage__select-role"
            { ...register('role') }
          >
            <option value="administrator">Administrator</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ !isDirty || !isValid }
        >
          CADASTRAR
        </button>
      </form>
    </>
  );
}

UserForm.propTypes = {
  setUsers: PropTypes.func,
}.isRequired;

export default UserForm;
