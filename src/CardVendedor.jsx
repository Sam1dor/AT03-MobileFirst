import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import IconButton from '@mui/material/IconButton';
import "./CardVendedor.css"

export default function CardVendedor( { vendedorProduto, emailLoja, telLoja, notaVendedor } ) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Vendedor
        </Typography>
        <Typography variant="h5" component="div">
          {vendedorProduto}
        </Typography>
        <Typography sx={{ mb: 0.75 }} color="text.secondary">
          {emailLoja}
        </Typography>
        <Typography sx={{ mb: 1 }} color="grey">
          Contato: {telLoja}
        </Typography>
        
        <div className="notavendedor__container">
          <IconButton aria-label="nota do vendedor">
            <StarRateIcon />
          </IconButton>
          <Typography>Avaliação: {notaVendedor}</Typography>
        </div>
        
      </CardContent>
      <CardActions>
        <Button size="small">Comprar desta loja</Button>
      </CardActions>
    </Card>
  );
}