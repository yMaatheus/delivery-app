import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';
import { userAdminMock } from '../mocks/userMock';

describe('screen Admin', () => {
  beforeEach(async () => {
    renderWithRouter(<App />);
    const inputEmail = await screen.findByTestId('common_login__input-email');
    const inputPassword = await screen.findByTestId('common_login__input-password');

    userEvent.type(inputEmail, userAdminMock.email);
    userEvent.type(inputPassword, userAdminMock.password);

    const btnLogin = await screen.findByTestId('common_login__button-login');

    userEvent.click(btnLogin);
  });

  it('Validate admin navbar', async () => {
    const btnManUser = await screen.findByRole('button', { name: /gerenciar usuários/i });
    const userName = await screen.findByTestId(
      'customer_products__element-navbar-user-full-name',
    );
    const btnLogout = await screen.findByTestId(
      'customer_products__element-navbar-link-logout',
    );

    expect(btnManUser).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(btnLogout).toBeInTheDocument();
  });

  it('Validate user form', async () => {
    const inputName = await screen.findByTestId('admin_manage__input-name');
    const inputEmail = await screen.findByTestId('admin_manage__input-email');
    const inputPassword = await screen.findByTestId('admin_manage__input-password');
    const selectRole = await screen.findByTestId('admin_manage__select-role');
    const btnCadastrar = await screen.findByTestId('admin_manage__button-register');

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(selectRole).toBeInTheDocument();
    expect(btnCadastrar).toBeInTheDocument();

    userEvent.type(inputName, 'Brunão top 5');
    userEvent.type(inputEmail, 'bunaoGameplaysBrHD@top5.com');
    userEvent.type(inputPassword, 'bunao123');
    userEvent.selectOptions(selectRole, 'Seller');

    userEvent.click(btnCadastrar);

    const brunaoName = await screen.findByRole('cell', { name: /brunão top 5/i });
    expect(brunaoName).toBeInTheDocument();

    userEvent.type(inputName, 'Brunão top 5');
    userEvent.type(inputEmail, 'bunaoGameplaysBrHD@top5.com');
    userEvent.type(inputPassword, 'bunao123');
    userEvent.selectOptions(selectRole, 'Seller');

    userEvent.click(btnCadastrar);

    const error = await screen.findByTestId('admin_manage__element-invalid-register');

    expect(error).toBeInTheDocument();
  });

  it('Validate user table', async () => {
    const title = await screen.findByRole('heading', { name: /lista de usuários/i });
    const table = await screen.findByRole('table');
    const tableId = await screen.findByTestId(
      'admin_manage__element-user-table-item-number-1',
    );
    const tableName = await screen.findByTestId(
      'admin_manage__element-user-table-name-1',
    );
    const tableEmail = await screen.findByTestId(
      'admin_manage__element-user-table-email-1',
    );
    const tableRole = await screen.findByTestId(
      'admin_manage__element-user-table-role-1',
    );

    expect(title).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(tableId).toBeInTheDocument();
    expect(tableName).toBeInTheDocument();
    expect(tableEmail).toBeInTheDocument();
    expect(tableRole).toBeInTheDocument();
  });
});
