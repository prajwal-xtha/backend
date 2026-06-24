//mongodb+srv://<db_username>:<db_password>@cluster0.rgah1ma.mongodb.net/


const mongoose=require('mongoose')

console.log("hello")

const connect=async () => {
    try{
        await mongoose.connect('mongodb+srv://prajwal:auth@cluster0.rgah1ma.mongodb.net/');
        console.log("mongodb connected sucessfully ")
    }

    catch(error){
console.log('unable to connect database',error)
    }
}
module.exports=connect