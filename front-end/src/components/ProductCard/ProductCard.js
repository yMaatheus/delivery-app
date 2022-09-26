import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard({ name, price, urlImage }) {
  return (
    <Card sx={ { maxWidth: 400, height: 730 } }>
      <CardMedia
        component="img"
        height="600"
        image={ urlImage }
        alt={ name }
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
