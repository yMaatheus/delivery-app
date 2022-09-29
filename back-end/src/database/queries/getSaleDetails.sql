SELECT sales.id, sales.status, sales.sale_date as saleDate, users.name as customer, delivery_address, delivery_number, seller.name as seller, JSON_ARRAYAGG(JSON_OBJECT('name', products.name, 'quantity', sp.quantity)) AS products
FROM `delivery-app-dev`.sales sales
INNER JOIN `delivery-app-dev`.users users
ON sales.user_id = users.id
INNER JOIN `delivery-app-dev`.users seller
ON sales.seller_id = seller.id
INNER JOIN `delivery-app-dev`.sales_products sp
ON sp.sale_id = sales.id
INNER JOIN `delivery-app-dev`.products products
ON sp.product_id = products.id
WHERE sales.id = ?
GROUP BY sales.id;