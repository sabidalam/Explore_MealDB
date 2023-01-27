import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';

const MealDetails = () => {
    const AllDetails = useLoaderData();
    console.log(AllDetails.meals[0]);
    const details = AllDetails.meals[0];
    const { idMeal, strMeal, strMealThumb, strYoutube, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = details;
    console.log(idMeal,);
    return (
        <Container>
            <CardGroup className='my-5 w-50 m-auto'>
                <Card>
                    <Card.Img variant="top" className='img-fluid w-50 m-auto mt-2 rounded' src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Title>Ingredients: {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}</Card.Title>
                        <Card.Text>{strInstructions}
                        </Card.Text>
                        <Card.Text>Recipe Link: {strYoutube}</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default MealDetails;