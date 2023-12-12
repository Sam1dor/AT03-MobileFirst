import './App.css'
import Cabecalho from './Cabecalho'
import CardVendedor from './CardVendedor'
import MenuGlobal from './MenuGlobal'
import ProdutoCard from './ProdutoCard'
import TituloSecao from './TituloSecao'
import Perguntas from './Perguntas'
import ProdutosRelacionados from "./ProdutosRelacionados"
import Botao from './Botao'

export default function App() {
  return (
    <div>
      <div className='header__container'>
        <Cabecalho 
          logoLoja={"./src/img/logoss.png"}
          logoLojaAlt={"Logo da Loja"}
          nomeLoja={"Sam's Store"}
          imagemCabecalhoMenu1={"./src/img/carrinho.png"}
          textoCabecalhoMenu1={"Carrinho"}
          imagemCabecalhoMenu1Alt={"Carrinho - Imagem"}
          imagemCabecalhoMenu2={"./src/img/perfil.png"}
          textoCabecalhoMenu2={"Perfil"}
          imagemCabecalhoMenu2Alt={"Perfil - Imagem"}
        />
        <MenuGlobal 
          primeiroItem={"Home"} 
          segundoItem={"Produtos"}
          terceiroItem={"Sobre"}
          quartoItem={"Contato"}
        />
      </div>
      <div className="main__container">
        <TituloSecao
          tituloAtribuido={"Produtos"}  
        />
        <ProdutoCard 
          tituloProduto={"Iphone 15 Pro Max"}
          precoProduto={"4.999,00"}
          imagemProduto={"./src/img/iphone15.jpeg"}
          imagemProdutoAlt={"Imagem do Produto"}
          produtoDescricao={"O iPhone 15 Pro Max é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.1 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 15 Pro Max são muitas e top de linha."}
          notaProduto={"4/5"}
          nomeUsuario={"Jorge Ferreira"}
          notaUsuario={"4,9/5"}
          comentarioUsuario={"Excelente produto! A loja melhor ainda, entregou no prazo"}
          dataComentario1={"10/12/2023"}
          nomeUsuario2={"Amanda Silva"}
          notaUsuario2={"3/5"}
          comentarioUsuario2={"Muito bom, mas a entrega demorou."}
          dataComentario2={"05/11/2023"}
        />
        
        <TituloSecao
          tituloAtribuido={"Vendedores"}  
        />
        <div className='vendedores__container'>
          <CardVendedor
            vendedorProduto={"Lojas ABC"} 
            emailLoja={"lojasabc@vendas.com.br"}
            telLoja= {"(21) 99999-9999"}
            notaVendedor={"4,5/5"}
          />
          <CardVendedor 
            vendedorProduto={"Casas São Paulo"} 
            emailLoja={"casassp@cssp.com.br"}
            telLoja= {"(11) 99999-9999"}
            notaVendedor={"4,3/5"}
          />
          <CardVendedor 
            vendedorProduto={"Magazine Louise"} 
            emailLoja={"mg.sac@mg-vendas.com.br"}
            telLoja= {"(85) 99999-9999"}
            notaVendedor={"5/5"}
          />
        </div>
        <TituloSecao
          tituloAtribuido={"Perguntas"}  
        />
        <Perguntas
          usuarioPergunta={"Maria José"}  
          perguntaFeita={"Qual o prazo de entrega?"}
          respostaPergunta={"Dois dias úteis."}
          dataPergunta={"10/12/2023"}
          perguntaRelacionada={"Quanto tempo leva para chegar?"}
          respostaRelacionada={"Dois dias úteis."}
          usuarioPergunta2={"Mariana Feitosa"}  
          perguntaFeita2={"É original?"}
          respostaPergunta2={"Sim. Produto Apple!"}
          dataPergunta2={"01/12/2023"}
          perguntaRelacionada2={"Esse produto é da Apple?"}
          respostaRelacionada2={"Sim, produto genuíno."}
          usuarioPergunta3={"Paulo Ferreira"}  
          perguntaFeita3={"Qual a cor?"}
          respostaPergunta3={"A cor desse produto é space grey."}
          dataPergunta3={"28/11/2023"}
          perguntaRelacionada3={"Pode trocar a cor?"}
          respostaRelacionada3={"Esse anuncio corresponde a cor space grey, caso queira outra cor procure o anuncio correspondente!"}
        />
        <TituloSecao
          tituloAtribuido={"Produtos Relacionados"}  
        />
        <div className='produtosRelacionados__container'>
          <div className='produtosRelacionados__container-box1'>
            <ProdutosRelacionados 
              produtoRelacionadoImg={"./src/img/s23u.jpg"}
              produtoRelacionadoTitulo={"Samsung S23 Ultra"}
              produtoRelacionadoPreco={"8.500,00"}
              produtoRelacionadoImgAlt={"Samsung S23"}
            />
          </div>
          <div className='botaoCustom'>
            <Botao
              valorBotao={"Mais Produtos"}  
            />
          </div>
          <div className='produtosRelacionados__container-box2'>
            <ProdutosRelacionados 
              produtoRelacionadoImg={"./src/img/xiomi.png"}
              produtoRelacionadoTitulo={"Xiaomi 13t Pro"}
              produtoRelacionadoPreco={"5.500,00"}
              produtoRelacionadoImgAlt={"Xiaomi 13t Pro"}
            />
            <ProdutosRelacionados 
              produtoRelacionadoImg={"./src/img/googlepixel.jpg"}
              produtoRelacionadoTitulo={"Google Pixel 7 Pro"}
              produtoRelacionadoPreco={"8.420,00"}
              produtoRelacionadoImgAlt={"Google Pixel 7 Pro"}
            />
            <ProdutosRelacionados 
              produtoRelacionadoImg={"./src/img/motorola.jpg"}
              produtoRelacionadoTitulo={"Motorola Edge 30"}
              produtoRelacionadoPreco={"7.000,00"}
              produtoRelacionadoImgAlt={"Motorola Edge 30"}
            />
          </div>
        </div>
      </div> 
    </div>
  )
}

