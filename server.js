
import express from "express";
import mongoose from "mongoose";

import router from "./router.js";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(router)

mongoose
  .connect("mongodb://localhost:27017/cars")
  .then(() => {
    console.log("Успешное подключение к БД");
  })
  .catch((error) => {
    console.log("Ошибка при подключении к БД: " + error);
  });

    // 1 method  2 path      3 handler  4 params
// app.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//     console.log(products);
//   } catch (error) {
//     console.log("Ошибка при получении продуктов: " + error);
//   }
// });

// app.post("/addproduct", async (req, res) => {
//   const { title, description, price } = req.body;
//   const newProduct = await Product.create({
//     title,
//     description,
//     price,
//   });

//   await newProduct.save();
//   res.send("Продукт успешно добавлен!");
// });

// app.patch("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, price } = req.body;
//     const updateProduct = await Product.findByIdAndUpdate(id, {
//       title,
//       description,
//       price,
//     });

//     if(!updateProduct){
//       res.send("Такого товара не существует!")
//     }

//     res.send("Данные успешно изменены!");
//   } catch (error) {
//     console.log("Ошибка, не удалось выполнить команду: " + error);
    
//   }
// });


// app.put("/product/:id", async (req , res)=>{
//   try{
//     const {id} = req.params
//     const {title , description , price } = req.body

//     const updateProduct = await Product.findByIdAndUpdate(id , {title , description , price} )
    
//   }catch(error){
      
//   }
// })

// app.delete("/deleteproduct/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(id);

//     const product = await Product.findByIdAndDelete(id);
//     res.send("Продукт успешно удален!");
//   } catch (error) {
//     console.log("Ошибка при удалении продукта: " + error);
//   }
// });

app.listen(PORT, () => {
  console.log("Сервер успешно запущен на порту: " + PORT);
});
