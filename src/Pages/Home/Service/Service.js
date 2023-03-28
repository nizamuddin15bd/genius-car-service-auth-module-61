import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    };
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetails(id)}>Book:{name}</button>
        </div>
    );
};

export default Service;