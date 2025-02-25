import express from 'express';
// import cors from 'cors';
import path from 'path';
const port = process.env.PORT || 3000
const app = express()
// app.use(cors())
const _dirname = path.resolve();
app.use(express.json())
 
const users = [];
app.get('/user',(req, res) =>{
  res.send({
  user:users
  })
})

app.post('/user',(req,res) =>{
 users.push({...req.body, id: users.lenght + 1});
    res.send({
      user : req.body,
      message:'user added sucsessfully'
    })
})

app.get('/:cityName', (req, res) => {
  let weatherData = {
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

  let userInputCity = req.params.cityName.toLowerCase();
  let weatherDataToSend = weatherData[userInputCity];
  if (weatherDataToSend) {
    res.send(weatherDataToSend);
  } else {
    res.status(404).send(`Data for ${req.params.cityName} not found`);
  }
});

app.use(express.static(path.join(_dirname, 'application', 'dist')));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});