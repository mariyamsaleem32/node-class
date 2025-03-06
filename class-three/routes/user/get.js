import User from '../../models/user/index.js';

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
    };
};
  export default getUser;
  