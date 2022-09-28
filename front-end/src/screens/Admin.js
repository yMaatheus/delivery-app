import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import UserForm from '../components/UserForm/UserForm';
import UserList from '../components/UserList/UserList';

function Admin() {
  return (
    <>
      <NavBar />
      <UserForm />
      <UserList />
    </>
  );
}

export default Admin;
