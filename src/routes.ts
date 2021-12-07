import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";
import favoritoController from "./controllers/FavoritoController";
import categoriaController from "./controllers/CategoriaController";
import veiculoController from "./controllers/VeiculoController";

const routes = Router();

routes.get('/usuarios', usuarioController.index);
routes.get('/usuarios/:id', usuarioController.show);
routes.post('/usuarios/login', usuarioController.login);
routes.post('/usuarios', usuarioController.create);
routes.put('/usuarios/:id', usuarioController.update);
routes.delete('/usuarios/:id', usuarioController.delete);

routes.get('/favoritos', favoritoController.index);
routes.get('/favoritos/:id', favoritoController.show);
routes.post('/favoritos', favoritoController.create);
routes.put('/favoritos/:id', favoritoController.update);
routes.delete('/favoritos/:id', favoritoController.delete);

routes.get('/categorias', categoriaController.index);
routes.get('/categorias/:id', categoriaController.show);
routes.post('/categorias', categoriaController.create);
routes.put('/categorias/:id', categoriaController.update);
routes.delete('/categorias/:id', categoriaController.delete);

routes.get('/veiculos', veiculoController.index);
routes.get('/veiculos/:id', veiculoController.show);
routes.post('/veiculos', veiculoController.create);
routes.put('/veiculos/:id', veiculoController.update);
routes.delete('/veiculos/:id', veiculoController.delete);

export default routes;
