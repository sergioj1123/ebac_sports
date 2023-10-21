import * as S from './styles'
import { useSelector } from 'react-redux'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const itensNoFavorito = useSelector(
    (state: RootReducer) => state.favorito.itens
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensNoFavorito.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
