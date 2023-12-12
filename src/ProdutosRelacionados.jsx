import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProdutosRelacionados( {produtoRelacionadoImg, produtoRelacionadoTitulo, produtoRelacionadoPreco, produtoRelacionadoImgAlt }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
        component="img"
        alt={produtoRelacionadoImgAlt}
        height="250"
        image={produtoRelacionadoImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {produtoRelacionadoTitulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: R$ {produtoRelacionadoPreco}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Visitar</Button>
        <Button size="small">Favoritar</Button>
      </CardActions>
    </Card>
  );
}
