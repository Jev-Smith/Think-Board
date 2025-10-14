import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log('Connection to database successful!')
    }
    catch(err) {
        console.error(err)
        console.log('Could not connect to database :(');
    }
}