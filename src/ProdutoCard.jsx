import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRateIcon from '@mui/icons-material/StarRate';
import './ProdutoCard.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProdutoCard({ tituloProduto, precoProduto, imagemProduto, imagemProdutoAlt, produtoDescricao, notaProduto, nomeUsuario, notaUsuario, comentarioUsuario, nomeUsuario2, notaUsuario2, comentarioUsuario2, dataComentario1, dataComentario2 }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="add favorito">
            <FavoriteIcon />
          </IconButton>
        }
        title={tituloProduto}
        subheader={`Preço: R$${precoProduto}`}
      />
      <CardMedia
        component="img"
        height="275"
        image={imagemProduto}
        alt={imagemProdutoAlt}
      />
      <CardContent>
        <Typography className="produto__descricao" variant="body2" color="text.secondary">
          Descrição do Produto: {produtoDescricao}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <div className="nota__container">
          <IconButton aria-label="nota do produto">
            <StarRateIcon />
          </IconButton>
          <Typography>Nota: {notaProduto}</Typography>
          <IconButton aria-label="AddShoppingCartIcon">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
        
        <div className="comentarios__container">
          <Typography>Comentários</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >

            <ExpandMoreIcon />
          </ExpandMore>
        </div>
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div className="comentarios__container-usuarios">
            <div className="comentarios__container-box">
              <div className="comentarios__container-box-cabecalho">
                <h3>Usuario: {nomeUsuario}</h3>
                <div className="comentarios__container-box-cabecalho-nota">
                  <IconButton aria-label="nota do produto">
                    <StarRateIcon />
                  </IconButton>
                  <p>Nota: {notaUsuario}</p>
                </div>
              </div>
              <div>
                <p>Comentário: {comentarioUsuario}</p>
              </div>
              <div className="comentarios__data">
                <p>Data: {dataComentario1}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <div className="comentarios__container-usuarios">
            <div className="comentarios__container-box">
              <div className="comentarios__container-box-cabecalho">
                <h3>Usuario: {nomeUsuario2}</h3>
                <div className="comentarios__container-box-cabecalho-nota">
                  <IconButton aria-label="nota do produto">
                    <StarRateIcon />
                  </IconButton>
                  <p>Nota: {notaUsuario2}</p>
                </div>
              </div>
              <div>
                <p>Comentário: {comentarioUsuario2}</p>
              </div>
              <div className="comentarios__data">
                <p>Data: {dataComentario2}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Collapse>

      


      
    </Card>
  );
}