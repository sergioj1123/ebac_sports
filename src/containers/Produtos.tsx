import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutsQuery } from '../services/api'

import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ favoritos }: Props) => {
  const { data: produto, isLoading } = useGetProdutsQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produto?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
