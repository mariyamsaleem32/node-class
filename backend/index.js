import express from "express";
// import cors from 'cors';  //for connection with frontend
import router from './routes/index.js';
import mongoose from "./db/index.js";
// import schema from "./schema/index.js"; //joi for validation

const port = 3000
const app = express()
// app.use(cors())
app.use(express.json());

mongoose.connection.on("open", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("Error in connecting MongoDB",err);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/', (req, res) => {
  const date = new Date();
  res.status(200).send({
    status: 200,
    message: 'The current date on server is: ' + date.toDateString(),
});
});

app.use('/api',router);

// app.use('/', (req, res, next) => {
//   console.log('request--->',req.originalUrl);
//   console.log('method--->',req.method);
//   next()
// })

// const users = [];
// app.post('/user', async (req, res) => {
//   try {
//     await userSchema.validateAsync(req.body)
//     users.push({ ...req.body, id: Date.now().toString() });
//     res.status(201).send({
//       status: 201,
//       message: 'User added successfully',
//     });
//   } catch (error) {
//     res.status(400).send({
//       status: 400,
//       error: error.details || 'something went wrong'
//     });
//   }
// });

// app.get('/user', (req, res) => {
//   try {
//     res.status(200).send({
//       status: 200,
//       users: users,
//     });
//   } catch (error) {
//     res.status(400).send({
//       status: 400,
//       message: 'Something went wrong',
//     });
//   }
// });

// app.delete('/user/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const index = users.findIndex((obj) => obj.id === id);
    
//     if (index === -1) {
//       return res.status(404).send({
//         status: 404,
//         message: 'User not found',
//       });
//     }
    
//     users.splice(index, 1);
//     res.status(200).send({
//       status: 200,
//       message: 'User deleted successfully',
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       status: 500,
//       message: 'Something went wrong',
//     });
//   }
// });

// app.put('/user/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const index = users.findIndex((obj) => obj.id === id);
    
//     if (index === -1) {
//       return res.status(404).send({
//         status: 404,
//         message: 'User not found',
//       });
//     }
    
//     users.splice(index, 1, { ...req.body, id });
//     res.status(200).send({
//       status: 200,
//       message: 'User updated successfully',
//       id,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       status: 500,
//       message: 'Something went wrong',
//     });
//   }
// });

// const weatherData = {
//   karachi: {
//     city: 'karachi',
//     tempInC: 26,
//     humidity: 56,
//     high: 35,
//     low: 25,
//   },
//   lahore: {
//     city: 'lahore',
//     tempInC: 25,
//     humidity: 52,
//     high: 32,
//     low: 23,
//   },
//   islamabad: {
//     city: 'islamabad',
//     tempInC: 23,
//     humidity: 50,
//     high: 30,
//     low: 20,
//   },
// };

// app.get('/weather/:cityName', (req, res) => {
//   const userInputCity = req.params.cityName.toLowerCase();
//   const weatherDataToSend = weatherData[userInputCity];

//   if (weatherDataToSend) {
//     res.status(200).send(weatherDataToSend);
//   } else {
//     res.status(404).send({
//       status: 404,
//       message: `Data for ${req.params.cityName} not found`,
//     });
//   }
// });
