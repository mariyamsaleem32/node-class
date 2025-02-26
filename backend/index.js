import express from 'express';
import cors from 'cors';
// import path from 'path';
// const port = process.env.PORT || 3000
const port = 3000
const app = express()
app.use(cors())
// const _dirname = path.resolve();
app.use(express.json())

app.get('/',(req,res) => {
    const date = new Date()
    res.send('the currunt date on server is :'+ date.toDateString())
})
 
 
const users = [];
app.post('/user',(req,res) =>{
  users.push({...req.body,id:users.length + 1});
     res.send({
       user: req.body,
       message:'user added sucsessfully'
     })
 })

app.get('/user',(req, res) =>{
  res.send({
  users:users,
  })
})

app.delete('/user/:id',(req, res) =>{
  const {id} = req.params;
  console.log("id",req.params);
  const index = users.findIndex(obj => obj.id === Number(id))
  users.splice(index,1)
  res.send('user deleted sucsessfully')
})

app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const index = users.findIndex(obj => obj.id === Number(id));
  if (index === -1) {
    return res.status(404).send({ message: 'User not found' });
  }
  users[index] = {
    ...users[index],
    ...req.body,    
  };
  res.send({ message: 'User updated successfully', user: users[index] });
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
    let userInputCity = req.params.cityName.toLowerCase();
    let weatherDataToSend = weatherData[userInputCity];
    if (weatherDataToSend) {
      res.send(weatherDataToSend);
    } else {
      res.status(404).send(`Data for ${req.params.cityName} not found`);
    }
  })

// app.use(express.static(path.join(_dirname, 'application', 'dist')));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});