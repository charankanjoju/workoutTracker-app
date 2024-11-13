const mongoose=require('mongoose')
const Schema=mongoose.Schema
const workoutSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    goal:{
        type:String,
        required:true
    },
    plan:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model('Workout',workoutSchema)