import { Router } from 'express';
import CategoriaController from '../controllers/categoria.controller.mjs';

const categoriaRouter = Router();

const categoriaController = new CategoriaController();

categoriaRouter.get("/categoria", (request, response) => {
    categoriaController.getAll(request, response);
})

categoriaRouter.get("/categoria/:id", (request, response) => {
    categoriaController.getById(request, response);

})

categoriaRouter.post("/categoria", (request, response) => {
    categoriaController.create(request, response);
})

categoriaRouter.patch("/categoria/:id", (request, response) => {
    categoriaController.update(request, response);
})

categoriaRouter.delete("/categoria/:id", (request, response) => {
    categoriaController.delete(request, response);
})



export {categoriaRouter};