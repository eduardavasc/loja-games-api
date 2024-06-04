import prismaClient from "../utils/prismaClient.mjs";

export default class ProdutoController {

    async getAll(request, response) {
        try {
            const produtos = await prismaClient.produto.findMany();
            response.json(produtos);
        } catch (error) {
            response.status(500).send({ message: 'Erro ao recuperar produtos', error });
        }
    }

    async getById(request, response) {
        const { id } = request.params;
    
        const produto = await prismaClient.produto.findUnique({ where: { id: parseInt(id) } });
    
        if (!produto) {
          return response.status(404).send({ message: 'Produto não encontrado.' });
        }
    
        response.send(produto);
    }

    async create(request, response) {
        const { nome, preco, metacritic, descricao, categoriaId } = request.body; 
        try {
            const newProduto = await prismaClient.produto.create({
                data: {
                    nome,
                    preco,
                    descricao,
                    metacritic,
                    categoriaId
                }
            });
            response.status(201).json(newProduto);
        } catch (error) {
            response.status(500).send({ message: 'Erro ao criar produto', error });
        }
    }

    async update(request, response) {
        const { id } = request.params;
        const { nome, preco, descricao, categoria } = request.body;
        try {
            const updatedProduto = await prismaClient.produto.update({
                where: { id: parseInt(id) },
                data: { nome, preco, descricao, categoria }
            });
            response.json(updatedProduto);
        } catch (error) {
            response.status(404).send({ message: 'Produto não encontrado ou erro ao atualizar', error });
        }
    }

    async delete(request, response) {
        const { id } = request.params;
        try {
            await prismaClient.produto.delete({
                where: { id: parseInt(id) }
            });
            response.status(204).send();
        } catch (error) {
            response.status(404).send({ message: 'Produto não encontrado ou erro ao deletar', error });
        }
    }

}