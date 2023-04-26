import { Router } from "express";
import { UserController } from "./users/usersControllers.resolver";
import { FavoritesController } from "./favorites/favorites.resolver";
const route = Router();

route.post("/users", new UserController().create);
route.get("/users", new UserController().findAll);
route.post("/favoritos", new FavoritesController().create);
route.get("/favoritos", new FavoritesController().findAll);
route.get("/favoritos/:userId", new FavoritesController().findAllByUserId);
route.delete("/favoritos/:id", new FavoritesController().deleteById);

export default route