import Car from "./models/Car.js"

class CarController {
  async getCars(req, res) {
    try {
      const cars = await Car.find();
      res.json(cars);
      console.log(cars);
    } catch (error) {
      console.log("Ошибка при получении автомобилей: " + error);
    }
  }

  async addCar(req, res) {
    try {
      const { mark, model, year , color } = req.body;
      
      const newCar = await Car.create({
        mark, 
        model, 
        year, 
        color
      });

      await newCar.save();
      res.send("Автомобиль успешно добавлен!");
      
    } catch (error) {
      console.log("Ошибка при добавлении автомобиля: " + error);
    }
  }

  async getCar(req, res) {
    try {
      const {id} = req.params
      const car = await Car.findById(id);
      res.json(car);
      console.log(car);
    } catch (error) {
      console.log("Ошибка при получении автомобиля: " + error);
    }
  }

  async deleteCar(req, res) {
    try {
      const {id} = req.params
      const car = await Car.findByIdAndDelete(id);
      if (!car) {
        res.send("Такой автомобиль не найден")
      }
      res.send("Автомобиль успешно удален")
    } catch (error) {
      console.log("Ошибка при удалении автомобиля: " + error);
    }
  }

  async patchCar(req, res) {
    try {
      const {id} = req.params
      const { mark, model, year , color } = req.body;
      
      
      const car = await Car.findByIdAndUpdate(id , {mark, model, year , color});
      if (!car) {
        res.send("Такой автомобиль не найден")
      }
      res.send("Автомобиль успешно обновлен")
    } catch (error) {
      console.log("Ошибка при удалении автомобиля: " + error);
    }
  }
  
}

export default new CarController();
