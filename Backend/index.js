import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import ProductRoute from './route/product.route.js';
import userRoute from './route/user.route.js'
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
    // For cloud don't give it to for local for some dependencies we have to give it ok.
  });
  console.log("Connected to Mongodb");
} catch (error) {
  console.log("Error ", error);
}

// Defining Routes 
app.use("/product",ProductRoute);

app.use("/users",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
