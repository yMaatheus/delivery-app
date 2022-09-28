const userMock = {
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
  role: 'administrator',
}

const userMockSequelize = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
  get: () => userMockSequelize,
}

const userMockWithId = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
  role: 'administrator',
  get: () => userMockWithId,
}

const loginPayLoad = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
  token: 'TOKEN_VALIDO',
}

const userValidMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
}

module.exports = { userMock, userMockWithId, userMockSequelize, userValidMock, loginPayLoad }