import express from "express";
import router from './routes/index.js';
import mongoose from "./db/index.js";

const port = 3000
const app = express()
app.use(express.json());

mongoose.connection.on("open", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("Error in connecting MongoDB",err);
});

app.get('/', (req, res) => {
  const date = new Date();
  res.status(200).send({
    status: 200,
    message: 'The current date on server is: ' + date.toDateString(),
});
});

app.use('/api',router);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});