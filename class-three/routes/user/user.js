import User from '../../models/user/index.js';

// post user
    const postUser = async (req,res) => {
    try{
        const user = await User.create(req.body);
        const data = user.toObject();
        delete data.password;
        res.status(201).send({
            status:201,
            user: data
        })
    }catch(err){
        res.status(400).send({
            status:400,
            err
        })
    }};

    // get user 
    const getUser = async(req, res) => {
        try{  
            const users = await User.find();
            res.status(200).send({
            status: 200,
            users
            });
        }catch(err){
            res.status(400).send({
                status: 400,
                err
            })
        }};

    // update user
    const updateUser = async(req, res) => {
        try {
            const {id} = req.params;
            await User.findByIdAndUpdate(id,req.body);
            res.status(200).send({
                status: 200,
                message:'user updated succesfully',
                });
                } catch (err) {
                res.status(400).send({
                    status: 400,
                    err  
                })
        }}

// delete user
const deleteUser = async(req, res) => {
    try {
    const {id} = req.params;
    await User.findByIdAndDelete(id)
  res.status(200).send({
    status: 200,
    message:'user deleted succesfully',
    });
    } catch (err) {
    res.status(400).send({
        status: 400,
        err  
    })
}};

export {postUser,getUser,deleteUser,updateUser};