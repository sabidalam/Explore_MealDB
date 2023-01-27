import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home';
import Meal from './Component/AllMeal/Meal';
import MealDetails from './Component/MealDetails/MealDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
          },
          element: <Meal></Meal>
        },
        {
          path: '/meal/:mealId',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
          },
          element: <MealDetails></MealDetails>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
