import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { userSchema } from '../../helpers/yup-schemas';

function UserForm() {
  const onSubmit = (data) => {
    console.log(data);
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
        {(errors?.name || errors?.email || errors?.password || errors?.role) && (
          <p data-testid="admin_manage__element-invalid-register">
            {errors?.name?.message
              || errors?.email?.message
              || errors?.password?.message
              || errors?.role?.message}
          </p>
        )}
      </div>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="name">
          <p>Nome</p>
          <input
            name="name"
            type="text"
            { ...register('name') }
          />
        </label>

        <label htmlFor="email">
          <p>Email</p>
          <input name="email" type="email" { ...register('email') } />
        </label>

        <label htmlFor="password">
          <p>Senha</p>
          <input name="password" type="password" { ...register('password') } />
        </label>

        <label htmlFor="role">
          <p>Tipo</p>
          <select name="role" { ...register('role') }>
            <option value="administrator">Administrator</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
        </label>

        <button type="submit" disabled={ !isDirty || !isValid }>CADASTRAR</button>
      </form>
    </>
  );
}

export default UserForm;
