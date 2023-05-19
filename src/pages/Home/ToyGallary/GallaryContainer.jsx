import React from 'react';
import ToyGallary from './ToyGallary';

const GallaryContainer = () => {
    return (
        <div>
            <h3>Best Collection</h3>
            <h1>Attractive Toys Gallary </h1>
            <div>
                <ToyGallary>{2000}</ToyGallary>
                <ToyGallary>{5000}</ToyGallary>
            </div>
        </div>
    );
};

export default GallaryContainer;