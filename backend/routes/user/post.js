const postUser = (req,res) => {
    console.log('req',req.body);
    res.status(201).send({
        status:201
    })
}

export default postUser;