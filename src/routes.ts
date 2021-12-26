import { Router } from "express";

import UserControler from "./controles/UserControler";

const routes = Router();

routes.get('/users', UserControler.index);
routes.get('/users/create', UserControler.create);


export default routes;