import express from 'express';
import userSchema from "./schema/index.js"; //joi for validation
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`server is runing on ${port}`);  
})

app.get('/', (req, res) => {
    const date = new Date();
    res.send({
      message: 'The current date on server is: ' + date.toDateString(),
  });
  });

  app.use('/', (req, res, next) => {
  console.log('request--->',req.originalUrl);
  console.log('method--->',req.method);
  next()
})

const users = [];
app.post('/user', async (req, res) => {
  try {
    await userSchema.validateAsync(req.body)
    users.push({ ...req.body, id: Date.now().toString() });
    res.status(201).send({
      status: 201,
      message: 'User added successfully',
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      error: error.details || 'something went wrong'
    });
  }
});

app.get('/user', (req, res) => {
  try {
    res.status(200).send({
      status: 200,
      users: users,
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: 'Something went wrong',
    });
  }
});

app.delete('/user/:id', (req, res) => {
  try {
    const { id } = req.params;
    const index = users.findIndex((obj) => obj.id === id);
    
    if (index === -1) {
      return res.status(404).send({
        status: 404,
        message: 'User not found',
      });
    }
    
    users.splice(index, 1);
    res.status(200).send({
      status: 200,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: 'Something went wrong',
    });
  }
});

app.put('/user/:id', (req, res) => {
  try {
    const { id } = req.params;
    const index = users.findIndex((obj) => obj.id === id);
    
    if (index === -1) {
      return res.status(404).send({
        status: 404,
        message: 'User not found',
      });
    }
    
    users.splice(index, 1, { ...req.body, id });
    res.status(200).send({
      status: 200,
      message: 'User updated successfully',
      id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: 'Something went wrong',
    });
  }
});

  