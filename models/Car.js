import mongoose from "mongoose"

 const CarSchema = new mongoose.Schema({
    mark: {
        type: String,
        required: [true , "Марка обязательна!"], 
        trim: true
    },
    model: {
        type:String,
        required:  [true , "Модель обязательна!"],
        trim: true
    },
    year: {
        type: Number,
        required: [true , "Год обязателен!"],
        min: 0
    },
    color: {
        type: String,
        required: [true , "Цвет обязателен!"],
        min: 0
    }
 })

export default mongoose.model("Car", CarSchema)