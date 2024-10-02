import React, { useEffect, useState } from 'react';
import "../Loader/Loader.css"; // Add your custom loader styles here

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
