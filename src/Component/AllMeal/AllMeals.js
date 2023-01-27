import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const AllMeals = ({ meal }) => {
    const { idMeal, strArea, strMeal, strMealThumb } = meal;
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`/meal/${idMeal}`);
    }
    return (
        <Container className='my-5'>
            <div className="card" style={{ "width": "18rem" }}>
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strArea}</p>
                    <Button onClick={clickHandler} variant="primary">Show Details</Button>
                </div>
            </div>
        </Container>
    );
};

export default AllMeals;
