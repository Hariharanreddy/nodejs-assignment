import express from "express";
import { addMovie, getAllMovies, getMovie, getPaginatedMovies } from "../controller/movie.js";

const router = express.Router();

router.post("/add-movie", addMovie);
router.get("/get-all", getAllMovies);
router.get("/get-single", getMovie);
router.get("/get-paginated", getPaginatedMovies);

export default router;