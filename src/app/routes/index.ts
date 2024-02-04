import express from "express";
import { UserRoute } from "../module/user/user.route";
import { TeamRoutes } from "../module/team/team.routes";
import { ProductRoutes } from "../module/products/product.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoute,
  },
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/teams",
    route: TeamRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
