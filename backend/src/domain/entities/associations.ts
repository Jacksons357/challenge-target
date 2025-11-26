import MovimentacaoEstoque from './movimentacao-estoque.model'
import Produto from './produto.model'

export function createAssociations() {
	Produto.hasMany(MovimentacaoEstoque, {
		foreignKey: 'produtoId',
		as: 'movimentacoes',
	})

	MovimentacaoEstoque.belongsTo(Produto, {
		foreignKey: 'produtoId',
		as: 'produto',
	})
}
