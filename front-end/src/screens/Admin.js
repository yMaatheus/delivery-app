import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import UserForm from '../components/UserForm/UserForm';
import UserList from '../components/UserList/UserList';
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
      <NavBar />
      <UserForm setUsers={ setUsers } />
      <UserList users={ users } />
    </>
  );
}

export default Admin;
