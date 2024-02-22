import { PORT } from "./config.js";
import { MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import { Book } from "./model/book.model.js";
import router from './routes/bookRoute.js';
import cors from 'cors';
const app = express();
//middleware for parsing req body
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173','https://book-store-app.onrender.com'],
}));
// app.use(cors(
//     {
//         origin:"http://localhost:3000",
//         methods:["GET","POST","PUT","DELETE"],
//         allowedHeaders:['Content Type']

//     }
// ));
app.get("/", (req, res) => {
    return res.status(200).send("WELCOME");
  });
app.use("/books",router);

//Route to save the new book

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Datase connection established");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
