import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup, TextField } from '@mui/material';

function ProductCard({ id, name, price, urlImage }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (value) => {
    const re = /[0-9]+/g;
    return (re.test(+value)) && setQuantity(+value);
  };

  const handleChange = ({ target: { value } }) => handleQuantity(value);
  const handleIcrement = () => handleQuantity(quantity + 1);
  const handleDecrement = () => (quantity > 0) && (handleQuantity(quantity - 1));

  return (
    <Card>
      <CardMedia
        component="img"
        height="500"
        image={ urlImage }
        alt={ name }
        sx={ { width: '70%' } }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {price}
        </Typography>

        <ButtonGroup size="large" aria-label="small outlined button group">
          <Button
            onClick={ handleDecrement }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </Button>
          <TextField
            onChange={ handleChange }
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <Button
            onClick={ handleIcrement }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}.isRequired;

export default ProductCard;
