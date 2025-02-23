import express from 'express';
import path from 'path';
// import cors from 'cors';
const port = process.env.PORT || 3000
const app = express()
// app.use(cors())
const _dirname = path.resolve();

app.get('/',(req, res) =>{
  res.send('I am using express js!')
})

app.get('/posts',(req, res) =>{
    res.send({
      title:'Hello World!',
      Date : new Date().toLocaleString()
    })
  })

    // app.get('/:cityName', (req, res) => {
    //     let weatherData ={
    //       karachi:{
    //         city :"karachi",
    //         tempInC: 26,
    //         humidity: 56,
    //         high: 32,
    //         low: 23
    //       },
    //       lahore:{
    //         city :"lahore",
    //         tempInC: 28,
    //         humidity: 56,
    //         high: 32,
    //         low: 23
    //       },
    //       islamabad:{
    //         city :"islamabad",
    //         tempInC: 28,
    //         humidity: 56,
    //         high: 32,
    //         low: 23
    //       }
    //     }  
    //     let userInputCity = req.params.cityName.toLowerCase();
    //     let weatherDataToSend = weatherData[userInputCity];
    //     if(weatherDataToSend){
    //       res.send(weatherDataToSend);
    //     }else{
    //       res.status(404).send(`Data for ${req.params.cityName} not found`);
    //     }
    //   })

    //   app.use(express.static(path.join(_dirname,'public'))
    //   )

      app.listen(port,() =>{
        console.log(`server is running on ${port}`);
        })