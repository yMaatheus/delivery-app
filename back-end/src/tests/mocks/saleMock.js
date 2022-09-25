const saleAndProductMock = {
  "sale": {
    "userId": 1,
    "sellerId": 3,
    "totalPrice": 11.00,
    "deliveryAddress": "rua joao carlos",
    "deliveryNumber": "200"
  },
  "product": [{
    "productId": 1,
    "quantity": 5
  }]
}

const saleMock = {
  "userId": 1,
  "sellerId": 3,
  "totalPrice": 11.00,
  "deliveryAddress": "rua joao carlos",
  "deliveryNumber": "200",
  get: () => saleStatusMock,
}

const saleStatusMock = {
  "status": "Pendente",
  "id": 9,
  "userId": 1,
  "sellerId": 3,
  "totalPrice": 11.00,
  "deliveryAddress": "rua joao carlos",
  "deliveryNumber": "200",
  "saleDate": "2022-09-24T21:41:28.637Z"
}

const productMock = {
  id: 1,
  name: 'Skol Lata 250ml',
  price: '2.20',
  urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg'
}

module.exports = { saleAndProductMock, productMock, saleMock, saleStatusMock };