import React from 'react';
// Component 
import Menu from '../components/Menu'

const Favorites = () => {
    return (
        <div>
            < Menu />
            <h1>{localStorage.getItem('favorite')}</h1>
        </div>
    )
} 

export default Favorites;