const mongoose = require('mongoose')

let documont =async()=>{

await mongoose.connect( 'mongodb+srv://Deepa:Deepa260631@cluster0.ydk3kbc.mongodb.net/servicemanagement')
}
documont()
.then(()=>console.log("db connected"))
.catch((err)=>console.log("dberr",err))

