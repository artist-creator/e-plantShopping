import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const dispatch = useDispatch();

    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: true
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar">
                <h3 onClick={onHomeClick}>Paradise Nursery</h3>
                <div>
                    <a href="#" onClick={handlePlantsClick}>Plants</a>
                    <a href="#" onClick={handleCartClick}>🛒</a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
