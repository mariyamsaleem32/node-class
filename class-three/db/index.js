import mongoose from 'mongoose';
import 'dotenv/config';

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mariyamcluster.vye9a.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=mariyamCluster`;

mongoose.connect(url)
export default mongoose;
