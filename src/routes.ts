import { Router } from "express";
import { UserController } from "./users/usersControllers.resolver";
const route = Router();

route.post("/users", new UserController().create);
route.get("/users", new UserController().findAll);

export { route };
