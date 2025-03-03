import Password from 'antd/es/input/Password';
import joi from 'joi';

const schema = joi.object({
    username: joi.string(),
    email: joi.string(),
    Password: joi.string()
})
export default schema;