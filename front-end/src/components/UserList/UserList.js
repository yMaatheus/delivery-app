<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

function UserList({ users }) {
=======
import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/admin';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await getAll();
      setUsers(response);
    }
    getUsers();
  }, []);

>>>>>>> feat: :sparkles: add screen admin and components user list and user form
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

<<<<<<< HEAD
UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })).isRequired,
};

=======
>>>>>>> feat: :sparkles: add screen admin and components user list and user form
export default UserList;
