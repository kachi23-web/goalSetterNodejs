const mongoose  = require('mongoose')  

// MONGO_URI = 'mongodb+srv://kachi:kachi123@kachicluster.4ojv3lx.mongodb.net/?retryWrites=true&w=majority'
//MONGO_URI= mongoose.connect('mongodb://localhost:27017/test')




const connectDB = async () => {

    try{
        //const conn = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true});

        const conn = await mongoose.connect(process.env.MONGO_URI);


        console.log(`MongoDB Connected: ${conn.connection.host}` .cyan.underline);
    }catch (error){
        console.log(error)
        process.exit(1)

    }
}
module.exports = connectDB
//MONGO_URI = mongodb+srv://kachi:kachi123@kachicluster.4ojv3lx.mongodb.net/mernApp?retryWrites=true&w=majority
