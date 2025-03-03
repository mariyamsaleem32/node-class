import express from 'express';
import cors from 'cors';
import schema from './schema/index';

// import path from 'path';
// const port = process.env.PORT || 3000
const port = 3000
const app = express()
app.use(cors())
// const _dirname = path.resolve();
app.use(express.json())

app.get('/',(req,res) => {
  try{
    const date = new Date()
    res.status(200).send({
      status:200,
      message:'the currunt date on server is :'+ date.toDateString()
  })
  }catch(error){
    res.status(400).send({
      status:400,
      message:'something went wrong'
    }) 
  }
})
 
 
const users = [];
app.post('/user',(req,res) =>{
  try{
  users.push({...req.body,id:Date.now().toString()});
     res.status(201).send({
      status:201,
       user: req.body,
       message:'user added sucsessfully'
     })
    }catch(error){
      res.status(400).send({
        status:400,
        message:'something went wrong'
      }) 
    }
  })

app.get('/user',(req, res) =>{
  try{
  res.send({
  users:users,
  })
}catch(error){
console.log(error);
}
})

app.delete('/user/:id',(req, res) =>{
  try{
  const {id} = req.params;
  console.log("id",req.params);
  const index = users.findIndex(obj => obj.id === (id))
  users.splice(index,1)
  res.send('user deleted sucsessfully')
  }catch(error){
    console.log(error);
    
  }
})

app.put('/user/:id', (req, res) => {
  try{
  const { id } = req.params;
  const index = users.findIndex(obj => obj.id === (id));
  users.splice(index,1, {...req.body,id})
  res.send({id:req.body, message: 'User updated successfully', user: users[index] });
}catch(error){
  console.log(error);
}
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