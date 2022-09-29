import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { getAllUsers } from '../services/admin';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await getAllUsers();
      setUsers(response);
    }
    getUsers();
  }, []);

  return (
    <>
      <NavBar client="admin" />
      <UserForm setUsers={ setUsers } />
      <UserList users={ users } />
    </>
  );
}

export default Admin;
