import { Router } from "express";
import { searchController } from "../controllers";

const router: Router = Router();

router.get("/items", searchController.search);
router.get("/items/:id", searchController.getById);

export default router;
