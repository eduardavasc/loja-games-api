import express from "express"
import { produtoRouter } from "./routes/produto.router.mjs";
import { categoriaRouter } from "./routes/categoria.router.mjs";

const PORT = process.env.PORT || 5000

const server = express();

server.use(express.json());
server.use(produtoRouter);
server.use(categoriaRouter);

server.listen(PORT, () => {
    console.log(`Estou rodando na porta ${PORT}`);
  });