import mongoose from "mongoose";

const db = mongoose.connection

mongoose.set('strictQuery', false)

mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function(){
    console.log(`connected to mongoDb ${db.name} at ${db.host}: ${db.port}`)
})
