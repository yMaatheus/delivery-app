import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ProductCard({ name, price, urlImage }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="500"
        image={ urlImage }
        alt={ name }
        sx={ { width: '50%' } }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { price }
        </Typography>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}.isRequired;

export default ProductCard;
