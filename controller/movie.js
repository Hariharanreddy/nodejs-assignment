import { ObjectId } from "mongodb";
import db from "../db/conn.js";

export const addMovie = async (req, res) => {
  try {
    const newMovie = req.body;

    if (newMovie) {
      const movies = await db.collection("movies");
      const data = await movies.insertOne(newMovie);
      res.status(200).json({ status: 200, message: data });
    }

  } catch (e) {
    res.status(400).json(e);
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await db.collection("movies");
    const data = await movies.find({}).toArray();
    res.status(200).json({ status: 200, message: data });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const getMovie = async (req, res) => {
  try {
    
    const id = new ObjectId(req.query.id);
    const movies = await db.collection("movies");
    const data = await movies.findOne({_id: id});

    if (data) {
      res.status(200).json({ status: 200, message: data });
    } else {
      res.status(200).json({ status: 200, message: "No data found" });
    }
    
  } catch (e) {
    res.status(400).json(e);
  }
};

export const getPaginatedMovies = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Current page number
      const size = parseInt(req.query.size) || 10; // Number of movies per page
  
      const movies = await db.collection("movies");
      const totalCount = await movies.countDocuments();
  
      const totalPages = Math.ceil(totalCount / size); // Calculate total number of pages
  
      const skip = (page - 1) * size; // Calculate number of movies to skip
      const data = await movies
        .find()
        .skip(skip)
        .limit(size)
        .toArray();
  
      res.status(200).json({
        status: 200,
        message: data,
        page: page,
        size: size,
        totalPages: totalPages,
        totalCount: totalCount
      });
    } catch (e) {
      res.status(400).json(e);
    }
  };
