import User from '../../models/user/index.js';

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
    }
}

export default updateUser;