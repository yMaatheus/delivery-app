const userMock = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
  role: 'administrator',
  get: () => userMock,
}

const userValidMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
}

module.exports = { userMock, userValidMock }