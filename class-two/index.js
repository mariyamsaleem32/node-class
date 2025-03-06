import express from 'express';
const app = express();
const port = 3000
import cors from 'cors';  

app.use(cors())

app.get('/', (req, res) => {
    const date = new Date();
    res.status(200).send({
      status:200,
      message: 'The current date on server is: ' + date.toDateString(),
  });
  });

const weatherData = {
  karachi: {
    city: 'karachi',
    tempInC: 26,
    humidity: 56,
    high: 35,
    low: 25,
  },
  lahore: {
    city: 'lahore',
    tempInC: 25,
    humidity: 52,
    high: 32,
    low: 23,
  },
  islamabad: {
    city: 'islamabad',
    tempInC: 23,
    humidity: 50,
    high: 30,
    low: 20,
  },
};

app.get('/weather/:cityName', (req, res) => {
  const userInputCity = req.params.cityName.toLowerCase();
  const weatherDataToSend = weatherData[userInputCity];

  if (weatherDataToSend) {
    res.status(200).send(weatherDataToSend);
  } else {
    res.status(404).send({
      status: 404,
      message: `Data for ${req.params.cityName} not found`,
    });
  }
});

app.listen(port, () => {
    console.log(`server is runing on ${port}`);  
})