import React from 'react';
import PropTypes from 'prop-types';

function UserList({ users }) {
  return (
    <div>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users.map(({ id, name, email, role }) => (
            <tr key={ id }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${id}` }
              >
                {id}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${id}` }
              >
                {name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${id}` }
              >
                {email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${id}` }
              >
                {role}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${id}` }
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })).isRequired,
};

export default UserList;
