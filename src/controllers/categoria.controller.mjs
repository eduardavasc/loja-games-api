import prismaClient from "../utils/prismaClient.mjs";


export default class CategoriaController {

    async getAll(request, response) {
        try {
            const categorias = await prismaClient.categoria.findMany();
            response.json(categorias);
        } catch (error) {
            response.status(500).send({ message: 'Erro ao recuperar categorias', error });
        }
    }

    async getById(request, response) {
        const { id } = request.params;
    
        const categoria = await prismaClient.categoria.findUnique({ where: { id: parseInt(id) } });
    
        if (!categoria) {
          return response.status(404).send({ message: 'categoria não encontrado.' });
        }
    
        response.send(categoria);
    }

    async create(request, response) {
        const { nome, descricao } = request.body;
        try {
            const newCategoria = await prismaClient.categoria.create({
                data: {
                    nome,
                    descricao
                }
            });
            response.status(201).json(newCategoria);
        } catch (error) {
            response.status(500).send({ message: 'Erro ao criar categoria', error });
        }
    }

    async update(request, response) {
        const { id } = request.params;
        const { nome, descricao } = request.body;
        try {
            const updatedCategoria = await prismaClient.categoria.update({
                where: { id: parseInt(id) },
                data: { nome, descricao }
            });
            response.json(updatedCategoria);
        } catch (error) {
            response.status(404).send({ message: 'Categoria não encontrada ou erro ao atualizar', error });
        }
    }

    async delete(request, response) {
        const { id } = request.params;
        try {
            await prismaClient.categoria.delete({
                where: { id: parseInt(id) }
            });
            response.status(204).send();
        } catch (error) {
            response.status(404).send({ message: 'Categoria não encontrada ou erro ao deletar', error });
        }
    }

}