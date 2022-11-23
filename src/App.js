import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/es/transfer/search';

function App() {
  const [allFood, setAllFood] = useState(foods);

  const addNewFood = (newFood) => {
    const food = [newFood, ...allFood];
    setAllFood(food);
  };

  const searchFood = (searchString) => {
    const searchedFood = allFood.filter((food) => {
      return food.name.includes(searchString);
    });
    setAllFood(searchedFood);
  };

  return (
    <div className="App">
      <Search searchFood={searchFood} />

      {allFood.map((food) => {
        return (
          <div>
            <FoodBox food={food} key={food.name} />
            {/* <p> {food.name} </p>
            <img src={food.image} alt="" width={100} /> */}
          </div>
        );
      })}

      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />

      <AddFoodForm addNewFood={addNewFood} />
    </div>
  );
}

export default App;
