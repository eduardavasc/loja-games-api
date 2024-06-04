import { Router } from 'express';
import ProdutoController from '../controllers/produto.controller.mjs';

const produtoRouter = Router();

const produtoController = new ProdutoController();

produtoRouter.get("/produto", (request, response) => {
    produtoController.getAll(request, response)
})

produtoRouter.get("/produto/:id", (request, response) => {
    produtoController.getById(request, response);
})

produtoRouter.post("/produto", (request, response) => {
    produtoController.create(request, response);
})

produtoRouter.patch("/produto/:id", (request, response) => {
    produtoController.update(request, response);
})

produtoRouter.delete("/produto/:id", (request, response) => {
    produtoController.delete(request, response);
})



export {produtoRouter};