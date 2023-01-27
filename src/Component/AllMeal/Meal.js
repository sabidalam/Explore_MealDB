import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllMeals from './AllMeals';


const Meal = () => {
    const loadMeal = useLoaderData()
    const allMeal = loadMeal.meals;
    console.log(allMeal);
    return (
        <div>
            {
                allMeal.map(meal => <AllMeals
                    key={allMeal.idMeal}
                    meal={meal}>
                </AllMeals>)
            }
        </div>
    );
};

export default Meal;