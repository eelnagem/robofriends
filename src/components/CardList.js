import React from 'react';
import Card from './Card';

const CardList = ( {robots}) => {
    const cardComponents = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={user.id} 
                name={user.name} 
                email={user.email}
            />);
    });
    return (
        <div>
            {cardComponents}
        </div>
    );
}

export default CardList;