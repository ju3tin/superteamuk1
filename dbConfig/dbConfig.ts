import mongoose from 'mongoose';

export async function connect() {
    try{
 
        mongoose.connect("mongodb+srv://admin123a:admin123a@cluster0.yudvymo.mongodb.net/membership?retryWrites=true&w=majority&appName=Cluster0"!);

        mongoose.connect("mongodb+srv://admin123a:admin123a@cluster0.yudvymo.mongodb.net/membership?retryWrites=true&w=majority&appName=Cluster0"!!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error' + err);
            process.exit();
       })
    } catch (error) {
        console.log(error);
    }
}
