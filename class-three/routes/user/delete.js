import User from '../../models/user/index.js';

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
    }
}

export default deleteUser;