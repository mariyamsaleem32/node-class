
const getUser = (req, res) => {
    res.status(200).send({
        message: "Here is the user data",
        data:req.body 
    });
  };
  
  export default getUser;
  